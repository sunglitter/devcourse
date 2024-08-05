// let check = document.querySelector("shippingInfo");
// check.addEventListener("click", function(){
//     if(check.checked == true){
//         document.querySelector("#shippingName").value
//         = document.querySelector("#billingName").value;
//         document.querySelector("#shippingTel").value
//         = document.querySelector("#billingTel").value;
//         document.querySelector("#shippingAddr").value
//         = document.querySelector("#billingAddr").value;
//     }else{
//         document.querySelector("#shippingName").value = "";
//         document.querySelector("#shippingTel").value = "";
//         document.querySelector("#shippingAddr").value = "";
//     }
// })

function myFunction() {
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let pw = document.getElementById("password").value;
    let pwcheck = document.getElementById("pwcheck").value;
    let radio = document.getElementById("radio").value;

    if(id.length < 1){
        document.getElementById("show1").innerHTML = "아이디를 입력해주세요."
    } else if(pw.length > 10){
        document.getElementById("show1").innerHTML = "비밀번호는 10자리 이하로 입력해주세요."
    } else {
        document.getElementById("show1").innerHTML = "입력 OK"
    }




    if(pw.length < 1){
        document.getElementById("show").innerHTML = "비밀번호를 입력해주세요."
    } else if(pw.length > 10){
        document.getElementById("show").innerHTML = "비밀번호는 10자리 이하로 입력해주세요."
    } else {
        document.getElementById("show").innerHTML = "입력 OK"
    }
    ["id", "pass"].forEach(field => document.getElementById(field).value="")

    setTimeout(() => {
        document.getElementById("show").innerHTML = "";
    }, 2000);
}