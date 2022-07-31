/// Bài tập về nhà ss2

///     1.Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không

alert("Nhập 2 số a và b bất kì để kiểm tra xem a có chia hết cho b hay không");
let a = Number(prompt("Nhập số a"));
let b = Number(prompt("Nhập số b"));
if (a % b === 0) {
  alert("a chia hết cho b");
} else {
  alert("a không chia hết cho b");
}

///     2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện
//  vào học lớp 10.

alert("Nhập số tuổi của bạn để kiểm tra có đủ điều kiện vào lớp 10 hay không");
let tuoi = Number(prompt("Nhập tuổi của bạn"));
if (tuoi >= 15) {
  alert("Bạn đủ điều kiện vào học lớp 10");
} else {
  alert("Bạn không đủ điều kiện vào học lớp 10");
}

///    3.3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho
//     người dùng biết số đó là lớn hay nhỏ hơn 0.

alert("Nhập một số nguyên bất để kiểm tra lớn hơn hay nhỏ hơn 0");
let so = Number(prompt("Nhập số mà bạn muốn kiểm tra"));
if (so > 0) {
  alert(`Số ${so} lớn hơn 0`);
} else {
  alert(` Số ${so} nhỏ hơn 0`);
}

///    4. 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

alert("Hãy nhập 3 số nguyên bất kì để tìm giá trị lớn nhất");
let s1 = Number(prompt("Nhập số thứ nhất"));
let s2 = Number(prompt("Nhập số thứ hai"));
let s3 = Number(prompt("Nhập số thứ ba"));
if (s1 >= s2 && s1 >= s3) {
  alert(`Giá trị lớn nhất là ${s1}`);
} else if (s2 >= s1 && s2 >= s3) {
  alert(` Giá trị lớn nhất là ${s2}`);
} else if (s3 >= s1 && s3 >= s2) {
  alert(` Giá trị lớn nhất là ${s3}`);
}

///    5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm
//     thi giữa kỳ, điểm thi cuối kỳ

alert(`Hãy nhập lần lượt điểm kiểm tra, điểm thi giữa kì và cuối kì
       để kiểm tra bạn xếp học lực gì `);

let diem1 = Number(prompt("Nhập điểm bài kiểm tra"));
let diem2 = Number(prompt("Nhập điểm giữa kì"));
let diem3 = Number(prompt("Nhập điểm cuối kì"));

let diemtb = (diem1 + diem2 * 2 + diem3 * 3) / 6;
if (diemtb >= 8) {
  alert("Bạn xếp hạng học lực giỏi");
} else if (8 > diemtb && diemtb >= 6.5) {
  alert("Bạn xếp hạng học lực khá");
} else if (6.5 > diemtb && diemtb >= 5) {
  alert("Bạn xếp hạng học lực trung bình");
} else if (5 > diemtb) {
  alert("Bạn xếp hạng học lực yếu");
}

////    6.Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng(bán quần áo)

alert("Bạn hãy nhập doanh số bán hàng để tính hoa hồng theo mức doanh thu");
let aa = Number(prompt("Bạn hãy nhập doanh số của mình(VND)"));
if (0 <= aa && aa <= 300000) {
  alert(` Số tiền hoa hồng bạn nhận được là : ${aa * (2 / 100)}`);
} else if (300000 < aa && aa < 1000000) {
  alert(` Số tiền hoa hồng bạn nhận được là : ${aa * (3 / 100)}`);
} else if (1000000 < aa) {
  alert(` Số tiền hoa hồng bạn nhận được là : ${aa * (5 / 100)}`);
}

////    7. Tính BMI

alert("Bạn hãy nhập số chiều cao, cân nặng để tính BMI");
let chieucao = prompt("Chiều cao(m) của bạn là :");
let cannang = prompt("Cân nặng(kg) của bạn là :");
let bmi = cannang / (chieucao * chieucao);

if (bmi < 18) {
  alert(`Thiếu cân , BMI = ${bmi}`);
} else if (18 <= bmi && bmi < 25) {
  alert(`Bình thường ,BMI = ${bmi}`);
} else if (25 <= bmi && bmi < 30) {
  alert(`thừa cân , BMI = ${bmi}`);
} else {
  alert("Béo quá! Giảm cân đi");
}
