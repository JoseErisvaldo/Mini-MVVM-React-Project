import { useEffect, useState } from "react";
import { fetchProducts } from "../model/service";
export const useProductsViewModel = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((p) => setProducts(p))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);
  return { products, loading };
};
