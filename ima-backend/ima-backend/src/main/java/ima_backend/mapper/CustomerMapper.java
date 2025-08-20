package ima_backend.mapper;

import ima_backend.dto.CustomerDto;
import ima_backend.entity.Customer;

public class CustomerMapper {

    public static CustomerDto maptoCustomerDto(Customer customer) {
        return new CustomerDto(
                customer.getId(),
                customer.getFirstName(),
                customer.getLastName(),
                customer.getEmail(),
                customer.getPhone(),
                customer.getAddress(),
                customer.getCounty(),
                customer.getCountry(),
                customer.getPassword(),
                customer.getAge()
                );
    }

    public static Customer maptoCustomer(CustomerDto customerDto) {
        return new Customer(
                customerDto.getId(),
                customerDto.getFirstName(),
                customerDto.getLastName(),
                customerDto.getEmail(),
                customerDto.getPassword(),
                customerDto.getPhone(),
                customerDto.getAddress(),
                customerDto.getCounty(),
                customerDto.getCountry(),
                customerDto.getAge()
        );
    }
}
