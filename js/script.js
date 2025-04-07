window.addEventListener("load", () => {
  // hover하면 article의 영상 재생되게하기
  const video = document.querySelector(".article-video");
  const article = document.querySelectorAll(".article");
  const iframe = document.querySelector(".article > iframe");

  article.forEach((article) => {
    article.addEventListener("mouseenter", (e) => {
      e.currentTarget.querySelector("video").play();
    });

    article.addEventListener("mouseleave", (e) => {
      const video = e.currentTarget.querySelector("video");

      video.currentTime = 0;
      video.pause();
    });
  });

  //aboutme나 works 누르면 그 내용 있는 곳으로 스크롤 이동

  //article 누르면 그 페이지로 이동
});
