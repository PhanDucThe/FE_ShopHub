import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SocialButton from "@/components/common/SocialButton";
import TextInput from "@/components/auth/FormFields/TextInput";
import PasswordInput from "@/components/auth/FormFields/PasswordInput";

const Login = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 p-4 lg:p-4">
      {/* Left Side - Promo Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden rounded-2xl mr-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 w-full flex flex-col p-12 text-white">
          <Link to="/" className="flex items-center mb-8">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <span className="font-medium">Trang chủ</span>
          </Link>

          <div className="flex-grow flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6">
              Khám phá thế giới mua sắm
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Đăng nhập ngay để nhận ưu đãi đặc biệt lên đến 50% cho lần mua
              hàng đầu tiên!
            </p>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 max-w-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">1</span>
                </div>
                <p className="font-medium">
                  Giảm giá 30% cho đơn hàng đầu tiên
                </p>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">2</span>
                </div>
                <p className="font-medium">Miễn phí vận chuyển toàn quốc</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                  <span className="font-bold">3</span>
                </div>
                <p className="font-medium">Tích điểm cho mỗi lần mua hàng</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 lg:mb-12">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-blue-600 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 7L12 12L21 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22V12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xl font-bold text-gray-900">ShopPlus</span>
          </div>
          <a
            href="/help"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Trợ giúp?
          </a>
        </header>

        {/* Login Form */}
        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Đăng nhập</h1>
            <p className="text-gray-600">
              Vui lòng nhập thông tin đăng nhập để tiếp tục
            </p>
          </div>

          <Formik
            initialValues={{ userName: "", password: "", remember: false }}
            validationSchema={Yup.object({
              userName: Yup.string()
                .min(6, "Tên đăng nhập tối thiểu 6 kí tự!")
                .required("Vui lòng nhập tên đăng nhập!"),
              password: Yup.string()
                .matches(
                  /^[A-Z][a-zA-Z0-9]{5,}$/,
                  "Mật khẩu phải bắt đầu bằng chữ hoa và có ít nhất 6 ký tự!"
                )
                .required("Vui lòng nhập mật khẩu!"),
            })}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="gap-2">
              {/* Username Field */}
              <TextInput
                icon={faUser}
                name={"userName"}
                label={"Tên đăng nhập"}
                placeholder="Nhập tên đăng nhập"
              />

              {/* Password Field */}
              <PasswordInput
                name="password"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
              />

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between mb-5 mt-4">
                <div className="flex items-center">
                  <Field
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-700 hover:text-gray-900 cursor-pointer transition-colors"
                  >
                    Ghi nhớ đăng nhập
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Quên mật khẩu?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Đăng nhập
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Hoặc đăng nhập với
                  </span>
                </div>
              </div>
              <SocialButton />
            </Form>
          </Formik>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Chưa có tài khoản?{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
