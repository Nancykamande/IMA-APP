import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ChevronDown, RefreshCcw, Search } from "lucide-react";

interface CustomerItem {
  id: number;
  customer_no: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  address: string;
  country: string;
  county: string;
  age: number;
}

interface Props {
  customers: CustomerItem[];
}

export default function CustomerDetailsGrid({ customers }: Props) {
  return (
    <div className="p-4 w-full">

      {/* TOP ACTION BAR */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon"><RefreshCcw size={16} /></Button>
          <Button variant="outline" size="icon"><Search size={16} /></Button>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-2 w-60"
        />
      </div>

      {/* COLLAPSIBLE GROUP */}
      <Collapsible defaultOpen={true}>
        <div className="flex items-center gap-2 bg-gray-50 px-2 py-2 border rounded-md">
          <CollapsibleTrigger className="flex items-center gap-2">
            <ChevronDown className="h-4 w-4" />
            <span className="font-semibold">Status: New</span>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <div className="border rounded-md mt-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Actions</TableHead>
                  <TableHead>Customer Number</TableHead>
                  <TableHead>Firstname</TableHead>
                  <TableHead>Lastname</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>County</TableHead>
                   <TableHead>Age</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {customers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        Edit/Preview
                      </Button>
                    </TableCell>
                    <TableCell>{c.customer_no}</TableCell>
                    <TableCell>{c.firstname}</TableCell>
                    <TableCell>{c.lastname}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>{c.phone}</TableCell>
                    <TableCell>{c.address}</TableCell>
                    <TableCell>{c.country}</TableCell>
                    <TableCell>{c.county}</TableCell>
                    <TableCell>{c.age}</TableCell>

                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
