import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminSidebar } from "@/components/AdminSidebar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import ReportDetail from "./pages/ReportDetail";
import Departments from "./pages/Departments";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex h-screen w-full bg-background overflow-hidden">
          {/* Fixed Sidebar */}
          <div className="flex-shrink-0">
            <AdminSidebar />
          </div>
          
          {/* Scrollable Main Content */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="min-h-full">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/reports/:id" element={<ReportDetail />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/users" element={<Users />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
