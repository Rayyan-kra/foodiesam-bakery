import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2">
      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-pink-100">
        <span className="text-6xl">🍰</span>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>

        <p className="mt-2 text-gray-600">{product.description}</p>

        {/* Rating */}
        <div className="mt-3 text-yellow-500">⭐⭐⭐⭐⭐</div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">
            ₹{product.price}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
