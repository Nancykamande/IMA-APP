package ima_backend.service.impl;

import ima_backend.dto.CustomerDto;
import ima_backend.entity.Customer;
import ima_backend.exception.ResourceNotFoundException;
import ima_backend.mapper.CustomerMapper;
import ima_backend.repository.CustomerRepository;
import ima_backend.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor

public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto) {
        Customer customer = CustomerMapper.maptoCustomer(customerDto);
        Customer savedCustomer = customerRepository.save(customer);

        return CustomerMapper.maptoCustomerDto(savedCustomer);
    }

    @Override
    public CustomerDto getCustomerById(long customerId) {
      Customer customer = customerRepository.findById(customerId)
        .orElseThrow(() ->
                new ResourceNotFoundException("Customer With such id does not exists: +" + customerId));
        return CustomerMapper.maptoCustomerDto(customer);
    }

    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers=customerRepository.findAll();
        return customers.stream().map((customer )-> CustomerMapper.maptoCustomerDto(customer))
                .collect(Collectors.toList());
    }

    @Override
    public CustomerDto updateCustomer(long customerId, CustomerDto updatedCustomerDto) {
       Customer customer = customerRepository.findById(customerId).orElseThrow(() ->
                new ResourceNotFoundException("Customer With such id does not exists: +" + customerId));

       customer.setFirstName(updatedCustomerDto.getFirstName());
       customer.setLastName(updatedCustomerDto.getLastName());
       customer.setEmail(updatedCustomerDto.getEmail());
       customer.setPhone(updatedCustomerDto.getPhone());
       customer.setAddress(updatedCustomerDto.getAddress());
        customer.setAddress(String.valueOf(updatedCustomerDto.getAge()));
        customer.setAddress(updatedCustomerDto.getCountry());
        customer.setAddress(updatedCustomerDto.getCounty());

        Customer updatedCustomerobj = customerRepository.save(customer);
        return CustomerMapper.maptoCustomerDto(updatedCustomerobj);
    }

    @Override
    public void deleteCustomer(long customerId) {
        Customer customer = customerRepository.findById(customerId).orElseThrow(() ->
                new ResourceNotFoundException("Customer With such id does not exists: +" + customerId));

        customerRepository.deleteById(customerId);
    }
}
