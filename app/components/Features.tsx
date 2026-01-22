import Image from "next/image";

export default function Features() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-10 rounded-xl border border-gray-200 hover:shadow-md transition">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div>
              <Image
                src="/feature-elearning.jpg"
                alt="Learning illustration"
                width={500}
                height={350}
                className="rounded-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                Học tập dễ dàng, đúng hướng
              </h2>

              <ul className="space-y-6">
                <li>
                  <h3 className="text-gray-900 font-medium mb-2">
                    Học đúng trọng tâm
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nội dung được tinh gọn, tập trung vào kỹ năng cốt lõi.
                  </p>
                </li>

                <li>
                  <h3 className="text-gray-900 font-medium mb-2">
                    Lộ trình rõ ràng
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Phù hợp sinh viên, người mới bắt đầu từ con số 0.
                  </p>
                </li>

                <li>
                  <h3 className="text-gray-900 font-medium mb-2">
                    Thực hành thực tế
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Áp dụng ngay vào dự án và công việc.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
