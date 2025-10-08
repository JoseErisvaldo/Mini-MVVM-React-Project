import { Routes, Route, Link } from "react-router-dom";
import { LoginPage } from "./features/auth/view/LoginPage";
import { Dashboard } from "./features/dashboard/view/Dashboard";
import { ProductsPage } from "./features/products/view/ProductsPage";
import { OrdersPage } from "./features/orders/view/OrdersPage";

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex gap-4">
          <Link to="/" className="font-bold">
            Home
          </Link>
          <Link to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </main>
    </div>
  );
}
