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
                                <Label htmlFor={`variants.${index}.sku_code`}>
                                  Mã SKU *
                                </Label>
                                <Field
                                  as={Input}
                                  id={`variants.${index}.sku_code`}
                                  name={`variants.${index}.sku_code`}
                                  placeholder="VD: SKU12345"
                                />
                                <ErrorMessage
                                  name={`variants.${index}.sku_code`}
                                  component="div"
                                  className="text-sm text-red-500"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`variants.${index}.price`}>
                                  Giá bán (đ) *
                                </Label>
                                <Field
                                  as={Input}
                                  type="number"
                                  id={`variants.${index}.price`}
                                  name={`variants.${index}.price`}
                                  placeholder="VD: 100000"
                                />
                                <ErrorMessage
                                  name={`variants.${index}.price`}
                                  component="div"
                                  className="text-sm text-red-500"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`variants.${index}.stock`}>
                                  Số lượng *
                                </Label>
                                <Field
                                  as={Input}
                                  type="number"
                                  id={`variants.${index}.stock`}
                                  name={`variants.${index}.stock`}
                                  placeholder="VD: 100"
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
                                    <SelectTrigger>
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
                              <Label>Hình ảnh *</Label>
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
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      const url = prompt("Nhập URL hình ảnh:");
                                      if (url) {
                                        const newImages = [
                                          ...variant.images,
                                          url,
                                        ];
                                        setFieldValue(
                                          `variants.${index}.images`,
                                          newImages
                                        );
                                      }
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
