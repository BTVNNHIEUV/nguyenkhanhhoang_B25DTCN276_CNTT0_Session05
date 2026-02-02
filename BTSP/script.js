let USERNAME = "admin";
let PASSWORD = "12345";

let attempt = 0;

while(attempt < 3){
    let inputUser = prompt("Nhập tên tài khoản");
    let inputPass = prompt("Nhập mật khẩu");
    if (inputUser == USERNAME && inputPass == PASSWORD) {
        console.log("Đăng nhập thành công");
        break;
        }else{
            if (inputUser !== USERNAME){
                console.log("Tài khoản không hợp lệ");
            }
            else if(inputPass !== PASSWORD){
                console.log("Mật khẩu không hợp lệ");
            }
            attempt++;
        }
}
if(attempt == 3){
    alert("Tài khoản đã bị khóa")
}else{
    let choices;

    do{
        choices = prompt(
            "=========== MENU ============\n" +
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho\n" +
            "3. Dự toán phí bảo trì\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Chọn chức năng (1-5):"
        );

        if (choices == 1) {
            let totalbook = 0;
            let evenbook = 0;
            let unevenbook = 0;
            while(true){
                let IdInput = Number(prompt("Nhập mã số sách (0 để dừng)"));
                if(IdInput == 0 ){
                    break;
                }
                totalbook++;
                if(IdInput % 2 == 0){
                    evenbook++;
                }else{
                    unevenbook++;
                }
            }
            alert(
                `Tổng số mã sách : ${totalbook}\n
                Số sách khoa học(chẵn) : ${evenbook}\n
                Số sách nghệ thuật(lẻ) : ${unevenbook}`
            );
        }

        if (choices == 2) {
            let Totalrow = Math.floor(Number(prompt("nhập số hàng")));
            let Totalcol = Math.floor(Number(prompt("nhập số cột")));
            
            for(let row = 1;row <= Totalrow;row++){
                let box = "";
                for(let col = 1;col <= Totalcol;col++){
                    if(row == col){
                        box += `[${row}-${col}](Kệ ưu tiên) `;
                    }else{
                        box += `[${row}-${col}] `;
                    }
                }
                console.log(box.trim());
            }
        }

        if (choices == 3) {
            let bookamount = Number(prompt("nhập vào số lượng sách hiện có"));
            let bookprice = Number(prompt("nhập giá của quyển sách"));
            let pricepredict = Number(prompt("nhập vào số năm dự đoán"));

            for (let year = 0; year < pricepredict; year++) {
               let totalcost = bookamount * bookprice;
               console.log(`Năm ${year} : ${totalCost}đ`);
               bookprice *= 1.1;
            }
        }

        if (choices == 4){
            let luckynumber = Number(prompt("nhập vào số may mắn"));
            let counting = 0;
            console.log(`số may mắn là:\n`);
            for(let number1 = 1;number1 <= luckynumber;number1++){
                if(number1 % 3 == 0 && number1 % 5 !== 0){
                    console.log(`${number1}`);
                    counting++;
                }
            }
            console.log(`Tổng số may mắn là ${counting}`);
        }

        if (choices == 5){
            alert("Hệ thống đang đăng xuất...");
            break;
        }
    }while(choices != 5);
}
