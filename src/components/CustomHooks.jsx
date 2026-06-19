import "../App.css";
import { useCart } from "../hooks/useCart.js";
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import Cart from "./Cart.jsx";
function CustomHooks() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <>
      <div className="p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Hooks</h2>
        <div className="app">
          <header>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Shopping Cart
            </h3>
          </header>
          <main className="products">
            <section>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </section>
            <Cart
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default CustomHooks;
