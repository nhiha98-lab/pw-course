**Function expression
Vd: const add = function(a,b) thay vì khai báo hàm riêng


**Lambda function (arrow function)
	⁃	Hay dùng
	⁃	sử dụng dấu => 
Vd: 
Const add = (a, b) => return a + b; 
-> ngắn gọn hơn, ko cần thêm function.
Thay vì (const add = function(a,b){
Return a+ b})

	⁃	TH ko có tham số 
Const greet = ( ) => console.log(“Hello”);
	⁃	TH có 1 tham số
Const double = x => x * 2;

**Anonymous function
	⁃	Ko có tên
	⁃	chỉ dùng khi hàm đc dùng 1 lần, có callback
	⁃	Ko thể đứng 1 mình
Vd: const anonymousFunc = function( ){
Console.log();
}


**DOM (document object model)
<thẻ mở option value =" …”> Text</thẻ đóng>
OR
<thẻ tự đóng/>

**Thẻ HTML thường gặp
<html> thẻ gốc của trang, chưa toàn bộ nội dùng trang web
<head> chứa metadata tiêu đề website, hiển thị ggl
<body> nội dung website hiển thị
<div> chia khối nhỏ trong trang web
<span> inline container định dạng 1 phần văn bản 

<header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa
<ul> un-ordered list: ko thứ tự
<ol> ordered list: có thứ tự
<table> tạo bảng dữ liệu
<thead> table heading
<tbody> table body
<tr> table row
<td> table data
<tfoot> table footer


**Thẻ form (quan trọng for test)

Thẻ input
Thẻ button
Select option
**SELECTOR-Xpath: dùng đc hầu hết các TH, đa dạng khả năng tìm kiếm, hơi dài
= XML path
//ten the[@thuoc tinh=‘gia tri’]
VD: //input[@id=‘email’]
+Tuyệt đối: đi dọc theo cây DOM, bắt đầu bởi 1 / (ko thể bắt đc đúng đối tượng khi có 2 cái giống nhau, xpath có thể bị dev update -> ko có tính ổn định)
+Tương đối, tìm dựa vào đặc tính, bắt đầu bởi 2 // (NÊN DÙNG)
-CSS selector: dựa vào thuộc tính CSS để viết đc xpath ngắn gọn đơn giản (chỉ trong TH dễ tìm, ko bằng xpath)
-Playwright: dùng riêng cho PW, cú pháp ngắn gọn, ko phụ thuộc cấu trúc DOM


**Playwright basic syntax
Test: đơn vị cơ bản để khai báo 1 test 
Đặt tên file .spec.ts
Step: đơn vị nhỏ hơn test, dùng để khai báo từng step của test case
Test.(‘<tên test>’, async ({page}) => {
Await.test.step(‘tên step’, async() => {
//code here
});
});

NÊN map 1-1 actions với steps ở test case

pressSequentially: gõ tững chữ 1 vào ô input - có thể có option delay (mili second) 

Lấy giá trị hiện tại check/ uncheck
Page.locator(“//input”).check();
Page.locator(“//input”).setCheck(false);

Dropdown:
selectOption

Upload file
setInputFiles(“<file path>”);