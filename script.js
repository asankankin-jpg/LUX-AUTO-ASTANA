const carData = {
    "Toyota Camry 2.5 AT": ["200 л.с.", "АКПП", "Бензин", "Передний привод"],
    "Toyota Corolla 1.6 MT": ["122 л.с.", "Механика", "Бензин", "Экономичный"],
    "Toyota RAV4 AWD": ["199 л.с.", "Вариатор", "Полный привод", "Кроссовер"],
    "Toyota Land Cruiser 300": ["299 л.с.", "Дизель V6", "Полный привод", "Люкс"],
    "Toyota Land Cruiser Prado": ["204 л.с.", "Рамный", "Дизель", "Внедорожник"],
    "Toyota Highlander": ["249 л.с.", "7 мест", "Полный привод", "Семейный"],
    "Toyota Yaris": ["116 л.с.", "Гибрид", "Хэтчбек", "Городской"],
    "Toyota Supra GR": ["340 л.с.", "Спорт", "Задний привод", "0-100: 4.3с"],
    "Toyota Hilux": ["204 л.с.", "Пикап", "Дизель", "Грузовой"],
    "Toyota Avensis": ["147 л.с.", "Седан", "Бензин", "Надежный"],
    "BMW X5 xDrive40i": ["340 л.с.", "B58 мотор", "Пневмо", "Полный привод"],
    "BMW X3 30i": ["249 л.с.", "xDrive", "Бензин", "Динамичный"],
    "BMW M3 Competition": ["510 л.с.", "M-Power", "Спорт", "Легенда"],
    "BMW M5": ["600 л.с.", "V8 BiTurbo", "305 км/ч", "Бизнес-ракета"],
    "BMW 3 Series 320i": ["184 л.с.", "Задний привод", "Классика", "Управляемость"],
    "BMW 5 Series 530i": ["252 л.с.", "Бизнес", "Полный привод", "Комфорт"],
    "BMW 7 Series 740i": ["381 л.с.", "Люкс", "Пневмо", "Флагман"],
    "BMW Z4 Roadster": ["197 л.с.", "Родстер", "Кабриолет", "Лето"],
    "BMW i4 Electric": ["340 л.с.", "Электро", "590 км запас", "Тихий"],
    "BMW i7 Electric": ["544 л.с.", "Электро-люкс", "625 км запас", "VIP"],
    "Mercedes C-Class C200": ["204 л.с.", "MBUX", "Мягкий гибрид", "Стиль"],
    "Mercedes E-Class E300": ["258 л.с.", "Бизнес", "9G-Tronic", "Премиум"],
    "Mercedes S-Class S500": ["435 л.с.", "S-Class", "Массаж", "Лучший"],
    "Mercedes G-Class G63": ["585 л.с.", "Гелендваген", "V8", "Мощь"],
    "Mercedes GLC 300": ["258 л.с.", "SUV", "4MATIC", "Надежный"],
    "Mercedes GLE 450": ["367 л.с.", "Пневмо", "Панорама", "Статус"],
    "Mercedes CLS 350": ["299 л.с.", "Купе-седан", "Дизайн", "Безрамочный"],
    "Mercedes AMG GT": ["530 л.с.", "V8", "Спорткар", "AMG"],
    "Mercedes EQS Electric": ["333 л.с.", "Электро", "770 км запас", "Будущее"],
    "Mercedes Vito": ["163 л.с.", "Дизель", "Минивэн", "8 мест"],
    "Audi A4 40 TFSI": ["190 л.с.", "Quattro", "S-Tronic", "Классика"],
    "Audi A6 45 TFSI": ["245 л.с.", "Бизнес", "Quattro", "Virtual Cockpit"],
    "Audi A8 L": ["340 л.с.", "Long", "Люкс", "Матричные фары"],
    "Audi Q3": ["150 л.с.", "Кроссовер", "Город", "Стиль"],
    "Audi Q5": ["249 л.с.", "Quattro Ultra", "SUV", "Бестселлер"],
    "Audi Q7": ["249 л.с.", "V6 Diesel", "7 мест", "Семейный"],
    "Audi Q8": ["340 л.с.", "Купе-SUV", "Статус", "OLED"],
    "Audi RS6 Avant": ["600 л.с.", "V8", "Универсал", "0-100: 3.6с"],
    "Audi TT": ["245 л.с.", "Купе", "Спорт", "Легкий"],
    "Audi e-tron": ["408 л.с.", "Электро", "Полный привод", "Инновации"]
};

// Модальное окно
const modal = document.getElementById("carModal");
const modalBody = document.getElementById("modalBody");

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy') && !e.target.hasAttribute('onclick')) {
        const carCard = e.target.closest('.car');
        const name = carCard.querySelector('h3').innerText;
        const price = carCard.querySelector('.price').innerText;
        const imgSrc = carCard.querySelector('img').src;
        const specs = carData[name] || ["Нет данных"];

        let specsHtml = '<ul class="specs-list">';
        specs.forEach((spec, i) => specsHtml += `<li><b>Параметр ${i+1}:</b> ${spec}</li>`);
        specsHtml += '</ul>';

        modalBody.innerHTML = `
            <img src="${imgSrc}" style="width:100%">
            <h2>${name}</h2>
            <p>Цена: ${price}</p>
            ${specsHtml}
            <button class="buy" onclick="confirmOrder('${name}', '${price}')">Заказать</button>
        `;
        modal.style.display = "block";
    }
});

function confirmOrder(name, price) {
    const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
    purchases.push({ car: name, price: price, date: new Date().toLocaleString() });
    localStorage.setItem('purchases', JSON.stringify(purchases));
    alert('Заказ оформлен!');
    modal.style.display = "none";
}

// Поиск
const searchInput = document.getElementById('carSearch');
if(searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.car').forEach(car => {
            const name = car.querySelector('h3').innerText.toLowerCase();
            car.style.display = name.includes(query) ? "block" : "none";
        });
    });
}

// Фильтр
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.filter;
        document.querySelectorAll('.brand').forEach(brand => {
            const bName = brand.querySelector('h2').innerText;
            brand.style.display = (val === 'all' || bName === val) ? "block" : "none";
        });
    });
});

window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
