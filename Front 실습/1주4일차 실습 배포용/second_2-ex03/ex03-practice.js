const testArea = document.getElementById("testArea");
const result = document.getElementById("result");
const resetButton = document.getElementById("resetButton");

let startTime; // 초록색 화면 시작 시간
let endTime; // 클릭 순간 시간
let reactionTimes = []; // 반응 시간 저장
let isWaiting = false; // 초록색(대기) 화면인지 여부
let testCount = 0; // 테스트 횟수 (최대 5회)
let waitingTimeout = null; // setTimeout 참조 (빨간→초록 전 대기 중인지 확인)

// 최초 상태: 빨간 화면 + "클릭하여 시작"
testArea.innerText = "클릭하여 시작";
testArea.className = "red";

// [1] 클릭 이벤트 메인 로직
testArea.addEventListener("click", () => {
    // A. 초록 화면(대기) 상태라면(= isWaiting === true, 이미 green):
    if (isWaiting) {
        // ---- 초록색 화면 클릭 시, 반응 시간 측정 ----
        endTime = Date.now();
        const reactionTime = endTime - startTime; // ms
        reactionTimes.push(reactionTime);

        testCount++;
        const log = document.createElement("p");
        log.innerText = `반응 시간 : ${reactionTime}ms`;
        result.appendChild(log);

        // 대기 상태 해제
        isWaiting = false;

        // 5회 미만이면 다시 "클릭하여 다시 시작"
        if (testCount < 5) {
            testArea.innerText = "클릭하여 다시 시작";
            testArea.className = "ready";
        } else {
            // To do 1.
            // 5회 완료 시 평균값 출력
            // reactionTimes 배열에 들어있는 값에 대한 평균 계산
            // 평균 값을 result div에 출력
            // 재시작 이전에는 버튼 클릭이 안 되도록 구현
            // 문구 = "테스트 완료"
            //        "재시작 하려면 아래 리셋 버튼을 누르세요"
        }
        return;
    }

    // B. 빨간 화면 상태에서 클릭 시 로직
    if (testArea.classList.contains("red")) {
        if (waitingTimeout) {
            clearTimeout(waitingTimeout);
            // To do 3.
            // setTimeout이 끝나지 않은 상태라면 (초록색 화면으로 바뀌기 전)
            // 강의 자료의 회색 화면과 같은 화면 출력 되도록 구현
            // 여기서는 testCount나 reactionTimes를 건드리지 않음 (누적 유지)
        } else {
            // B-2. 클릭하여 "기다리세요..." + 랜덤 딜레이 후 초록색 전환
            startWaiting();
        }
        return;
    }

    // C. "클릭하여 다시 시작"(ready) 상태에서 클릭 시 → 다시 대기 시작
    if (testArea.classList.contains("ready")) {
        startWaiting();
    }
});

// [2] 랜덤 딜레이 후 초록 화면으로 바꾸는 함수
function startWaiting() {
    testArea.innerText = "기다리세요...";
    testArea.className = "red"; // 색상은 그대로 빨간 상태 유지
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; // 1~5초 사이

    // To do 2.
    // setTimeout 함수를 활용하여 waitingTimeout 변수 비동기 처리
    // Delay 시간은 함수 내부의 randomDelay 변수 값 활용
    // 텍스트는 강의 자료의 녹색 화면과 같이 구현
}

// [3] 리셋 버튼
resetButton.addEventListener("click", () => {
    // 완전 초기화
    testArea.innerText = "클릭하여 시작";
    testArea.className = "red";
    testArea.style.pointerEvents = "auto";
    result.innerText = "";

    reactionTimes = [];
    isWaiting = false;
    testCount = 0;

    if (waitingTimeout) {
        clearTimeout(waitingTimeout);
        waitingTimeout = null;
    }
});
