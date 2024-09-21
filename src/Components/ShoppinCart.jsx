import { useCart } from './../app/lib/cartContext';

export default function ShoppingCart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 px-2 py-1 rounded mr-2"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded ml-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}