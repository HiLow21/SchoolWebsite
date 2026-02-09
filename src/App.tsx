import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";
import { TokenAuthProvider } from "@/contexts/TokenAuthContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import ECA from "./pages/ECA";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import { useLenis } from "./hooks/use-lenis";
import ActivitiesShowcase from "./components/home/ActivitiesShowcase";
import { RouterLink } from "./constants/route_link";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  useLenis();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {RouterLink.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TokenAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </TokenAuthProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
