import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { attributeApi } from "@/api/attributeApi";
import { brandApi } from "@/api/brandApi";
import { categoryApi } from "@/api/categoryApi";
import { specificationsApi } from "@/api/specificationsApi";
import FormHeader from "@/components/forms/FormHeader";
import { initialProductValues } from "@/utils/initialValues";
import { productValidationSchema } from "@/utils/validationSchema";
import BasicInfoSection from "./BasicInfoSection";
import ProductVariantsSection from "./ProductVariantsSection";
import SpecificationsSection from "./SpecificationsSection";
import FormActions from "./FormActions";

const FormAddProduct = () => {
  // Data Atribute
  const [attribute, setAttribute] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await attributeApi.getAllAttributeOption();
      setAttribute(res.data);
    };
    fetchApi();
  }, []);

  // Data Brand
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await brandApi.getAllBrand();
      setBrand(res.data);
    };
    fetchApi();
  }, []);

  // Data category
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await categoryApi.getCategoryParent();
      setCategory(res.data);
    };
    fetchApi();
  }, []);

  // data specifications
  const [specifica, setSpecifica] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await specificationsApi.getSpecifications();
      setSpecifica(res.data);
    };
    fetchApi();
  }, []);

  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    variants: true,
    specs: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div>
          {/* Header */}
          <FormHeader />

          <Formik
            initialValues={initialProductValues}
            validationSchema={productValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form className="space-y-8">
              {/* Basic Information */}
              <BasicInfoSection
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                category={category}
                brand={brand}
              />

              {/* Product Variants */}
              <ProductVariantsSection
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                attribute={attribute}
              />

              {/* Specifications */}
              <SpecificationsSection
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                specifica={specifica}
              />

              {/* Submit Actions */}
              <FormActions />
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormAddProduct;
