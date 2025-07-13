const desktopBtn = document.getElementById('desktop-btn');
const tabletBtn = document.getElementById('tablet-btn');
const mobileBtn = document.getElementById('mobile-btn');
const contentContainer = document.getElementById('content-container');

function changeResolution(resolution) {
  desktopBtn.classList.remove('active');
  tabletBtn.classList.remove('active');
  mobileBtn.classList.remove('active');

  if (resolution === 'desktop') {
    desktopBtn.classList.add('active');
    contentContainer.className = 'content-container';
  } else if (resolution === 'tablet') {
    tabletBtn.classList.add('active');
    contentContainer.className = 'content-container tablet';
  } else if (resolution === 'mobile') {
    mobileBtn.classList.add('active');
    contentContainer.className = 'content-container mobile';
  }
}

desktopBtn.addEventListener('click', () => changeResolution('desktop'));
tabletBtn.addEventListener('click', () => changeResolution('tablet'));
mobileBtn.addEventListener('click', () => changeResolution('mobile'));
// Lazy Loading
