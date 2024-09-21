'use client'

import { useCart } from '../lib/cartContext';
import ShoppingCart from './../../Components/ShoppinCart';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <ShoppingCart cart={cart} />
    </div>
  );
}