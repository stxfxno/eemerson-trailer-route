import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import WhatsAppButton from "./components/WhatsAppButton";

// Lazy load pages for code splitting
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f5a623]"></div>
  </div>
);

const App = () => (
  <>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
          <Route path="/contacto" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
    </BrowserRouter>
  </>
);

export default App;
