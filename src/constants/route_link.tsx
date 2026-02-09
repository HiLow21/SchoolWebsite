import Index from "@/pages/Index";
import { routes } from "./routes";
import About from "@/pages/About";
import Academics from "@/pages/Academics";
import ActivitiesShowcase from "@/components/home/ActivitiesShowcase";
import Gallery from "@/pages/Gallery";
import { Contact } from "lucide-react";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/NotFound";
export const RouterLink = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/academics",
    element: <Academics />,
  },
  {
    path: "/eca",
    element: <ActivitiesShowcase />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];


