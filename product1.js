// Responsive Resolution Toggle for Product Page
const desktopBtn = document.getElementById('desktop-btn');
const tabletBtn = document.getElementById('tablet-btn');
const mobileBtn = document.getElementById('mobile-btn');
const contentContainer = document.getElementById('content-container');
const resolutionIndicator = document.getElementById('resolution-indicator');

// Update the indicator text
function updateResolutionIndicator(resolution) {
  if (!resolutionIndicator) return;
  if (resolution === 'desktop') {
    resolutionIndicator.textContent = '';
  } else if (resolution === 'tablet') {
    resolutionIndicator.textContent = 'Tablet mode is active';
  } else if (resolution === 'mobile') {
    resolutionIndicator.textContent = 'Mobile mode is active';
  }
}

// Change the layout mode
function changeResolution(resolution) {
  // Remove active class from all buttons
  desktopBtn.classList.remove('active');
  tabletBtn.classList.remove('active');
  mobileBtn.classList.remove('active');

  // Add active class to the selected button
  if (resolution === 'desktop') {
    desktopBtn.classList.add('active');
    // Remove tablet and mobile classes from content container
    contentContainer.className = 'content-container';
    document.body.classList.remove('mobile-view');
  } else if (resolution === 'tablet') {
    tabletBtn.classList.add('active');
    // Remove desktop and mobile classes from content container
    contentContainer.className = 'content-container tablet';
    document.body.classList.remove('mobile-view');
  } else if (resolution === 'mobile') {
    mobileBtn.classList.add('active');
    // Remove desktop and tablet classes from content container
    contentContainer.className = 'content-container mobile';
    document.body.classList.add('mobile-view');
  }
  updateResolutionIndicator(resolution);
}

// Initialize: set correct mode on page load
window.addEventListener('DOMContentLoaded', function () {
  // Set mode based on screen width (optional)
  let initialMode = 'desktop';
  if (window.innerWidth <= 600) {
    initialMode = 'mobile';
  } else if (window.innerWidth <= 900) {
    initialMode = 'tablet';
  }
  changeResolution(initialMode);

  desktopBtn.addEventListener('click', function() {
    changeResolution('desktop');
  });
  tabletBtn.addEventListener('click', function() {
    changeResolution('tablet');
  });
  mobileBtn.addEventListener('click', function() {
    changeResolution('mobile');
  });
});

const cartIcon = document.querySelector('#cart-icon');
const cartCounter = document.createElement('span');
cartCounter.classList.add('cart-counter');
cartIcon.appendChild(cartCounter);

let cartItems = []; // Массив для хранения товаров в корзине
let totalPrice = 0; // Общая сумма заказа

// Функция обновления счетчика корзины
function updateCartCounter() {
    cartCounter.textContent = cartItems.length;
    cartCounter.style.display = cartItems.length > 0 ? 'inline-block' : 'none';
}

// Функция для обновления отображения корзины
function updateCartView() {
    const cartList = document.getElementById('modal-cart-items-list');
    cartList.innerHTML = ''; // Очищаем список товаров

    totalPrice = 0;
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.quantity} pcs. - $${item.price} 
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Delete</button>
        `;
        cartList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = `$${totalPrice.toFixed(2)}`;
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cartItems.splice(index, 1); // Удаляем товар из массива
    updateCartCounter(); // Обновляем счетчик корзины
    updateCartView(); // Обновляем отображение корзины
}

// Функция для добавления товара в корзину
document.getElementById('confirm-order').addEventListener('click', function() {
    const productName = document.getElementById('modal-product-name').innerText;
    const productPrice = parseFloat(document.getElementById('modal-product-price').innerText.replace('$', ''));
    const quantity = parseInt(document.getElementById('quantity').value);

    // Добавляем товар в корзину
    cartItems.push({
        name: productName,
        price: productPrice,
        quantity: quantity
    });

    // Обновляем счетчик корзины
    updateCartCounter();

    // Закрываем модальное окно добавления в корзину
    const cartModalAdd = bootstrap.Modal.getInstance(document.getElementById('cart-modal-add'));
    cartModalAdd.hide();
    
    // Обновляем корзину и показываем модальное окно корзины
    updateCartView();
    const cartModalView = new bootstrap.Modal(document.getElementById('cart-modal-view'));
    cartModalView.show();
});

// Открытие корзины при клике на иконку
cartIcon.addEventListener('click', function() {
    // Заполняем модальное окно содержимым корзины
    updateCartView();

    const cartModalView = new bootstrap.Modal(document.getElementById('cart-modal-view'));
    cartModalView.show();
});

// Обработчик для кнопки "Перейти к оплате"
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Pay');
});

// Получаем кнопку "Добавить в заказ"
const addToCartButton = document.getElementById('add-to-cart-btn');

// Обработчик события для кнопки "Добавить в заказ"
addToCartButton.addEventListener('click', function() {
    // Получаем модальное окно для добавления в корзину
    const cartModalAdd = new bootstrap.Modal(document.getElementById('cart-modal-add'));
    
    // Показываем модальное окно
    cartModalAdd.show();
});
