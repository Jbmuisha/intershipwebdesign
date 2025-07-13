const desktopBtn = document.getElementById('desktop-btn');
const tabletBtn = document.getElementById('tablet-btn');
const mobileBtn = document.getElementById('mobile-btn');
const contentContainer = document.getElementById('content-container');
const footer = document.querySelector('.footer');

function changeResolution(resolution) {
  desktopBtn.classList.remove('active');
  tabletBtn.classList.remove('active');
  mobileBtn.classList.remove('active');

  // Reset footer layout classes
  footer.classList.remove('flex-column', 'align-items-center', 'text-center');

  if (resolution === 'desktop') {
    desktopBtn.classList.add('active');
    contentContainer.className = 'content-container desktop';
  } else if (resolution === 'tablet') {
    tabletBtn.classList.add('active');
    contentContainer.className = 'content-container tablet';
  } else if (resolution === 'mobile') {
    mobileBtn.classList.add('active');
    contentContainer.className = 'content-container mobile';

    // Change footer to column layout on mobile
    footer.classList.add('flex-column', 'align-items-center', 'text-center');
  }
}

// Initial setup (optional: default to desktop)
changeResolution('desktop');

desktopBtn.addEventListener('click', () => changeResolution('desktop'));
tabletBtn.addEventListener('click', () => changeResolution('tablet'));
mobileBtn.addEventListener('click', () => changeResolution('mobile'));
