// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Index from './components/pages/Index';
import {SignUpForm} from '@/components/authentication/SignUpForm';
import {SignInForm} from '@/components/authentication/SignInForm';
import UserDashboard from '@/components/loanmanagement/UserDashboard';
import {ApplicationForm} from '@/components/loanmanagement/ApplicationForm';
import { useLocation } from "react-router-dom";
import Layout from '@/components/FooterLayout';
import HeaderLayout from '@/components/HeaderLayout';
import {Header} from '@/components/Header';

const queryClient = new QueryClient();

// const location = useLocation();
//   const hideHeaderPaths = ["/user-dashboard"];

//   const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        {/* {shouldShowHeader &&  <HeaderLayout> </HeaderLayout>} */}
      <BrowserRouter>
        
    
    <Routes>
     {/* Routes with HeaderLayout */}
    <Route element={<HeaderLayout> </HeaderLayout>}>
      <Route path="/" element={<Index />} />
      <Route path="/sign-up" element={<Layout><SignUpForm /></Layout>} />
      <Route path="/sign-in" element={<Layout><SignInForm /></Layout>} />
      <Route path="/application-form" element={<Layout><ApplicationForm /></Layout>} />
    </Route>

    {/* Route without Header */}
    <Route path="/user-dashboard" element={<UserDashboard />} />

    <Route path="*" element={<NotFound />} />

   </Routes>
      </BrowserRouter>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;