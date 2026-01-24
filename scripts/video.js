document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = [].slice.call(
    document.querySelectorAll("video.lazy-video"),
  );

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(function (
      entries,
      observer,
    ) {
      entries.forEach(function (video) {
        if (video.isIntersecting) {
          for (const source in video.target.children) {
            const videoSource = video.target.children[source];
            if (
              typeof videoSource.tagName === "string" &&
              videoSource.tagName === "SOURCE"
            ) {
              videoSource.src = videoSource.dataset.src;
            }
          }
          video.target.load();
          video.target.classList.remove("lazy-video");
          videoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function (lazyVideo) {
      videoObserver.observe(lazyVideo);
    });
  }
});
