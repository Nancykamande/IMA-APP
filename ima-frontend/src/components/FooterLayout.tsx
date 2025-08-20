// src/components/Layout.tsx
import React from 'react';
import {FooterMap} from '@/components/FooterMap'; // Import your Footer component
import { Progress } from "@/components/ui/progress";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container"> {/* You might want to style this div */}
      <main className="content">{children}</main>
      <FooterMap />
    </div>
  );
};

export default Layout;