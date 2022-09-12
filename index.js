// Bài 1
// let a = parseInt(prompt('Nhập a'));
// let b = parseInt(prompt('Nhập b'));
// if (a % b == 0) {
//     alert('a chia hết cho b');
// } else {
//     alert('a không chia hết cho b');
// }

// Bài 2
// let a = parseInt(prompt('Nhập tuổi của học sinh'));
// if (a >= 16) {
//     alert('Học sinh đủ điều kiện vào học lớp 10');
// } else {
//     alert('Học sinh không đủ điều kiện vào học lớp 10');
// }

// Bài 3
// let a = parseInt(prompt('Nhập 1 số nguyên bất kỳ'));
// if (a > 0) {
//     alert('Số đã nhập lớn hơn 0')
// } else if (a < 0) {
//     alert('Số đã nhập nhỏ hơn 0');
// } else {
//     alert('Số đã nhập bằng 0');
// }

// Bài 4
// let a = parseInt(prompt('Nhập a'));
// let b = parseInt(prompt('Nhập b'));
// let c = parseInt(prompt('Nhập c'));
// if (a >= b && a >= c) {
//     alert('Giá trị lớn nhất là ' + a);
// } else if (b > c) {
//     alert('Giá trị lớn nhất là ' + b);
// } else {
//     alert('Giá trị lớn nhất là ' + c);
// }

// Bài 5
// let a = parseInt(prompt('Điền điểm các bài kiểm tra'));
// let b = parseInt(prompt('Điền điểm thi giữa kỳ'));
// let c = parseInt(prompt('Điền điểm thi cuối kỳ'));
// let res = (a + b + c) / 3;
// if (res >= 9) {
//     alert('Xếp loại học sinh xuất sắc');
// } else if (res >= 7) {
//     alert('Xếp loại học sinh giỏi');
// } else if (res >= 5) {
//     alert('Xếp loại học sinh trung bình');
// } else {
//     alert('Xếp loại học sinh yếu');
// }

// Bài 6
// let a = parseInt(prompt('Nhập doanh số'));
// if (a < 400) {
//     alert('Không có doanh số');
// } else if (a < 600) {
//     let hoaHong = a * 0.01;
//     alert('Tiền hoa hồng là ' + hoaHong);
// } else if (a < 800) {
//     let hoaHong = a * 0.015;
//     alert('Tiền hoa hồng là ' + hoaHong);
// } else {
//     let hoaHong = a * 0.02 + (a - 800) * 0.03;
//     alert('Tiền hoa hồng là ' + hoaHong);
// }

// Bài 7
// let b = 25000;
// let a = prompt('Số phút gọi');
// if (a > 200) {
//     let phoneNum = b + 50 * 600 + 400 * 150 + (a - 200) * 200;
//     alert('Cước điện thoại của hộ gia đình là ' + phoneNum);
// } else if (a > 50) {
//     let phoneNum = b + 50 * 600 + (a - 50) * 400;
//     alert('Cước điện thoại của hộ gia đình là ' + phoneNum);
// } else {
//     let phoneNum = b + a * 600;
//     alert('Cước điện thoại của hộ gia đình là ' + phoneNum);
// }