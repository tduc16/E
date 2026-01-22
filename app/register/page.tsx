"use client";

import { useState } from "react";
import Captcha from "../components/Captcha";

export default function RegisterPage() {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaInput.toUpperCase() !== captchaValue) {
      setError("Mã xác thực không đúng");
      return;
    }

    setError("");
    alert("Đăng ký thành công (demo)");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Đăng ký
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên đăng nhập
              </label>
              <input
                type="text"
                placeholder="nguyenvana123"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                placeholder="0987654321"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mã xác thực
              </label>

              <Captcha onChange={setCaptchaValue} />

              <input
                type="text"
                placeholder="Nhập mã xác thực"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="mt-3 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {error && (
                <p className="text-sm text-red-500 mt-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
            >
              Đăng ký
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Đã có tài khoản?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
