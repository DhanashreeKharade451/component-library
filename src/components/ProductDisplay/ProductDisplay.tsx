import type { ProductDisplayProps } from "../../types";
export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
} : ProductDisplayProps

) {
  return (
    <div>
      <div>{product.imageUrl}</div>
      <div className="flex-1">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>In Stock</p>
        <button
          onClick={() => onAddToCart(product.id)}
          className="text-sm font-medium rounded-md bg-blue-500 text-white p-4 hover:underline  "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
