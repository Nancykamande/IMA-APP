import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Progress } from "@/components/ui/progress";

const HeaderLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header appears on all pages using this layout */}
      <Header />

      {/* Optional loading progress bar */}
      {/* <Progress value={50} className="h-1 bg-primary/20" /> */}

      {/* This is where the nested route content (Index, SignUp, etc.) appears */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Optional footer can go here */}
      {/* <Footer /> */}
    </div>
  );
};

export default HeaderLayout;