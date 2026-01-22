"use client";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Đăng nhập
          </h1>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên đăng nhập
              </label>
              <input
                type="text"
                placeholder="nguyenvana123"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2.5 rounded-lg
              text-sm font-medium hover:bg-blue-600 transition"
            >
              Đăng nhập
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-6">
            Chưa có tài khoản?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
