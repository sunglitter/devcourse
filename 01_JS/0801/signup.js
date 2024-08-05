function validateForm() {
    let isValid = true;
    let resultMessage = "";

    // 아이디 유효성 검사
    const username = document.getElementById("username").value;
    const usernameError = document.getElementById("usernameError");
    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;

    if (!usernameRegex.test(username)) {
        usernameError.textContent = "아이디는 영문과 숫자를 섞어 4~15자리로 입력해주세요.";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // 이메일 유효성 검사
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = "유효한 이메일 주소를 입력해주세요.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // 비밀번호 유효성 검사
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");

    if (password.length < 8) {
        passwordError.textContent = "비밀번호는 8자리 이상이어야 합니다.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // 비밀번호 확인 검사
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    // 메일링 수신 라디오 버튼 검사
    const subscribeYes = document.getElementById("subscribeYes").checked;
    const subscribeNo = document.getElementById("subscribeNo").checked;

    if (!subscribeYes && !subscribeNo) {
        resultMessage = "메일링 수신 여부를 선택해주세요.";
        isValid = false;
    }

    // 결과 메시지 출력
    const resultMessageElement = document.getElementById("resultMessage");

    if (isValid) {
        resultMessageElement.textContent = "회원가입이 완료되었습니다!";
        resultMessageElement.style.color = "green";
    } else {
        resultMessageElement.textContent = resultMessage;
        resultMessageElement.style.color = "red";
    }
}
