import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Grid3x3 } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CustomerInfoGridProps {
  customers: Customer[];
}

const CustomerInfoGrid: React.FC<CustomerInfoGridProps> = ({ customers }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Grid3x3 /> Customer Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer) => (
          <Card key={customer.id} className="rounded-2xl shadow p-4">
            <CardContent>
              <p><strong>Name:</strong> {customer.name}</p>
              <p><strong>Email:</strong> {customer.email}</p>
              <p><strong>Phone:</strong> {customer.phone}</p>
              <p><strong>Address:</strong> {customer.address}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerInfoGrid;
