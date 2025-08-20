package ima_backend.controller;

import ima_backend.dto.CustomerDto;
import ima_backend.service.CustomerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
    private CustomerService customerService;

    //build customer rest Api

    @PostMapping

    public ResponseEntity<CustomerDto> createCustomer(@RequestBody CustomerDto customerDto) {

    CustomerDto savedCustomer = customerService.createCustomer(customerDto);

        return new ResponseEntity<>(savedCustomer,HttpStatus.CREATED);
}

// build get customer details rest api
    @GetMapping("{id}")
    public ResponseEntity<CustomerDto> getCustomersById(@PathVariable("id") Long customerId) {

        CustomerDto customerDto = customerService.getCustomerById(customerId);

        return ResponseEntity.ok(customerDto);

    }

    // build get all customers details rest apis.
   @GetMapping
    public ResponseEntity<List<CustomerDto>> getAllCustomers() {
        List<CustomerDto> customerDtos = customerService.getAllCustomers();
        return ResponseEntity.ok(customerDtos);
    }

    //build update customer api
//  @PutMapping({"id"})
//    public ResponseEntity<CustomerDto> updateCustomers(@PathVariable("id") Long customerId , @RequestBody CustomerDto updatedCustomerDto) {
//        CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomerDto);
//        return ResponseEntity.ok(customerDto);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDto> updateCustomers(
            @PathVariable("id") Long customerId,
            @RequestBody CustomerDto updatedCustomerDto) {
        CustomerDto customerDto = customerService.updateCustomer(customerId, updatedCustomerDto);
        return ResponseEntity.ok(customerDto);
    }

    //delete customer rest api
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long customerId) {

        customerService.deleteCustomer(customerId);

        return ResponseEntity.ok("Customer Deleted Sucessfully");


    }

}
