import React, { useState } from "react";

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#FFF0F5] px-6 py-10">
      <div className="bg-white w-full max-w-[500px] p-8 rounded-[2.5rem] shadow-sm border border-pink-100 transition-all duration-500">

        <div className="flex bg-[#FFF0F5] p-1 rounded-full mb-8 border border-pink-100">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full transition ${isLogin ? "bg-white text-black shadow-sm" : "text-[#8B4C63]"}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full transition ${!isLogin ? "bg-white text-black shadow-sm" : "text-[#8B4C63]"}`}
          >
            Register
          </button>
        </div>

        <div className="text-center mb-6">
          <h1 className="heading text-3xl font-black text-black tracking-tighter mb-1">
            {isLogin ? "Welcome Back" : "Join Glowria"}
          </h1>
          <p className="text-[#8B4C63] text-[13px] font-medium">
            {isLogin ? "Step into your glow." : "Start your journey to radiance."}
          </p>
        </div>

        <form className="space-y-3.5">
          {!isLogin && (
            <div>
              <label className="block text-[10px] font-bold text-black uppercase tracking-[0.15em] mb-1 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#FFF0F5]/40 border border-pink-50 rounded-2xl px-4 py-2 text-sm outline-none focus:border-[#E2A6BA] focus:bg-white transition placeholder:text-gray-400"
              />
            </div>
          )}

          <div>
            <label className="block text-[10px] font-bold text-black uppercase tracking-[0.15em] mb-1 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#FFF0F5]/40 border border-pink-50 rounded-2xl px-4 py-2 text-sm outline-none focus:border-[#E2A6BA] focus:bg-white transition placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-black uppercase tracking-[0.15em] mb-1 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#FFF0F5]/40 border border-pink-50 rounded-2xl px-4 py-2 text-sm outline-none focus:border-[#E2A6BA] focus:bg-white transition placeholder:text-gray-400"
            />
          </div>

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-[11px] text-[#8B4C63] hover:text-black transition">
                Forgot password?
              </button>
            </div>
          )}

          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-[#E2A6BA] text-black py-3 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition border border-[#CC8298] active:scale-[0.97]"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-pink-50 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">
            Or continue with
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-sm font-bold hover:bg-[#FFF0F5] cursor-pointer transition">
              G
            </div>
            <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-sm font-bold hover:bg-[#FFF0F5] cursor-pointer transition">
              F
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;