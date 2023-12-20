import { generarNieve, checkMonth } from "../usecases/index";

export const renderHome = (element) => {
  element.innerHTML = `
  <div class="nieve"></div>
  <div>
    <video
      class="video-1"
      src="./public/assets/video/video2.mp4"
      muted
      autoplay
    ></video>

    <div class="vd"></div>
  </div>

  <div class="primer">
    <div>
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="titulo mb-5">HARRY POTTER</h1>
        <div class="position-absolute top-50 start-50 translate-middle mt-5">
          <button id="play" type="button" class="btn btn-outline-light">
            Jugar
          </button>
        </div>
      </div>
    </div>
  </div>`;
  if (!checkMonth()) {
    main.classList.replace("chrismas", "normal");
} else {
    generarNieve();
}
};
