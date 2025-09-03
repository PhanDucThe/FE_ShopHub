import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewAndQuestion = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Reviews Section */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Đánh giá iPhone 16 Pro Max 256GB | Chính hãng VN/A
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="text-gray-500 text-sm mb-3">/5</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400 w-4 h-4"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  311 lượt đánh giá
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
                  Viết đánh giá
                </button>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center space-x-2">
                    <span className="text-sm w-6">{star}</span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 w-3 h-3"
                    />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{
                          width: star === 5 ? "85%" : star === 4 ? "10%" : "2%",
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-16">
                      {star === 5
                        ? "267 đánh giá"
                        : star === 4
                        ? "31 đánh giá"
                        : "13 đánh giá"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Categories */}
            <div className="lg:col-span-1">
              <h4 className="font-medium mb-3">Đánh giá theo tiêu chí</h4>
              <div className="space-y-2">
                {[
                  { name: "Hiệu năng", rating: 4.8 },
                  { name: "Pin và sạc", rating: 4.7 },
                  { name: "Chất lượng camera", rating: 4.9 },
                ].map((criteria) => (
                  <div
                    key={criteria.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{criteria.name}</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`w-3 h-3 ${
                              i < Math.floor(criteria.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {criteria.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Filters */}
          <div className="border-t pt-6">
            <h4 className="font-medium mb-4">Lọc đánh giá theo</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Tất cả",
                "Có hình ảnh",
                "Đã mua hàng",
                "5 sao",
                "4 sao",
                "3 sao",
                "2 sao",
                "1 sao",
              ].map((filter) => (
                <button
                  key={filter}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                    filter === "Tất cả"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300 hover:border-blue-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: "Quang Dũng",
                  avatar: "Q",
                  rating: 5,
                  date: "Tuần trước",
                  verified: true,
                  content:
                    "Hàng chính hãng Cellphones. Thời lượng pin Cực Mượt. Chất lượng camera Chụp đẹp, chuyên nghiệp.",
                  helpful: 14,
                },
                {
                  name: "Hoa",
                  avatar: "H",
                  rating: 5,
                  date: "Tuần trước",
                  verified: true,
                  content:
                    "Hàng chính hãng Cellphones. Thời lượng pin Cực Mượt. Chất lượng camera Chụp đẹp, chuyên nghiệp.",
                  helpful: 8,
                },
                {
                  name: "Huy Lê",
                  avatar: "H",
                  rating: 5,
                  date: "Tuần trước",
                  verified: true,
                  content:
                    "Hàng chính hãng Cellphones. Thời lượng pin Cực Mượt. Chất lượng camera Chụp đẹp, chuyên nghiệp.",
                  helpful: 12,
                },
              ].map((review, index) => (
                <div key={index} className="border-b pb-6 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">{review.name}</span>
                        {review.verified && (
                          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                            Đã mua hàng
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className={`w-3 h-3 ${
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{review.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="flex items-center space-x-1 hover:text-blue-600">
                          <span>👍</span>
                          <span>Hữu ích ({review.helpful})</span>
                        </button>
                        <button className="hover:text-blue-600">Trả lời</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Xem tất cả đánh giá →
              </button>
            </div>
          </div>
        </div>

        {/* Q&A Section */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Hỏi và đáp</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
              Đặt câu hỏi
            </button>
          </div>

          {/* Q&A Header */}
          <div className="flex items-start space-x-4 mb-6 p-4 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤔</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-2">
                Hãy đặt câu hỏi cho chúng tôi
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Chúng tôi sẽ phản hồi trong vòng 1 ngày. Tích cực đặt câu hỏi để
                nhận 23% chúng tôi sẽ trả lời bạn trong vòng 1 ngày. Tích cực
                đặt câu hỏi để nhận 23% chúng tôi sẽ trả lời bạn trong vòng 1
                ngày.
              </p>
            </div>
          </div>

          {/* Q&A List */}
          <div className="space-y-6">
            {[
              {
                user: "Dũng Ngô",
                question:
                  "Sản phẩm này có bảo hành bao lâu? Có thể đổi trả không?",
                time: "07 ngày trước",
                answer:
                  "Sản phẩm có bảo hành 12 tháng chính hãng Apple. Có thể đổi trả trong 30 ngày nếu có lỗi từ nhà sản xuất.",
                answerer: "ShopHub",
              },
              {
                user: "Quân Trí Viên",
                question: "Máy này có pin tốt không? Dùng được bao lâu?",
                time: "10 ngày trước",
                answer:
                  "Pin iPhone 16 Pro Max rất tốt, có thể sử dụng cả ngày với việc sử dụng bình thường.",
                answerer: "ShopHub",
              },
            ].map((qa, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                {/* Question */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {qa.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">
                        {qa.user}
                      </span>
                      <span className="text-sm text-gray-500">{qa.time}</span>
                    </div>
                    <p className="text-gray-700">{qa.question}</p>
                    <button className="text-sm text-blue-600 hover:text-blue-700 mt-2">
                      👍 Thích (0)
                    </button>
                  </div>
                </div>

                {/* Answer */}
                {qa.answer && (
                  <div className="ml-11 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-900">
                        {qa.answerer}
                      </span>
                      <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                        Người bán
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{qa.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewAndQuestion;
