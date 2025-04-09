"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Sign up</h2>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <input type="password" placeholder="Confirm Password" className="input" />
      <div className="flex gap-2 items-start">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree" className="text-sm">
          I agree to the <span className="text-red-500">Privacy Policy</span>{" "}
          and <span className="text-red-500">Terms of Use</span>
        </label>
      </div>
      <button className="w-full bg-red-500 text-white py-2 rounded">
        Register
      </button>
      <Link href="/login" className="text-red-500 text-sm text-center block">
        Back to Login
      </Link>
    </div>
  );
}
