// 현재 표시 중인 연도와 월 (1~12)
let currentYear = 2025;
let currentMonth = 1; // 1월

// HTML 요소 참조
const titleElem = document.getElementById("calendar-title"); // <h1 id="calendar-title">
const calendarElem = document.getElementById("calendar"); // <div id="calendar">
const prevBtn = document.getElementById("prevBtn"); // <button id="prevBtn">
const nextBtn = document.getElementById("nextBtn"); // <button id="nextBtn">

// 페이지가 처음 로드될 때 1월 달력 그리기
renderCalendar(currentYear, currentMonth);

// To do 1.
// prevBtn(이전 버튼)에 대한 click 이벤트 추가
// 1월 이전으로 갈 수 없도록 구현

// To do 2.
// nextBtn(다음 버튼)에 대한 click 이벤트 추가
// 12월 이후로 갈 수 없도록 구현

/**
 * 달력을 생성하여 화면에 표시하는 함수
 * @param {number} year  - 연도 (예: 2025)
 * @param {number} month - 월 (1~12)
 */
function renderCalendar(year, month) {
    // ----------------------------
    // 1) 달력 제목 “YYYY.MM” 형식으로 표시
    // ----------------------------
    const monthString = String(month).padStart(2, "0");
    // 월이 한 자리수(1~9)일 때 앞에 0을 붙여 "01", "02"처럼 표기
    titleElem.textContent = `${year}.${monthString}`;

    // ----------------------------
    // 2) 기존 달력 내용 지우기
    // ----------------------------
    calendarElem.innerHTML = "";

    // ----------------------------
    // 3) 요일 헤더(일~토) 생성
    // ----------------------------
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    days.forEach((day) => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;
        calendarElem.appendChild(dayDiv);
    });

    // To do 3.
    // parameter로 전달받은 월에 대한 첫째 날, 마지막 날짜 구하기

    // To do 4.
    // 첫 주의 빈칸 채우기
    // 해당 달의 시작이 월요일이라면 일요일은 빈칸이어야 함

    // ----------------------------
    // 6) 1일부터 마지막 날짜까지 생성하여 달력에 추가
    // ----------------------------
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
        // To do 5.
        // 날짜 채우기
        // 날짜마다 요일을 계산하여 토요일이거나 일요일일 경우
        // 해당 div에 클래스를 지정하여 파란색 or 빨간색으로 출력 될 수 있도록

        calendarElem.appendChild(dateDiv);
    }
}
