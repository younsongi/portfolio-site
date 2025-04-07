window.addEventListener("load", () => {
  const projects = document.querySelectorAll(".projectproposal"); // 여러 개의 .projectproposal 요소를 선택
  const html = document.querySelector("html"); // html 요소 선택
  const body = document.querySelector("body"); // body 요소 선택
  const article = document.querySelector(".projectproposal > article");
  const img = document.querySelector(".projectproposal > article > img");
  const close = document.querySelector(".projectproposal .close");
  // const wrap = document.querySelector(".wrap");

  // html과 body에서 overflow-y: hidden; 스타일 추가
  html.style.overflowY = "hidden";
  // body.style.overflowY = "hidden";

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      // 'active' 클래스 추가
      project.classList.add("active");
      close.addEventListener("click", (event) => {
        event.stopPropagation(); // 클릭 이벤트가 부모로 전파되지 않도록 방지
        // 프로젝트 닫기 시 처리
      });

      // html과 body에서 overflow-y: hidden; 스타일 제거
      html.style.overflowY = "";
      // body.style.overflowY = "";
      // wrap.style.overflow = "";

      // article.style.paddingLeft = "400px";
      // img.style.marginLeft = "500px";
    });

    close.addEventListener("click", () => {
      // 'active' 클래스 제거
      project.classList.remove("active");

      // html과 body에서 overflow-y: hidden; 스타일 추가
      html.style.overflowY = "hidden";
      // body.style.overflowY = "hidden";
      // article.style.paddingLeft = "";
      // img.style.marginLeft = "25px";
    });
  });

  // play 아이콘 누르면 동영상 모달창 뜨면서 재생
  const modal = document.querySelector("#modal");
  const play = document.querySelector(".main > img.play");
  const video = document.querySelector(".modal-inner > video");
  const closemodal = document.querySelector(".modal-inner > img");

  play.addEventListener("click", () => {
    modal.classList.add("active");
    // video.play();
  });

  closemodal.addEventListener("click", () => {
    modal.classList.remove("active");
    // video.pause();
  });
  //

  // < 아이콘 누르면 전 화면으로 돌아감
  const back = document.querySelector(".chevron");

  back.addEventListener("click", () => {
    window.history.back();
  });
});
