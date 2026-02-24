import type { ProductDisplayProps } from "../../types";
export default function ProductDisplay({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="bg-white  rounder shadow-md overflowhidden">
      <img
        alt="Wireless Headphones"
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>

        {showDescription && (
          <p className="text-gray-600 mt-2">{product.description}</p>
        )}

        {showStockStatus && (
          <p className="mt-2 text-green-600">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}

        {onAddToCart && product.inStock && (
          <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounder hover:bg-blue-600 transition-colors"
            onClick={() => onAddToCart(product.id)}
          >
            Add to card
          </button>
        )}
        {children && <div>{children}</div>}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div>{product.imageUrl}</div>
  //     <div className="flex-1">
  //       <h1>{product.name}</h1>
  //       <p>{product.price}</p>
  //       <p>{product.description}</p>
  //       <p>In Stock</p>
  //       <button
  //         onClick={() => onAddToCart(product.id)}
  //         className="text-sm font-medium rounded-md bg-blue-500 text-white p-4 hover:underline  "
  //       >
  //         Add to Cart
  //       </button>
  //     </div>
  //   </div>
  // );
}
