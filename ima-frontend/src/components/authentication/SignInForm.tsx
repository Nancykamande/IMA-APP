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
import {useNavigate} from 'react-router-dom'
interface SignUpFormData {
  email: string;
  password: string;
}

export const SignInForm: React.FC = () => {
   <Header />
    const [formData, setFormData] = useState({
        // Personal Information
        email: "",
        password: "",
        customer_no: ""
    
      });

  const { register, handleSubmit } = useForm<SignUpFormData>();

 const navigator = useNavigate();

  const onSubmit = (data: SignUpFormData) => {
    console.log("SignUp data:", data);
  };

   const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   function loadDashboard(){

    navigator('/user-dashboard');

  }

  return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">
<form 
  onSubmit={handleSubmit(onSubmit)} 
  className="w-full max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-lg"
>
  <h2 className="text-2xl font-semibold mb-8 text-center">Sign In</h2>

  {/* Customer Number */}
  <div className="mb-6">
    <Label htmlFor="customer_no">Customer Number</Label>
    <Input
      id="customer_no"
      type="number"
      value={formData.customer_no}
      onChange={(e) => handleInputChange("customer_no", e.target.value)}
      placeholder="Enter your customer number"
    />
  </div>

  {/* Email */}
  <div className="mb-6">
    <Label htmlFor="email">Email Address</Label>
    <Input
      id="email"
      type="email"
      value={formData.email}
      onChange={(e) => handleInputChange("email", e.target.value)}
      placeholder="john.doe@example.com"
    />
  </div>

  {/* Password */}
  <div className="mb-6">
    <Label htmlFor="password">Password</Label>
    <Input
      id="password"
      type="password"
      value={formData.password}
      onChange={(e) => handleInputChange("password", e.target.value)}
      placeholder="••••••••"
    />
  </div>

  {/* Submit Button */}
  <div className="mt-8">
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700 transition" onClick={loadDashboard}
    >
      Sign In
    </button>
  </div>

  {/* Forgot Password & Sign Up Options */}
  <div className="flex flex-col items-center mt-6 space-y-3">
    <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
      Forgot your password?
    </a>
    <p className="text-sm text-gray-600">
      New customer?{" "}
      <a href="/sign-up" className="text-green-600 font-medium hover:underline">
        Create an account
      </a>
    </p>
  </div>
</form>
</div>

 
  );

};
