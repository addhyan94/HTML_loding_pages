let chk = document.querySelector('.checky');
let bdr = document.querySelector('.checkyborder');

function startAnimation() {
  let angle = 0;

  function animate() {
    angle = (angle + 1) % 360;
    bdr.style.setProperty('--angle', `${angle}deg`);
    requestAnimationFrame(animate);
  }

  animate();
}

window.addEventListener('load', function() {
  if (chk.checked) {
    startAnimation();
  }
});

chk.addEventListener('click', function() {
	bdr.classList.toggle('ischecked');
  if (chk.checked) {
    	startAnimation();
  } else {
    bdr.classList.remove('ischecked');
  }
});