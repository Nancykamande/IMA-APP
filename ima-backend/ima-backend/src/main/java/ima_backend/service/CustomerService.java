package ima_backend.service;

import ima_backend.dto.CustomerDto;

import java.util.List;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customerDto);

    CustomerDto getCustomerById(long customerId);

    List<CustomerDto> getAllCustomers();

    CustomerDto updateCustomer(long customerId, CustomerDto updatedCustomerDto);

    void deleteCustomer(long customerId);

}
