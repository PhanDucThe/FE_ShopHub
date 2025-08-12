import { useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faTrash,
  faImage,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faBoxOpen,
  faTag,
  faFileLines,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

// Schema validation với Yup
const productSchema = Yup.object().shape({
  name: Yup.string().required("Tên sản phẩm là bắt buộc"),
  category_id: Yup.number()
    .required("Danh mục là bắt buộc")
    .min(1, "Vui lòng chọn danh mục"),
  description: Yup.string(),
  variants: Yup.array()
    .of(
      Yup.object().shape({
        sku_code: Yup.string().required("Mã SKU là bắt buộc"),
        price: Yup.number()
          .required("Giá là bắt buộc")
          .min(1000, "Giá tối thiểu là 1,000đ")
          .typeError("Vui lòng nhập số"),
        stock: Yup.number()
          .required("Số lượng là bắt buộc")
          .min(0, "Số lượng không được âm")
          .integer("Vui lòng nhập số nguyên")
          .typeError("Vui lòng nhập số"),
        attributes: Yup.array().of(
          Yup.object().shape({
            attribute_id: Yup.number().required(),
            option_id: Yup.number().required(),
          })
        ),
        images: Yup.array()
          .min(1, "Ít nhất 1 hình ảnh")
          .of(Yup.string().url("URL không hợp lệ")),
      })
    )
    .min(1, "Ít nhất 1 phiên bản"),
  specifications: Yup.array().of(
    Yup.object().shape({
      spec_id: Yup.number().required(),
      value: Yup.string().required("Giá trị thông số là bắt buộc"),
    })
  ),
});

const AddProduct = ({
  categories,
  brands,
  attributes,
  specifications,
  onSubmit,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    variants: true,
    specs: true,
    media: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [expandedSectionsV2, setExpandedSectionsV2] = useState({
    basic: true,
    variants: true,
    specs: true,
    media: true,
  });

  const toggleSectionV2 = (section) => {
    setExpandedSectionsV2((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const initialValues = {
    name: "",
    category_id: "",
    brand_id: "",
    description: "",
    variants: [
      {
        sku_code: "",
        price: "",
        stock: "",
        attributes: [],
        images: [],
      },
    ],
    specifications: [],
  };

  return (
    <>
      <div className="mb-6">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a
                href="/seller"
                className="text-sm font-medium hover:text-blue-600"
              >
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-4 h-4 mx-1"
                />
                <a
                  href="/seller/products"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Sản phẩm
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-4 h-4 mx-1"
                />
                <span className="text-sm font-medium text-gray-500">
                  Thêm mới
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="relative">
          <h1 className="text-3xl font-bold text-gray-900 relative inline-block">
            <span className="relative z-10">Thêm sản phẩm mới</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100/70 -rotate-1 z-0"></span>
          </h1>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={productSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-6">
            {/* Thông tin cơ bản */}
            <Card>
              <CardHeader
                className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-colors duration-200 border-b border-gray-100"
                onClick={() => toggleSection("basic")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="w-5 h-5 text-blue-600"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Thông tin cơ bản
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Nhập thông tin cơ bản về sản phẩm
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 hidden sm:block">
                    {expandedSections.basic ? "Thu gọn" : "Mở rộng"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    {expandedSections.basic ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="w-4 h-4 text-gray-600"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-4 h-4 text-gray-600"
                      />
                    )}
                  </div>
                </div>
              </CardHeader>
              {expandedSections.basic && (
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Product Name */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faBoxOpen}
                          className="w-4 h-4 text-gray-400"
                        />
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700 mb-0"
                        >
                          Tên sản phẩm <span className="text-red-500">*</span>
                        </Label>
                      </div>
                      <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="Nhập tên sản phẩm (ví dụ: iPhone 15 Pro Max 256GB)"
                        className="w-full h-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-sm text-red-500 mt-1 flex items-center gap-1"
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faTag}
                          className="w-4 h-4 text-gray-400"
                        />
                        <Label
                          htmlFor="category_id"
                          className="text-sm font-medium text-gray-700 mb-0"
                        >
                          Danh mục <span className="text-red-500">*</span>
                        </Label>
                      </div>
                      <Field as={Select} name="category_id">
                        <SelectTrigger className="w-full h-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:bg-gray-50">
                          <SelectValue
                            placeholder="Chọn danh mục sản phẩm"
                            className="text-gray-900"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                          {categories.map((category) => (
                            <SelectItem
                              key={category.id}
                              value={category.id.toString()}
                              className="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                {category.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Field>
                      <ErrorMessage
                        name="category_id"
                        component="div"
                        className="text-sm text-red-500 mt-1 flex items-center gap-1"
                      />
                    </div>

                    {/* Brand */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="w-4 h-4 text-gray-400"
                        />
                        <Label
                          htmlFor="brand_id"
                          className="text-sm font-medium text-gray-700 mb-0"
                        >
                          Thương hiệu
                          <span className="text-gray-400 text-xs ml-1">
                            (tùy chọn)
                          </span>
                        </Label>
                      </div>
                      <Field as={Select} name="brand_id">
                        <SelectTrigger className="w-full h-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white hover:bg-gray-50">
                          <SelectValue
                            placeholder="Chọn thương hiệu"
                            className="text-gray-900"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-y-auto">
                          {brands.map((brand) => (
                            <SelectItem
                              key={brand.id}
                              value={brand.id.toString()}
                              className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-b-0"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
                                  {brand.name.charAt(0)}
                                </div>
                                {brand.name}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Field>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-2 space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="w-4 h-4 text-gray-400"
                        />
                        <Label
                          htmlFor="description"
                          className="text-sm font-medium text-gray-700 mb-0"
                        >
                          Mô tả sản phẩm
                        </Label>
                      </div>
                      <Field
                        as={Textarea}
                        id="description"
                        name="description"
                        rows={4}
                        placeholder="Nhập mô tả chi tiết về sản phẩm, tính năng đặc biệt, thông số kỹ thuật..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                      />
                      <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          Mô tả chi tiết giúp khách hàng hiểu rõ hơn về sản phẩm
                        </span>
                        <span className="font-mono">0/1000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Phiên bản sản phẩm */}
            <Card>
              <CardHeader
                className="flex flex-row items-center justify-between cursor-pointer hover:bg-gray-50/50 transition-colors duration-200 border-b border-gray-100"
                onClick={() => toggleSectionV2("variants")}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="w-5 h-5 text-blue-600"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Phiên bản sản phẩm
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Nhập thông tin chi tiết về sản phẩm
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 hidden sm:block">
                    {expandedSectionsV2.variants ? "Thu gọn" : "Mở rộng"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                    {expandedSectionsV2.variants ? (
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="w-4 h-4 text-gray-600"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="w-4 h-4 text-gray-600"
                      />
                    )}
                  </div>
                </div>
              </CardHeader>
              {expandedSectionsV2.variants && (
                <CardContent>
                  <FieldArray name="variants">
                    {({ push, remove }) => (
                      <div className="space-y-6">
                        {values.variants.map((variant, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="font-medium">
                                Phiên bản #{index + 1}
                              </h3>
                              {values.variants.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => remove(index)}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    className="h-4 w-4 text-red-500"
                                  />
                                </Button>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label
                                  htmlFor={`variants.${index}.sku_code`}
                                  className="text-sm font-medium text-gray-700 mb-0"
                                >
                                  Mã SKU
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Field
                                  as={Input}
                                  id={`variants.${index}.sku_code`}
                                  name={`variants.${index}.sku_code`}
                                  placeholder="VD: SKU12345"
                                  className="h-10"
                                />
                                <ErrorMessage
                                  name={`variants.${index}.sku_code`}
                                  component="div"
                                  className="text-sm text-red-500"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label
                                  htmlFor={`variants.${index}.price`}
                                  className="text-sm font-medium text-gray-700 mb-0"
                                >
                                  Giá bán (đ)
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Field
                                  as={Input}
                                  type="number"
                                  id={`variants.${index}.price`}
                                  name={`variants.${index}.price`}
                                  placeholder="VD: 100000"
                                  className="h-10"
                                />
                                <ErrorMessage
                                  name={`variants.${index}.price`}
                                  component="div"
                                  className="text-sm text-red-500"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label
                                  htmlFor={`variants.${index}.stock`}
                                  className="text-sm font-medium text-gray-700 mb-0"
                                >
                                  Số lượng
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Field
                                  as={Input}
                                  type="number"
                                  id={`variants.${index}.stock`}
                                  name={`variants.${index}.stock`}
                                  placeholder="VD: 100"
                                  className="h-10"
                                />
                                <ErrorMessage
                                  name={`variants.${index}.stock`}
                                  component="div"
                                  className="text-sm text-red-500"
                                />
                              </div>
                            </div>

                            {/* Thuộc tính phiên bản */}
                            <div className="mt-4 space-y-3">
                              <Label>Thuộc tính phiên bản</Label>
                              {attributes.map((attr) => (
                                <div key={attr.id} className="space-y-2">
                                  <Label>{attr.name}</Label>
                                  <Select
                                    onValueChange={(value) => {
                                      const updatedAttributes = [
                                        ...variant.attributes,
                                      ];
                                      const existingIndex =
                                        updatedAttributes.findIndex(
                                          (a) => a.attribute_id === attr.id
                                        );

                                      if (existingIndex >= 0) {
                                        updatedAttributes[
                                          existingIndex
                                        ].option_id = parseInt(value);
                                      } else {
                                        updatedAttributes.push({
                                          attribute_id: attr.id,
                                          option_id: parseInt(value),
                                        });
                                      }

                                      setFieldValue(
                                        `variants.${index}.attributes`,
                                        updatedAttributes
                                      );
                                    }}
                                    value={
                                      variant.attributes
                                        .find((a) => a.attribute_id === attr.id)
                                        ?.option_id?.toString() || ""
                                    }
                                  >
                                    <SelectTrigger className="h-10">
                                      <SelectValue
                                        placeholder={`Chọn ${attr.name}`}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {attr.options.map((opt) => (
                                        <SelectItem
                                          key={opt.id}
                                          value={opt.id.toString()}
                                        >
                                          {opt.value}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              ))}
                            </div>

                            {/* Hình ảnh phiên bản */}
                            <div className="mt-4 space-y-2">
                              <Label>
                                Hình ảnh
                                <span className="text-red-500">*</span>
                              </Label>
                              <div className="flex flex-wrap gap-2">
                                {variant.images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="relative">
                                    <img
                                      src={img}
                                      alt={`Ảnh ${imgIndex + 1}`}
                                      className="h-20 w-20 object-cover rounded"
                                    />
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="sm"
                                      className="absolute top-0 right-0 p-1 h-6 w-6"
                                      onClick={() => {
                                        const newImages = [...variant.images];
                                        newImages.splice(imgIndex, 1);
                                        setFieldValue(
                                          `variants.${index}.images`,
                                          newImages
                                        );
                                      }}
                                    >
                                      <Trash2 className="h-3 w-3 text-red-500" />
                                    </Button>
                                  </div>
                                ))}
                                <div className="border-2 border-dashed rounded h-20 w-20 flex items-center justify-center">
                                  <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    style={{ display: "none" }}
                                    id={`image-upload-${index}`}
                                    onChange={(e) => {
                                      const files = e.target.files;
                                      if (files) {
                                        Array.from(files).forEach((file) => {
                                          const reader = new FileReader();
                                          reader.onload = (event) => {
                                            const imageUrl =
                                              event.target?.result;
                                            if (imageUrl) {
                                              const newImages = [
                                                ...variant.images,
                                                imageUrl,
                                              ];
                                              setFieldValue(
                                                `variants.${index}.images`,
                                                newImages
                                              );
                                            }
                                          };
                                          reader.readAsDataURL(file);
                                        });
                                      }
                                    }}
                                  />
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      document
                                        .getElementById(`image-upload-${index}`)
                                        .click();
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      icon={faImage}
                                      className="h-5 w-5"
                                    />
                                  </Button>
                                </div>
                              </div>
                              <ErrorMessage
                                name={`variants.${index}.images`}
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                          </div>
                        ))}

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            push({
                              sku_code: "",
                              price: "",
                              stock: "",
                              attributes: [],
                              images: [],
                            })
                          }
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="h-4 w-4 mr-2"
                          />
                          Thêm phiên bản
                        </Button>

                      </div>
                    )}
                  </FieldArray>
                </CardContent>
              )}
            </Card>

            {/* Thông số kỹ thuật */}
            <Card>
              <CardHeader
                className="flex flex-row items-center justify-between cursor-pointer"
                onClick={() => toggleSection("specs")}
              >
                <CardTitle className="text-lg">Thông số kỹ thuật</CardTitle>
                {expandedSections.specs ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </CardHeader>
              {expandedSections.specs && (
                <CardContent>
                  <FieldArray name="specifications">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.specifications.map((spec, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
                          >
                            <div className="space-y-2">
                              <Label>Thông số</Label>
                              <Select
                                value={spec.spec_id?.toString() || ""}
                                onValueChange={(value) => {
                                  setFieldValue(
                                    `specifications.${index}.spec_id`,
                                    parseInt(value)
                                  );
                                }}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Chọn thông số" />
                                </SelectTrigger>
                                <SelectContent>
                                  {specifications.map((s) => (
                                    <SelectItem
                                      key={s.id}
                                      value={s.id.toString()}
                                    >
                                      {s.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label>Giá trị</Label>
                              <Field
                                as={Input}
                                name={`specifications.${index}.value`}
                                placeholder="Nhập giá trị"
                              />
                              <ErrorMessage
                                name={`specifications.${index}.value`}
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>

                            <Button
                              type="button"
                              variant="ghost"
                              onClick={() => remove(index)}
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="h-4 w-4 text-red-500"
                              />
                            </Button>
                          </div>
                        ))}

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => push({ spec_id: "", value: "" })}
                        >
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="h-4 w-4 mr-2"
                          />
                          Thêm thông số
                        </Button>
                      </div>
                    )}
                  </FieldArray>
                </CardContent>
              )}
            </Card>

            {/* Nút submit */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Hủy bỏ
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Đang lưu..." : "Lưu sản phẩm"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddProduct;
