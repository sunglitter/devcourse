var calHeader = document.querySelector(".calendar h3");
var calDates = document.querySelector(".dates");
var calNavs = document.querySelectorAll("#prev, #next");
var calMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
var calDate = new Date();
var calMonth = calDate.getMonth();
var calYear = calDate.getFullYear();
function renderCalendar() {
    var calStart = new Date(calYear, calMonth, 1).getDay();
    var calEndDate = new Date(calYear, calMonth + 1, 0).getDate();
    var calEnd = new Date(calYear, calMonth, calEndDate).getDay();
    var calEndDatePrev = new Date(calYear, calMonth, 0).getDate();
    var calDatesHtml = "";
    for (var i = calStart; i > 0; i--) {
        calDatesHtml += "<li class=\"inactive\">".concat(calEndDatePrev - i + 1, "</li>");
    }
    for (var i = 1; i <= calEndDate; i++) {
        var className = i === calDate.getDate() &&
            calMonth === new Date().getMonth() &&
            calYear === new Date().getFullYear()
            ? ' class="selected"'
            : "";
        calDatesHtml += "<li".concat(className, " data-date=\"").concat(i, "\">").concat(i, "</li>");
    }
    for (var i = calEnd; i < 6; i++) {
        calDatesHtml += "<li class=\"inactive\">".concat(i - calEnd + 1, "</li>");
    }
    calDates.innerHTML = calDatesHtml;
    calHeader.textContent = "".concat(calMonths[calMonth], " ").concat(calYear);
    // 1.1. 날짜 클릭 이벤트 핸들러 추가
    document.querySelectorAll(".dates li").forEach(function (dateItem) {
        dateItem.addEventListener("click", function () {
            var selectedDate = this.dataset.date.padStart(2, "0"); // 날짜를 두 자리로 맞춤
            var currentMonth = String(calMonth + 1).padStart(2, "0"); // 월을 두 자리로 맞춤
            var currentYear = calYear;
            // 이전 선택된 날짜의 동그라미 제거
            document.querySelectorAll(".dates li.selected").forEach(function (item) {
                item.classList.remove("selected");
            });
            // 현재 선택된 날짜에 동그라미 표시
            this.classList.add("selected");
            // 아이템 필터링
            var filteredItems = Array.from(document.querySelectorAll(".addedtdl-container")).filter(function (item) {
                var itemDate = item.querySelector(".addeddate").value;
                return itemDate === "".concat(currentYear, "-").concat(currentMonth, "-").concat(selectedDate);
            });
            var daystdlInner = document.querySelector(".datstdl-Inner");
            if (filteredItems.length > 0) {
                // 기존 이미지 숨김
                daystdlInner.innerHTML = "";
                filteredItems.forEach(function (item) {
                    // 각 아이템을 감싸는 listContainer 생성
                    var listContainer = document.createElement("div");
                    listContainer.classList.add("listContainer");
                    // 카테고리를 표시하는 categoryContainer 생성
                    var categoryContainer = document.createElement("div");
                    var category = item.querySelector(".addedctg").textContent;
                    categoryContainer.textContent = category;
                    categoryContainer.classList.add("categoryContainer");
                    // 아이템 내용을 표시하는 subjectContainer 생성
                    var subjectContainer = document.createElement("div");
                    var subject = item.querySelector(".subject").textContent;
                    subjectContainer.textContent = subject;
                    subjectContainer.classList.add("subjectContainer");
                    // 완료된 항목에 대한 스타일 추가
                    if (item.querySelector(".addedtdl").classList.contains("completed")) {
                        listContainer.classList.add("addcom");
                        subjectContainer.classList.add("addcoms");
                    }
                    // listContainer에 categoryContainer와 subjectContainer를 추가
                    listContainer.appendChild(categoryContainer);
                    listContainer.appendChild(subjectContainer);
                    // daystdlInner에 listContainer 추가
                    daystdlInner.appendChild(listContainer);
                });
            }
            else {
                // 이미지 보임
                daystdlInner.innerHTML =
                    '<img class="blankimage" src="./images/todolistwhite.png" alt="날짜를 선택하지 않았을 때의 TODO LIST 이미지" />';
            }
        });
    });
}
// 2. 오른쪽 검색 버튼 클릭 시 동작 구현
document.querySelector(".search-btn").addEventListener("click", function () {
    var searchText = document
        .querySelector(".sbn-text")
        .value.trim()
        .toLowerCase();
    var items = document.querySelectorAll(".addedtdl-container");
    items.forEach(function (item) {
        var subjectText = item
            .querySelector(".subject")
            .textContent.trim()
            .toLowerCase();
        if (subjectText.includes(searchText)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }
    });
});
calNavs.forEach(function (nav) {
    nav.addEventListener("click", function (e) {
        var btnId = e.target.id;
        if (btnId === "prev" && calMonth === 0) {
            calYear--;
            calMonth = 11;
        }
        else if (btnId === "next" && calMonth === 11) {
            calYear++;
            calMonth = 0;
        }
        else {
            calMonth = btnId === "next" ? calMonth + 1 : calMonth - 1;
        }
        calDate = new Date(calYear, calMonth, new Date().getDate());
        calYear = calDate.getFullYear();
        calMonth = calDate.getMonth();
        renderCalendar();
    });
});
renderCalendar();
