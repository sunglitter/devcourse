var now = new Date();
var month = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
var seasons = document.querySelector(".left");
switch (month) {
    case 3:
    case 4:
    case 5:
        seasons.classList.add("spring");
        break;
    case 6:
    case 7:
    case 8:
        seasons.classList.add("summer");
        break;
    case 9:
    case 10:
    case 11:
        seasons.classList.add("fall");
        break;
    default:
        seasons.classList.add("winter");
        break;
}
var toggleBtn = document.querySelector(".menuImage");
var menu = document.querySelector(".menu");
toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
});
document.getElementById("category").addEventListener("change", function () {
    var select = this;
    var selectedValue = select.value;
    function addCategory() {
        // 'Add' 옵션을 선택했는지 확인
        if (selectedValue === "add") {
            // 카테고리 이름을 입력받는 프롬프트 표시
            var newCategory = prompt("추가할 카테고리 이름을 입력하세요.", "");
            // 사용자가 값을 입력했는지 확인
            if (newCategory && newCategory.trim() !== "") {
                // 새 옵션을 생성하고 'Add' 옵션 바로 위에 추가
                var newOption = document.createElement("option");
                newOption.textContent = newCategory;
                // 'Add' 옵션 바로 위에 새 옵션을 추가
                select.insertBefore(newOption, select.querySelector(".addCategory"));
                // 새로 추가된 카테고리를 선택된 상태로 만듦
                select.value = newCategory;
            }
            else if (newCategory === null) {
                // 취소 버튼을 눌렀을 때 카테고리 값이 Select Category로 돌아가게 만듦
                select.value = "";
            }
            else {
                // 사용자가 아무 입력도 하지 않았을 경우 경고창을 띄우고 프롬프트로 돌아감
                alert("추가할 카테고리 이름을 입력하지 않았습니다.");
                addCategory();
            }
        }
    }
    addCategory();
});
// 선택된 날짜를 추적하는 변수 추가
var selectedDate = new Date(); // 현재 날짜로 초기화
document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector(".add-button");
    var categorySelect = document.getElementById("category");
    var addedtdlWrap = document.querySelector(".addedtdl-wrap");
    var completedCount = 0;
    var pendingCount = 0;
    var selectedDate = new Date(); // 선택된 날짜
    function updateTaskCount() {
        document.querySelector(".comtcount").textContent = String(completedCount).padStart(2, "0");
        document.querySelector(".pendtcount").textContent = String(pendingCount).padStart(2, "0");
    }
    // 날짜에 따른 필터링 함수 추가
    function filterItemsBySelectedDate() {
        var currentMonth = String(selectedDate.getMonth() + 1).padStart(2, "0");
        var currentYear = selectedDate.getFullYear();
        var currentDay = String(selectedDate.getDate()).padStart(2, "0");
        var filteredItems = Array.from(document.querySelectorAll(".addedtdl-container")).filter(function (item) {
            var itemDate = item.querySelector(".addeddate").value;
            return itemDate === "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay);
        });
        var daystdlInner = document.querySelector(".datstdl-Inner");
        if (filteredItems.length > 0) {
            daystdlInner.innerHTML = "";
            filteredItems.forEach(function (item) {
                var listContainer = document.createElement("div");
                listContainer.classList.add("listContainer");
                var categoryContainer = document.createElement("div");
                var category = item.querySelector(".addedctg").textContent;
                categoryContainer.textContent = category;
                categoryContainer.classList.add("categoryContainer");
                var subjectContainer = document.createElement("div");
                var subject = item.querySelector(".subject").textContent;
                subjectContainer.textContent = subject;
                subjectContainer.classList.add("subjectContainer");
                if (item.querySelector(".addedtdl").classList.contains("completed")) {
                    listContainer.classList.add("addcom");
                    subjectContainer.classList.add("addcoms");
                }
                listContainer.appendChild(categoryContainer);
                listContainer.appendChild(subjectContainer);
                daystdlInner.appendChild(listContainer);
            });
        }
        else {
            daystdlInner.innerHTML =
                '<img class="blankimage" src="./images/todolistwhite.png" alt="날짜를 선택하지 않았을 때의 TODO LIST 이미지" />';
        }
    }
    addButton.addEventListener("click", function () {
        var itemInput = document.querySelector(".item");
        var itemValue = itemInput.value.trim();
        // 내용을 입력하지 않고 추가 버튼을 누르거나, 카테고리를 선택하지 않고 추가 버튼을 누를 경우
        if (itemValue === "") {
            alert("내용이 입력되지 않았습니다.");
            return;
        }
        else if (categorySelect.value === "") {
            alert("카테고리를 선택하고 추가해주세요.");
            return;
        }
        // 현재 날짜와 월 가져오기
        var now = new Date();
        var month = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1
        var date = now.getDate();
        var year = now.getFullYear();
        // 현재 선택된 카테고리 값 가져오기
        var selectedCategory = categorySelect.value;
        // 새로운 항목 생성
        var newItem = document.createElement("div");
        newItem.classList.add("addedtdl-container");
        newItem.innerHTML = "\n    <div class=\"addedtdl\">\n      <div class=\"adtleft\">\n        <div class=\"ctganddate\">\n          <div class=\"addedctg\">".concat(selectedCategory, "</div>\n          <div class=\"addeddate-container\">\n               <input type=\"text\" class=\"addeddate\" value=\"").concat(year, "-").concat(month, "-").concat(date, "\" />\n          </div>\n        </div>\n        <div class=\"subject\">").concat(itemValue, "</div>\n      </div>\n      <div class=\"adtright\">\n        <div class=\"btns\">\n          <input type=\"button\" class=\"tdl-checkbox\" />\n          <input type=\"button\" class=\"tdl-modify\" />\n          <input type=\"button\" class=\"tdl-remove\" />\n        </div>\n      </div>\n    </div>\n  ");
        addedtdlWrap.appendChild(newItem);
        // 항목 추가 후 입력 필드 비우기
        itemInput.value = "";
        renderCalendar();
        // 항목이 추가되었기 때문에 pendingCount에 하나 추가되고, 이후 updateTaskCount 함수를 불러와서 현황을 업데이트 함
        pendingCount++;
        updateTaskCount();
        // 완료 버튼 클릭 시 어두운 색상으로 변경하고 취소선, 반대로 완료 버튼을 해제할 시 원래 상태로 되돌림
        newItem
            .querySelector(".tdl-checkbox")
            .addEventListener("click", function () {
            var addedtdl = newItem.querySelector(".addedtdl");
            var addedctg = newItem.querySelector(".addedctg");
            var addeddate = newItem.querySelector(".addeddate");
            var subject = newItem.querySelector(".subject");
            if (!addedtdl.classList.contains("completed")) {
                addedtdl.classList.add("completed");
                addedctg.classList.add("completed");
                addeddate.classList.add("completed");
                subject.classList.add("completed");
                completedCount++;
                pendingCount--;
            }
            else {
                addedtdl.classList.remove("completed");
                addedctg.classList.remove("completed");
                addeddate.classList.remove("completed");
                subject.classList.remove("completed");
                completedCount--;
                pendingCount++;
            }
            updateTaskCount();
            renderCalendar();
            filterItemsBySelectedDate(); // 아이템 상태 변경 후 필터링 함수 호출
        });
        // 수정 버튼 클릭 시 div.subject 수정
        newItem.querySelector(".tdl-modify").addEventListener("click", function () {
            var newSubject = prompt("수정할 내용을 입력하세요.", newItem.querySelector(".subject").textContent);
            if (newSubject !== null) {
                newItem.querySelector(".subject").textContent = newSubject;
            }
            renderCalendar();
            filterItemsBySelectedDate(); // 아이템 수정 후 필터링 함수 호출
        });
        // 삭제 버튼 클릭 시 삭제 확인
        newItem.querySelector(".tdl-remove").addEventListener("click", function () {
            if (confirm("정말 삭제하겠습니까?")) {
                addedtdlWrap.removeChild(newItem);
                if (newItem.querySelector(".addedtdl").classList.contains("completed")) {
                    completedCount--;
                }
                else {
                    pendingCount--;
                }
                updateTaskCount();
            }
            renderCalendar();
            filterItemsBySelectedDate(); // 아이템 삭제 후 필터링 함수 호출
        });
        // daterangepicker 초기화 및 날짜 변경 시 실시간 업데이트
        $(newItem.querySelector(".addeddate")).daterangepicker({
            singleDatePicker: true,
            autoApply: true,
            opens: "center",
            locale: {
                format: "YYYY-MM-DD",
            },
        });
        // 날짜 변경 시 filterItemsBySelectedDate 함수 호출
        $(newItem.querySelector(".addeddate")).on("apply.daterangepicker", function (ev, picker) {
            // 선택된 날짜를 새로운 값으로 업데이트
            newItem.querySelector(".addeddate").value =
                picker.startDate.format("YYYY-MM-DD");
            filterItemsBySelectedDate(); // 날짜 변경 후 필터링 함수 호출
        });
        // 아이템 추가 후 필터링 함수 호출
        filterItemsBySelectedDate();
    });
});
