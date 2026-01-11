// src/pages/CustomerInfoPage.tsx

import CustomerDetailsGrid from "./CustomerDetailsGrid";

// import CustomerDetailsGrid from "./customerdetailsGrid";


export default function CustomerDetailsPage() {

    const customers = [
  {
  id: 1,
  customer_no: 123,
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  phone: 1234567890,
  address: "123 Main St",
  country: "USA",
  county: "Orange",
  age: 30
},
{
  id: 1,
  customer_no: 123,
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  phone: 1234567890,
  address: "123 Main St",
  country: "USA",
  county: "Orange",
  age: 30
},
{
  id: 1,
  customer_no: 123,
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  phone: 1234567890,
  address: "123 Main St",
  country: "USA",
  county: "Orange",
  age: 30
},
{
  id: 1,
  customer_no: 123,
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  phone: 1234567890,
  address: "123 Main St",
  country: "USA",
  county: "Orange",
  age: 30
},
{
  id: 1,
  customer_no: 123,
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
 phone: 1234567890,
  address: "123 Main St",
  country: "USA",
  county: "Orange",
  age: 30
}
];


  return <CustomerDetailsGrid customers={customers} />;
}
