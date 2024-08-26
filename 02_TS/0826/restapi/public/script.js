function submitForm() {
  const form = document.getElementById("registerForm");
  const data = {
    name: form.name.value,
    address: form.address.value,
    email: form.email.value,
  };
  fetch("/api/v1/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("회원 등록 성공:", data))
    .catch((error) => console.error("회원 등록 실패:", error));
}

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // 폼의 기본 동작(페이지 리로드)을 막음

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    try {
      const response = await fetch("http://127.0.0.1:4000/api/v1/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address, email }),
      });

      if (response.ok) {
        alert("회원 등록 성공!");
      } else {
        const errorData = await response.json();
        alert(`회원 등록 실패: ${errorData.error}`);
      }
    } catch (error) {
      alert(`서버 오류: ${error.message}`);
    }
  });
