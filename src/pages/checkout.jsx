import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector(state => state.cart.cart);

  const subtotal = cart.reduce((t, i) => t + (parseInt(i.prix) || 0) * i.quantity, 0);
  const shipping = subtotal > 250 ? 0 : 30;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");


  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
  let newErrors = {};

  if (!form.name) newErrors.name = "Name is required";
  if (!form.email) newErrors.email = "Email is required";
  if (!form.address) newErrors.address = "Address is required";
  if (!form.city) newErrors.city = "City is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setSuccess("Order placed successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }
};

  return (
    <div className="min-h-screen bg-[#fff7fa] py-10 px-4">
    <h1 className="heading text-4xl font-bold text-center text-[#3A071F] mb-10">Checkout</h1>

    {success && (
        <p className="text-center text-green-600 font-semibold mb-4">
        {success}
        </p>
    )}

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm">

        <h2 className="text-xl font-semibold text-[#3A071F] mb-4">Shipping Details</h2>

        <input name="name" onChange={handleChange} placeholder="Full Name" className="w-full p-3 mb-1 border rounded-lg outline-none focus:border-[#d6a2b5]" />
        {errors.name && <p className="text-red-500 text-xs mb-2">{errors.name}</p>}

        <input name="email" onChange={handleChange} placeholder="Email" className="w-full p-3 mb-1 border rounded-lg outline-none focus:border-[#d6a2b5]" />
        {errors.email && <p className="text-red-500 text-xs mb-2">{errors.email}</p>}

        <input name="address" onChange={handleChange} placeholder="Address" className="w-full p-3 mb-1 border rounded-lg outline-none focus:border-[#d6a2b5]" />
        {errors.address && <p className="text-red-500 text-xs mb-2">{errors.address}</p>}

        <input name="city" onChange={handleChange} placeholder="City" className="w-full p-3 mb-1 border rounded-lg outline-none focus:border-[#d6a2b5]" />
        {errors.city && <p className="text-red-500 text-xs mb-2">{errors.city}</p>}

        <button
            onClick={handleSubmit}
            className="w-full mt-5 bg-[#3A071F] text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:bg-[#5a0b30] transition"
        >
            Place Order
        </button>

        </div>

        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm h-fit">

        <h2 className="text-xl font-semibold text-[#3A071F] mb-4">Order Summary</h2>

        <div className="space-y-2 border-b pb-4">
            {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm text-[#6F1F3B]">
                <span>{item.name} × {item.quantity}</span>
                <span>{(parseInt(item.prix) || 0) * item.quantity} dh</span>
            </div>
            ))}
        </div>

        <div className="mt-4 space-y-2 text-sm text-[#6F1F3B]">
            <div className="flex justify-between"><span>Subtotal</span><span>{subtotal} dh</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "FREE" : `${shipping} dh`}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>{tax.toFixed(2)} dh</span></div>
        </div>

        <div className="flex justify-between mt-6 text-lg font-bold text-[#3A071F]">
            <span>Total</span><span>{total.toFixed(2)} dh</span>
        </div>

        </div>

    </div>
    </div>
  );
}