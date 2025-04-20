import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100,
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
