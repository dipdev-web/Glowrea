import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart, decreaseQuantity } from "./redux/cartSlice";
import { FiPlus, FiMinus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const baseShipping = useSelector(state => state.cart.shippingCost) || 30;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => total + (parseInt(item.prix) || 0) * item.quantity, 0);
  const actualShipping = subtotal > 250 || cart.length === 0 ? 0 : baseShipping;
  const tax = subtotal * 0.1;
  const totalPrice = subtotal + actualShipping + tax;

  return (
    <div className="min-h-screen bg-[#fff7fa] flex flex-col font-sans">

      <div className="bg-gradient-to-br from-[#d6a2b5] to-[#FFF0F5] shadow-md mb-10 text-center py-16">
        <h1 className="text-5xl font-bold text-[#3A071F]">My Cart</h1>
        <p className="text-[#6F1F3B]/70 mt-3">Review your selected products</p>
      </div>

      <div className="max-w-[1100px] w-full mx-auto px-6 py-10 flex-1">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <FiShoppingBag size={48} className="mb-4 opacity-20" />
            <p className="text-lg">Your cart is empty.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            <div className="md:col-span-2 space-y-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl shadow-sm border border-pink-50">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl border border-gray-50" />

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[#3A071F] font-semibold text-lg">{item.name}</h3>
                        <p className="text-[#6F1F3B] font-medium text-sm mt-1">{item.prix}</p>
                      </div>

                      <button onClick={() => dispatch(removeFromCart(item.id))} className="text-gray-300 hover:text-red-500 transition">
                        <FiTrash2 size={20} />
                      </button>
                    </div>

                    <div className="flex items-center mt-3">
                      <div className="flex items-center bg-gray-50 border rounded-lg overflow-hidden shadow-sm">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity <= 1}
                          className={`px-3 py-1.5 ${item.quantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-[#3A071F] hover:bg-white"}`}
                        >
                          <FiMinus size={14} />
                        </button>

                        <span className="px-4 text-sm font-semibold bg-white py-1.5">{item.quantity}</span>

                        <button
                          onClick={() => dispatch(addToCart({ ...item, qty: 1 }))}
                          className="px-3 py-1.5 text-[#3A071F] hover:bg-white"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white w-full lg:w-[380px] p-6 rounded-2xl shadow-md border border-pink-50 h-fit md:sticky md:top-6">
              <h2 className="text-xl font-bold text-[#3A071F] mb-6">Order Summary</h2>

              <div className="space-y-4 border-b border-gray-100 pb-6">
                <div className="flex justify-between text-[#6F1F3B] text-sm">
                  <span>Subtotal</span>
                  <span className="font-semibold">{subtotal} dh</span>
                </div>

                <div className="flex justify-between text-[#6F1F3B] text-sm">
                  <span>Shipping</span>
                  <span className={actualShipping === 0 ? "text-green-600 font-bold" : "font-semibold"}>
                    {actualShipping === 0 ? "FREE" : `${actualShipping} dh`}
                  </span>
                </div>

                <div className="flex justify-between text-[#6F1F3B] text-sm">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">{tax.toFixed(2)} dh</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-6 text-[#3A071F]">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold">{totalPrice.toFixed(2)} dh</span>
              </div>

              <button disabled={!cart.length} onClick={() => navigate("/checkout")} className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition active:scale-[0.98]
                ${cart.length ? "bg-[#3A071F] hover:bg-[#5a0b30] text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
                Proceed to Checkout
              </button>
              <button onClick={() => dispatch(clearCart())} className="w-full mt-4 text-xs text-[#3A071F] font-semibold hover:underline">
                Clear Cart
              </button>

              {subtotal < 250 && subtotal > 0 && (
                <div className="mt-6 p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                  <p className="text-xs text-center text-[#6F1F3B]">
                    Add <span className="font-bold">{250 - subtotal} dh</span> more for free shipping
                  </p>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}