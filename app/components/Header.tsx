export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">E-Learning</h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a className="hover:text-blue-600" href="#">Trang chủ</a>
          <a className="hover:text-blue-600" href="#">Khóa học</a>
          <a className="hover:text-blue-600" href="#">Giảng viên</a>
          <a className="hover:text-blue-600" href="#">Liên hệ</a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Đăng nhập
        </button>
      </div>
    </header>
  );
}