// src/pages/CustomerInfoPage.tsx
import  CustomerInfoGrid from "@/components/admin/CustomerInfoGrid";

export default function CustomerInfoPage() {
 
    const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "0712 345 678",
    address: "Nairobi"
  },
  {
    id: 2,
    name: "Jane Wanjiku",
    email: "jane@example.com",
    phone: "0790 222 333",
    address: "Thika"
  },
    {
    id: 2,
    name: "Jane Wanjiku",
    email: "jane@example.com",
    phone: "0790 222 333",
    address: "Thika"
  },
    {
    id: 2,
    name: "Jane Wanjiku",
    email: "jane@example.com",
    phone: "0790 222 333",
    address: "Thika"
  },
    {
    id: 2,
    name: "Jane Wanjiku",
    email: "jane@example.com",
    phone: "0790 222 333",
    address: "Thika"
  }
];


  return <CustomerInfoGrid customers={customers} />;
}
