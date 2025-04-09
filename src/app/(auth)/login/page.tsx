"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="w-full max-w-sm space-y-4">
      <h2 className="text-[#615fff] text-center text-2xl font-semibold mb-2">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        className="input"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="input"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <div className="flex justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#" className="text-[#615fff] hover:underline">
          Forgot password?
        </a>
      </div>

      <button className="w-full bg-[#615fff] text-white py-2 rounded">
        Login
      </button>

      <Link href="/signup" className="text-[#615fff] text-sm text-center block">
        Don’t have an account? Sign up
      </Link>
    </div>
  );
}
