import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">E-Learning</h1>

        <nav className="hidden md:flex gap-10 text-sm text-gray-600">
          <a className="hover:text-gray-900" href="#">
            Trang chủ
          </a>
          <a className="hover:text-gray-900" href="#">
            Khóa học
          </a>
          <a className="hover:text-gray-900" href="#">
            Giảng viên
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login">
          <button className="text-sm font-medium border px-4 py-2 rounded-md hover:bg-gray-100">
            Đăng nhập
          </button>
          </Link>
          <Link href="/register">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
              Đăng ký
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
