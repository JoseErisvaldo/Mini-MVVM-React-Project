import { useProductsViewModel } from "../viewModel/productsViewModel";
export const ProductsPage = () => {
  const { products, loading } = useProductsViewModel();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {products.length === 0 && <li>No products (API default)</li>}
          {products.map((p) => (
            <li key={p.id} className="bg-gray-800 p-3 rounded">
              {p.name} - ${p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
