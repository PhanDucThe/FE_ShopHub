const toSlug = (input) => {
  if (!input || input.trim() === "") {
    return "";
  }

  // Normalize NFD và loại bỏ dấu (tương đương Java Normalizer)
  const normalized = input
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Xử lý đặc biệt
  let processed = normalized
    .toLowerCase()
    .replace(/([a-z])\/([a-z])/g, "$1$2") // M/L -> ml, S/M -> sm
    .replace(/[^a-z0-9-]/g, "-") // thay ký tự đặc biệt thành -
    .replace(/-+/g, "-") // gộp nhiều - thành 1
    .replace(/^-|-$/g, ""); // bỏ - ở đầu/cuối

  return processed;
};

export default toSlug;
