// src/components/SignInForm.tsx
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/ui/FormInput";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
interface SignUpFormData {
  email: string;
  password: string;
}

export const SignInForm: React.FC = () => {
   <Header />
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        nationalId: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    
      });

  const { register, handleSubmit } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    console.log("SignUp data:", data);
  };

   const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-12 rounded shadow">
      
    //   <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
    //   <div className="grid grid-cols-10 md:grid-cols-2 gap-12">
    //     <div className="space-y-2">
    //                 <Label htmlFor="firstName">First Name</Label>
    //                 <Input
    //                   id="firstName"
    //                   value={formData.firstName}
    //                   onChange={(e) => handleInputChange("firstName", e.target.value)}
    //                   placeholder="John"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="lastName">Last Name</Label>
    //                 <Input
    //                   id="lastName"
    //                   value={formData.lastName}
    //                   onChange={(e) => handleInputChange("lastName", e.target.value)}
    //                   placeholder="Doe"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="email">Email Address</Label>
    //                 <Input
    //                   id="email"
    //                   type="email"
    //                   value={formData.email}
    //                   onChange={(e) => handleInputChange("email", e.target.value)}
    //                   placeholder="john.doe@example.com"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="phone">Phone Number</Label>
    //                 <Input
    //                   id="phone"
    //                   value={formData.phone}
    //                   onChange={(e) => handleInputChange("phone", e.target.value)}
    //                   placeholder="+1 (555) 123-4567"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="dateOfBirth">Date of Birth</Label>
    //                 <Input
    //                   id="dateOfBirth"
    //                   type="date"
    //                   value={formData.dateOfBirth}
    //                   onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="nationalId">National ID / Passport</Label>
    //                 <Input
    //                   id="nationalId"
    //                   value={formData.nationalId}
    //                   onChange={(e) => handleInputChange("nationalId", e.target.value)}
    //                   placeholder="123-45-6789"
    //                 />
    //               </div>
    //               <div className="space-y-2 md:col-span-2">
    //                 <Label htmlFor="address">Street Address</Label>
    //                 <Input
    //                   id="address"
    //                   value={formData.address}
    //                   onChange={(e) => handleInputChange("address", e.target.value)}
    //                   placeholder="123 Main Street"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="city">City</Label>
    //                 <Input
    //                   id="city"
    //                   value={formData.city}
    //                   onChange={(e) => handleInputChange("city", e.target.value)}
    //                   placeholder="New York"
    //                 />
    //               </div>
    //               <div className="space-y-2">
    //                 <Label htmlFor="zipCode">ZIP Code</Label>
    //                 <Input
    //                   id="zipCode"
    //                   value={formData.zipCode}
    //                   onChange={(e) => handleInputChange("zipCode", e.target.value)}
    //                   placeholder="10001"
    //                 />
    //               </div>
    //               </div>
 

    //   <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
    //     Sign Up
    //   </button>
    // </form>
    //  <form onSubmit={handleSubmit(onSubmit)}
    //   className="w-full max-w-6xl mx-auto bg-white p-12 rounded shadow-lg"
    // >
    //   <h2 className="text-2xl font-semibold mb-8 text-center">Sign Up</h2>

    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //     {/* Column 1 */}
    //     <div className="space-y-2">
    //       <div className="space-y-2">
    //         <Label htmlFor="firstName">First Name</Label>
    //         <Input
    //           id="firstName"
    //           value={formData.firstName}
    //           onChange={(e) => handleInputChange("firstName", e.target.value)}
    //           placeholder="John"
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="email">Email Address</Label>
    //         <Input
    //           id="email"
    //           type="email"
    //           value={formData.email}
    //           onChange={(e) => handleInputChange("email", e.target.value)}
    //           placeholder="john.doe@example.com"
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="dateOfBirth">Date of Birth</Label>
    //         <Input
    //           id="dateOfBirth"
    //           type="date"
    //           value={formData.dateOfBirth}
    //           onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="address">Street Address</Label>
    //         <Input
    //           id="address"
    //           value={formData.address}
    //           onChange={(e) => handleInputChange("address", e.target.value)}
    //           placeholder="123 Main Street"
    //         />
    //       </div>
    //     </div>

    //     {/* Column 2 */}
    //     <div className="space-y-4">
    //       <div className="space-y-2">
    //         <Label htmlFor="lastName">Last Name</Label>
    //         <Input
    //           id="lastName"
    //           value={formData.lastName}
    //           onChange={(e) => handleInputChange("lastName", e.target.value)}
    //           placeholder="Doe"
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="phone">Phone Number</Label>
    //         <Input
    //           id="phone"
    //           value={formData.phone}
    //           onChange={(e) => handleInputChange("phone", e.target.value)}
    //           placeholder="+1 (555) 123-4567"
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="nationalId">National ID / Passport</Label>
    //         <Input
    //           id="nationalId"
    //           value={formData.nationalId}
    //           onChange={(e) => handleInputChange("nationalId", e.target.value)}
    //           placeholder="123-45-6789"
    //         />
    //       </div>

    //       <div className="space-y-2">
    //         <Label htmlFor="city">City</Label>
    //         <Input
    //           id="city"
    //           value={formData.city}
    //           onChange={(e) => handleInputChange("city", e.target.value)}
    //           placeholder="New York"
    //         />
    //       </div>
    //     </div>

    //     {/* Column 3 */}
    //     <div className="space-y-4">
    //       <div className="space-y-2">
    //         <Label htmlFor="zipCode">ZIP Code</Label>
    //         <Input
    //           id="zipCode"
    //           value={formData.zipCode}
    //           onChange={(e) => handleInputChange("zipCode", e.target.value)}
    //           placeholder="10001"
    //         />
    //       </div>

    //       <div className="space-y-2 md:mt-10">
    //         <button
    //           type="submit"
    //           className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition"
    //         >
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </form>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-6xl mx-auto bg-white p-12 rounded shadow-lg">
  <h2 className="text-2xl font-semibold mb-8 text-center">Sign Up</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Column 1 */}
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          placeholder="John"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="john.doe@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Street Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="123 Main Street"
        />
      </div>
    </div>

    {/* Column 2 */}
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          placeholder="Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nationalId">National ID / Passport</Label>
        <Input
          id="nationalId"
          value={formData.nationalId}
          onChange={(e) => handleInputChange("nationalId", e.target.value)}
          placeholder="123-45-6789"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          value={formData.city}
          onChange={(e) => handleInputChange("city", e.target.value)}
          placeholder="New York"
        />
      </div>
    </div>

    {/* Column 3 */}
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code</Label>
        <Input
          id="zipCode"
          value={formData.zipCode}
          onChange={(e) => handleInputChange("zipCode", e.target.value)}
          placeholder="10001"
        />
      </div>
    </div>
  </div>

  {/* Button placed at the bottom */}
  <div className="mt-8">
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700 transition">Sign Up
    </button>
  </div>
</form>

 
  );

};
