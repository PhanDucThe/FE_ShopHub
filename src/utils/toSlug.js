const toSlug = (str) => {
  return str
    .normalize("NFD") // tách dấu tiếng Việt
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .toLowerCase() // chuyển thành chữ thường
    .trim() // bỏ khoảng trắng 2 đầu
    .replace(/[^a-z0-9\s-]/g, "") // bỏ ký tự đặc biệt
    .replace(/\s+/g, "-") // thay khoảng trắng = dấu gạch ngang
    .replace(/-+/g, "-"); // bỏ gạch ngang thừa
};

export default toSlug;
