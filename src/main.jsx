import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// ✅ Convex client setup
const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ConvexProvider client={convex}>
          <App />
        </ConvexProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
