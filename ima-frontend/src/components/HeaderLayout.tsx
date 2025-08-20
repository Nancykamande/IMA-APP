// src/components/Layout.tsx
import React from 'react';
import {Header} from '@/components/Header'; // Import your Footer component
import { Progress } from "@/components/ui/progress";

interface LayoutProps {
  children: React.ReactNode;
}

const HeaderLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container"> {/* You might want to style this div */}
      <main className="content">{children}</main>
      <Header />
    </div>
  );
};

export default HeaderLayout;