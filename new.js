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

// Navbar toggler logic for forced mobile mode
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.addEventListener('click', function (e) {
  // Handle toggler click in mobile mode
  if (navbarToggler && navbarCollapse && contentContainer.classList.contains('mobile')) {
    if (e.target === navbarToggler || navbarToggler.contains(e.target)) {
      navbarCollapse.classList.toggle('show');
      // Prevent default Bootstrap toggler
      e.preventDefault();
      e.stopPropagation();
    } else if (!navbarCollapse.contains(e.target)) {
      navbarCollapse.classList.remove('show');
    }
  }
});

// When switching resolution, always close the menu
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
  // Always close the menu on resolution change
  if (navbarCollapse) navbarCollapse.classList.remove('show');
}

