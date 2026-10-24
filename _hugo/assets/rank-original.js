(() => {
  const portrait = document.querySelector('.avatar-rank');
  const container = document.querySelector('[data-rank-animation]');
  if (!portrait || !container || !window.lottie) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return;
  const animation = lottie.loadAnimation({container, renderer:'svg', loop:false, autoplay:false, path:container.dataset.rankAnimation, rendererSettings:{preserveAspectRatio:'xMidYMid meet'}});
  animation.setSpeed(.65);
  let playing = false;
  const play = () => {
    if (playing || reduced.matches) return;
    playing = true;
    portrait.classList.add('rank-playing');
    animation.goToAndPlay(0, true);
  };
  animation.addEventListener('DOMLoaded', play);
  animation.addEventListener('complete', () => {
    portrait.classList.remove('rank-playing');
    playing = false;
  });
  animation.addEventListener('data_failed', () => portrait.classList.remove('rank-playing'));
  portrait.addEventListener('pointerenter', play);
  reduced.addEventListener('change', () => {
    if (reduced.matches) {animation.stop(); portrait.classList.remove('rank-playing'); playing=false;}
  });
})();
