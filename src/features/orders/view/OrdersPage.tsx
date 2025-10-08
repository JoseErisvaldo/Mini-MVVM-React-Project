import { useState } from "react";
import { useOrdersViewModel } from "../viewModel/ordersViewModel";
export const OrdersPage = () => {
  const { orders, loading, addOrder } = useOrdersViewModel();
  const [customer, setCustomer] = useState("John Doe");

  const onCreate = async () => {
    await addOrder({ customer, items: [] });
    setCustomer("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <div className="mb-4">
        <input
          className="p-2 rounded bg-gray-700 mr-2"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <button className="bg-blue-600 px-3 py-2 rounded" onClick={onCreate}>
          Create Order
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {orders.length === 0 && <li>No orders (API default)</li>}
          {orders.map((o) => (
            <li key={o.id} className="bg-gray-800 p-3 rounded">
              {o.customer} - {o.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
