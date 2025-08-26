import * as Yup from "yup";
export const productValidationSchema = Yup.object({
  name: Yup.string().required("Tên sản phẩm là bắt buộc!"),
  categoryId: Yup.number()
    .required("Danh mục là bắt buộc!")
    .min(1, "Vui lòng chọn danh mục!"),
  brandId: Yup.number()
    .required("Nhãn hiệu là bắt buộc!")
    .min(1, "Vui lòng chọn nhãn hiệu!"),
  description: Yup.string(),
  variants: Yup.array()
    .of(
      Yup.object({
        skuCode: Yup.string().required("Mã SKU là bắt buộc!"),
        variantName: Yup.string().required(
          "Tên chi tiết sản phẩm là bắt buộc!"
        ),
        originalPrice: Yup.number()
          .required("Giá nhập là bắt buộc!")
          .min(1000, "Giá tối thiểu là 1,000đ"),
        salePrice: Yup.number()
          .required("Giá nhập là bắt buộc!")
          .min(1000, "Giá tối thiểu là 1,000đ"),
        stock: Yup.number("Số lượng nhập vào là bắt buộc!")
          .min(0, "Số lượng không được âm")
          .integer("Vui lòng nhập số nguyên"),
        images: Yup.array().min(1, "Ít nhất 1 hình ảnh"),
      })
    )
    .min(1, "Ít nhất 1 phiên bản"),
});
