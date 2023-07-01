// Bài 1
// B1   tạo biến : day,salaryofday,salary
// B2   gán giá trị : day,salaryofday,salary
// B3   tính : tổn số tiền với ngày làm ngày công 
// B4   console Tiền lương 
function enter() {
    var day = document.getElementById("day"),
        salary = document.getElementById("salary");
    salary.value = day.value * 100000;
}
// Bài 2
// B1   Tạo biến : n1>n5 average
// B2   Gán giá trị
// B3   Tính TBC của 5 số note: n1.value là string nên dùng Number(n1.value) để format lại
// B4   console TBC 
function enter1() {
    var n1 = document.getElementById("n1"),
        n2 = document.getElementById("n2"),
        n3 = document.getElementById("n3"),
        n4 = document.getElementById("n4"),
        n5 = document.getElementById("n5"),
        average = document.getElementById("average");
    average.value = (Number(n1.value) + Number(n2.value) + Number(n3.value) + Number(n4.value) + Number(n5.value)) / 5;
}
// Bài 3
// B1   Tạo biến : usd trans
// B2   Gán giá trị
// B3   Tính : trans = usd x 23500
// B4   console trans.value
function enter2() {
    var usd = document.getElementById("usd"),
        trans = document.getElementById("trans");
    trans.value = usd.value * 23500
}
// Bài 4
// B1   Tạo biến : d,r,cv,dt
// B2   Gán giá trị
// B3   Tính : dt=d*r,cv=d+r
// B4   console dt,cv
function enter3() {
    var
        d = document.getElementById("d"),
        r = document.getElementById("r"),
        dt = document.getElementById("dt"),
        cv = document.getElementById("cv");
    dt.value = d.value * r.value;
    console.log(dt.value);
    cv.value = ((Number(d.value) + Number(r.value)) * 2)
}
// Bài 5
// B1   Tạo biến : num,sum,so_hang_dv,so_hang_chuc
// B2   Gán giá trị
// B3   Tính : hang dv=num%10 hang chuc=num/10
// B4   console 
function enter4() {
    var
        num = document.getElementById("num"),
        sum = document.getElementById("sum"),
        so_hang_dv = document.getElementById("so_hang_dv"),
        so_hang_chuc = document.getElementById("so_hang_chuc");
    so_hang_dv.value = num.value % 10;
    so_hang_chuc.value = num.value / 10;
    so_hang_chuc.value = parseInt(so_hang_chuc.value); //format sang kieu int
    console.log("CHUC=", so_hang_chuc.value);
    console.log("DON Vy=", so_hang_dv.value);
    sum.value = Number(so_hang_dv.value) + Number(so_hang_chuc.value);

}

var check = "b1", check1 = "bai1";
document.getElementById("bai1").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b1").style.display = 'block';
    check = "b1";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai1";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai2").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b2").style.display = 'block';
    check = "b2";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai2";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai3").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b3").style.display = 'block';
    check = "b3";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai3";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai4").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b4").style.display = 'block';
    check = "b4";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai4";
    document.getElementById(check1).classList.add('mode');

}
document.getElementById("bai5").onclick = function () {
    document.getElementById(check).style.display = 'none';
    document.getElementById("b5").style.display = 'block';
    check = "b5";
    document.getElementById(check1).classList.remove('mode');
    check1 = "bai5";
    document.getElementById(check1).classList.add('mode');

}

