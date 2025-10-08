import { useEffect, useState } from "react";
import { fetchOrders, createOrder } from "../model/service";
export const useOrdersViewModel = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchOrders()
      .then((o) => setOrders(o))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const addOrder = async (order: any) => {
    setLoading(true);
    try {
      const created = await createOrder(order);
      setOrders((prev) => [...prev, created]);
      return created;
    } finally {
      setLoading(false);
    }
  };

  return { orders, loading, addOrder };
};
