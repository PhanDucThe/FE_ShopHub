import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faPinterest,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCreditCard,
  faShieldAlt,
  faTruck,
  faExchangeAlt,
  faHeadset,
  faGift,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="pt-2 bg-gradient-to-b from-white to-blue-50 text-blue-900 border-t-2 border-blue-200 shadow-lg">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Trụ sở chính</h4>
                  <p className="text-sm">
                    Tòa nhà Sunshine, 123 Đường ABC, Quận XYZ, TP.HCM
                  </p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Hotline</h4>
                  <p className="text-sm">1900 123 456 (24/7)</p>
                  <p className="text-sm">0123 456 789 (Zalo)</p>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="bg-blue-100 p-2 rounded-full mr-3 group-hover:bg-blue-200 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-blue-600"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm">support@example.com</p>
                  <p className="text-sm">sales@example.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2 - Policies */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 flex items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
              Chính Sách
            </h3>
            <ul className="space-y-3">
              {[
                "Chính sách bảo mật thông tin",
                "Chính sách đổi trả 30 ngày",
                "Chính sách vận chuyển toàn quốc",
                "Điều khoản dịch vụ",
                "Hướng dẫn mua hàng online",
                "Chính sách bảo hành",
                "Chính sách tích điểm",
                "Chính sách thành viên VIP",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-600 transition-all"></span>
                    <span className="group-hover:text-blue-600 group-hover:font-medium transition-all">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Customer Support */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 flex items-center">
              <FontAwesomeIcon icon={faHeadset} className="mr-2" />
              Hỗ Trợ Khách Hàng
            </h3>
            <ul className="space-y-3">
              {[
                { icon: faStar, text: "Ưu đãi thành viên VIP" },
                { icon: faGift, text: "Chương trình khuyến mãi" },
                { icon: faExchangeAlt, text: "Hướng dẫn đổi trả" },
                { icon: faCreditCard, text: "Hướng dẫn thanh toán" },
                { icon: faTruck, text: "Theo dõi đơn hàng" },
                { icon: faShieldAlt, text: "Câu hỏi thường gặp" },
                { icon: faPhone, text: "Liên hệ hỗ trợ 24/7" },
                { icon: faEnvelope, text: "Góp ý/Khiếu nại" },
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center group">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="w-4 mr-3 text-blue-500 group-hover:text-blue-700 transition-all"
                    />
                    <span className="group-hover:text-blue-600 group-hover:font-medium transition-all">
                      {item.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">
              Đăng Ký Nhận Tin
            </h3>
            <p className="text-sm">
              Đăng ký ngay để nhận thông tin khuyến mãi, sản phẩm mới và ưu đãi
              đặc biệt!
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
              >
                Đăng Ký Ngay
              </button>
            </form>

            <div className="pt-2">
              <h4 className="font-medium mb-3">Kết nối với chúng tôi</h4>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: faFacebook, color: "bg-blue-600 hover:bg-blue-700" },
                  { icon: faInstagram, color: "bg-pink-600 hover:bg-pink-700" },
                  { icon: faYoutube, color: "bg-red-600 hover:bg-red-700" },
                  { icon: faTiktok, color: "bg-black hover:bg-gray-800" },
                  { icon: faTwitter, color: "bg-blue-400 hover:bg-blue-500" },
                  { icon: faLinkedin, color: "bg-blue-700 hover:bg-blue-800" },
                  { icon: faPinterest, color: "bg-red-700 hover:bg-red-800" },
                  {
                    icon: faWhatsapp,
                    color: "bg-green-500 hover:bg-green-600",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} text-white p-2 rounded-full flex items-center justify-center transition-all transform hover:-translate-y-1`}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Certification Section - Moved to bottom */}
      <div className="bg-white py-8 border-t border-b border-blue-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-800 inline-block border-b-2 border-blue-300 pb-2 px-6">
              Phương Thức Thanh Toán & Chứng Nhận
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Payment Methods */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                Chấp nhận thanh toán
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  {
                    name: "Visa",
                    image:
                      "https://vudigital.co/wp-content/uploads/2022/04/8.webp",
                  },
                  {
                    name: "MasterCard",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/960px-Mastercard-logo.svg.png",
                  },
                  {
                    name: "JCB",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgber4MngQY983WF6ItDL0bzmmImENuVrPw&s",
                  },
                  {
                    name: "PayPal",
                    image:
                      "https://cdn-icons-png.freepik.com/512/196/196566.png",
                  },
                  {
                    name: "Momo",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnV4cUM7jBauINof35Yn_unOz976Iz5okV8A&s",
                  },
                  {
                    name: "ZaloPay",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlp4qW2M8xPofmuZHwEfGi9mNMWUG0zs53A&s",
                  },
                  {
                    name: "VNPay",
                    image:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1v7T287-ikP1m7dEUbs2n1SbbLEqkMd1ZA&s",
                  },
                  {
                    name: "COD",
                    image:
                      "https://cdn-icons-png.freepik.com/512/9198/9198191.png",
                  },
                ].map((method, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg border border-blue-200 flex flex-col items-center justify-center hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <img
                      src={method.image}
                      alt={method.name}
                      className="h-10 object-contain mb-2 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-xs text-center">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
              <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-2" />
                Chứng nhận & Bảo mật
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "SSL Secure",
                    image:
                      "https://png.pngtree.com/png-clipart/20250514/original/pngtree-ssl-security-shield-secure-connection-symbol-certificate-icon-png-image_21007092.png",
                    desc: "Bảo mật giao dịch",
                  },
                  {
                    name: "DMCA",
                    image:
                      "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/166982/Originals/dcma-la-gi%20(7).jpg",
                    desc: "Bản quyền nội dung",
                  },
                  {
                    name: "Bộ Công Thương",
                    image:
                      "https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png",
                    desc: "Đăng ký kinh doanh",
                  },
                  {
                    name: "VAT",
                    image:
                      "https://png.pngtree.com/png-clipart/20191120/original/pngtree-electronic-payment-bill-stereo-illustration-png-image_5049162.jpg",
                    desc: "Hóa đơn điện tử",
                  },
                  {
                    name: "ISO 9001",
                    image:
                      "https://ttpcert.com.vn/wp-content/uploads/2024/03/ISO9001-2015-1003x1024.jpg",
                    desc: "Chất lượng dịch vụ",
                  },
                  {
                    name: "PCI DSS",
                    image:
                      "https://cmccybersecurity.com/wp-content/uploads/2023/07/PCI-DSS-certification.png",
                    desc: "Bảo mật thẻ",
                  },
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg border border-blue-200 flex flex-col items-center justify-center hover:border-blue-400 hover:shadow-md transition-all group"
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="h-10 object-contain mb-2 group-hover:scale-105 transition-transform"
                    />
                    <span className="text-xs font-medium text-center">
                      {cert.name}
                    </span>
                    <span className="text-xs text-blue-600 text-center">
                      {cert.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="mt-8 bg-blue-50 p-6 rounded-xl shadow-inner">
            <h4 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
              <FontAwesomeIcon icon={faTruck} className="mr-2" />
              Đối tác vận chuyển
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Giao Hàng Tiết Kiệm", logo: "GHTK" },
                { name: "Viettel Post", logo: "Viettel" },
                { name: "J&T Express", logo: "J&T" },
                { name: "Giao Hàng Nhanh", logo: "GHN" },
                { name: "Ninja Van", logo: "Ninja" },
                { name: "DHL", logo: "DHL" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white px-5 py-3 rounded-full border border-blue-200 flex items-center hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full mr-3 group-hover:bg-blue-200 transition-all">
                    {partner.logo}
                  </span>
                  <span className="text-sm">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-blue-950 text-blue-100 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="font-bold">E-Shop Premium</span>. All Rights
                Reserved.
              </p>
              <p className="text-xs opacity-80 mt-1">
                Giấy chứng nhận ĐKKD số 0123456789 do Sở KHĐT TP.HCM cấp ngày
                01/01/2023
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="text-sm hover:text-white transition-all hover:underline"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-all hover:underline"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-all hover:underline"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-all hover:underline"
              >
                Tuyển dụng
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-all hover:underline"
              >
                Đối tác
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
