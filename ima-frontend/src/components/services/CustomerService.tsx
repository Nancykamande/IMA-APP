import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/customers';

export const listAllCustomers = () => axios.get(REST_API_BASE_URL);

// export const createCustomer = (customer) => axios.post(REST_API_BASE_URL, customer);

// export const getCustomer = (customerId) => axios.get(REST_API_BASE_URL + '/' + customerId);

// export const updateCustomer = (customerId, customer) => axios.put(REST_API_BASE_URL + '/' + customerId, customer);

// export const deleteCustomerGeneric = (customerId) => axios.delete(REST_API_BASE_URL + '/' + customerId);
