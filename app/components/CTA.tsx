import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="bg-white border border-gray-200 rounded-xl p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>

          <p className="text-gray-600 mb-10">
            Tham gia ngay để tiếp cận các khóa học chất lượng.
          </p>

          <Link href="/register">
            <button className="bg-blue-500 text-white px-10 py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
              Đăng ký ngay
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
