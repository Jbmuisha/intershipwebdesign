const desktopBtn = document.getElementById('desktop-btn');
const tabletBtn = document.getElementById('tablet-btn');
const mobileBtn = document.getElementById('mobile-btn');
const contentContainer = document.getElementById('content-container');
const scrollContainer = document.querySelector('.scroll-container');
const footer = document.querySelector('footer');
const banner = document.querySelector('.banner');

// Function to change layout resolution
function changeResolution(resolution) {
  // Reset active buttons
  desktopBtn.classList.remove('active');
  tabletBtn.classList.remove('active');
  mobileBtn.classList.remove('active');

  // Reset scroll layout and footer layout
  scrollContainer.classList.remove('force-mobile-columns');
  footer.classList.remove('force-mobile-footer');

  // Remove mobile/tablet class
  contentContainer.className = 'content-container';

  // Apply resolution-specific styles
  if (resolution === 'desktop') {
    desktopBtn.classList.add('active');
    banner.style.height = '200px'; // Reset banner height
  } else if (resolution === 'tablet') {
    tabletBtn.classList.add('active');
    contentContainer.classList.add('tablet');
    banner.style.height = '180px';
  } else if (resolution === 'mobile') {
    mobileBtn.classList.add('active');
    contentContainer.classList.add('mobile');
    scrollContainer.classList.add('force-mobile-columns');
    footer.classList.add('force-mobile-footer');
    banner.style.height = '120px'; // Shrink banner on mobile
  }
}

// Attach resolution change events
desktopBtn.addEventListener('click', () => changeResolution('desktop'));
tabletBtn.addEventListener('click', () => changeResolution('tablet'));
mobileBtn.addEventListener('click', () => changeResolution('mobile'));

// Page switching with fade animation
function changePage(page) {
  let page1Items = document.querySelectorAll('.page1');
  let page2Items = document.querySelectorAll('.page2');
  const scrollItems = document.querySelector('.scroll-items');

  // Fade out old items
  scrollItems.style.opacity = "0";

  setTimeout(() => {
    if (page === 1) {
      page1Items.forEach(item => item.classList.remove('hidden'));
      page2Items.forEach(item => item.classList.add('hidden'));
    } else if (page === 2) {
      page1Items.forEach(item => item.classList.add('hidden'));
      page2Items.forEach(item => item.classList.remove('hidden'));
    }

    // Fade in new items
    scrollItems.style.opacity = "1";
  }, 500);

  // Highlight active page button
  document.querySelectorAll('.page').forEach(el => {
    el.style.fontWeight = 'normal';
    el.style.backgroundColor = 'transparent';
    el.style.color = '#800000';
  });

  let activePage = document.querySelector(`.page:nth-child(${page})`);
  activePage.style.fontWeight = 'bold';
  activePage.style.backgroundColor = '#800000';
  activePage.style.color = 'white';
}
