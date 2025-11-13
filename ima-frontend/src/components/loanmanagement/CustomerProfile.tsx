import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { MortgageSidebar } from "./SideBar";

export function CustomerProfile() {
  const navigator = useNavigate();

   function UserLogOut(){

    navigator('/');

   }
   const location = useLocation();
const hideSidebar = location.pathname === "/";

{!hideSidebar && <MortgageSidebar />}


  function loadUserProfile(){

    navigator('/user-profile');

   }
  return (
    <div className="flex items-center justify-end gap-4 p-4 bg-card border-b shadow-header">
      {/* Notifications */}
      <Button variant="ghost" size="icon" className="relative">
        <Bell className="h-4 w-4" />
        <span className="absolute -top-1 -right-1 h-2 w-2 bg-warning rounded-full"></span>
      </Button>

      {/* Customer Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-3 px-3 py-2 hover:bg-muted/50">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-foreground">John Smith</p>
              <p className="text-xs text-muted-foreground">Premium Member</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.png" alt="John Smith" />
              <AvatarFallback className="bg-gradient-primary text-white">JS</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={loadUserProfile}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          {/* <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem> */}

          <DropdownMenuSeparator />
          <DropdownMenuItem  onClick={UserLogOut} className="text-destructive">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}