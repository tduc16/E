"use client";

import { useEffect, useState } from "react";

export default function ForgotPasswordPage() {
  const [cooldown, setCooldown] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (cooldown <= 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSendCode = () => {
    if (cooldown > 0) return;

    setSent(true);
    setCooldown(60);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Xác thực thành công (demo)");
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Quên mật khẩu
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email hoặc số điện thoại
              </label>
              <input
                type="text"
                placeholder="you@email.com hoặc 0xxxxxxxxx"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mã xác thực
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Nhập mã xác thực"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-28 text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={handleSendCode}
                  disabled={cooldown > 0}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 text-sm font-medium
                    ${
                      cooldown > 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-blue-500 hover:underline"
                    }`}
                >
                  {cooldown > 0 ? `Gửi lại (${cooldown}s)` : "Gửi mã"}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={!sent}
              className={`w-full py-2.5 rounded-lg text-sm font-medium transition
                ${
                  sent
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Xác nhận
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Quay lại{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              đăng nhập
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
