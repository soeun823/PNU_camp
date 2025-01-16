// (1) 폼과 테이블의 tbody 요소를 찾아서 변수에 할당
const postForm = document.getElementById("postForm");
const postTableBody = document.querySelector("#postTable tbody");

// (2) 폼 제출 이벤트
postForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 페이지 새로고침 막기

    // 1) 입력값 가져오기
    // To do 1.
    // 제목, 내용, 작성자 값 읽어오기

    // To do 2.
    // 하나라도 빈 칸이 있는 채로 제출하였는지 확인
    // 빈 칸이 있을 시 alert를 이용하여 모든 칸을 채워야 한다고 알림

    // To do 3.
    // 제출된 게시글을 Table에 출력하기 위한 table 요소 생성 및 값 채우기
    // 행과 데이터 셀 만들어야 함

    // 작성일자
    const dateCell = document.createElement("td");
    const now = new Date();
    dateCell.textContent = now.toLocaleString();
    // 예: 2025.01.25. 10:15:30 (브라우저/OS 설정에 따라 다를 수 있음)

    // To do 4.
    // Date 값을 포함한 글 정보를 행에 추가

    // 4) 테이블의 tbody에 추가 (최신 글이 위에 오게 하려면 prepend)
    //    아래에 오길 원하면 append(newRow) 사용
    postTableBody.prepend(newRow);

    // 5) 폼 초기화
    postForm.reset();
});
