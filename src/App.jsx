import CartModal from "./components/cart/CartModal";
import AppRouter from "./router/AppRouter";


function App() {
  return (
    <div>
      <AppRouter />
      <CartModal /> {/* ✅ Always rendered and listens to CartContext */}
    </div>
  );
}

export default App;
