import { Outlet } from "react-router-dom";
import { MortgageSidebar } from "./loanmanagement/SideBar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { CustomerProfile } from "./loanmanagement/CustomerProfile";

// SidebarLayout.tsx
interface LayoutProps {
  children: React.ReactNode;
}
const SideBarLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <SidebarProvider>
           <div className="min-h-screen flex w-full bg-background">
            <MortgageSidebar />
            
            <div className="flex-1 flex flex-col">
             <header className="flex items-center justify-between bg-card border-b shadow-header">
                <div className="flex items-center gap-4 p-4">
                  <SidebarTrigger />
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                    <p className="text-sm text-muted-foreground">Welcome back, Customer</p>
                  </div>
                </div>
                <CustomerProfile />
              </header>
               <Outlet />
              </div>
            </div>
            </SidebarProvider>
   
    </div>
  );
};

export default SideBarLayout;
// export default function SideBarLayout() {
//   return (
//      <SidebarProvider>
//            <div className="min-h-screen flex w-full bg-background">
//             <MortgageSidebar />
            
//             <div className="flex-1 flex flex-col">
//              <header className="flex items-center justify-between bg-card border-b shadow-header">
//                 <div className="flex items-center gap-4 p-4">
//                   <SidebarTrigger />
//                   <div>
//                     <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
//                     <p className="text-sm text-muted-foreground">Welcome back, Customer</p>
//                   </div>
//                 </div>
//                 <CustomerProfile />
//               </header>
//               </div>
//             </div>
//             </SidebarProvider>
//   );
// }
