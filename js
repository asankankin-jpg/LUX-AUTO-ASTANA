const carData = {
    // Toyota
    "Toyota Camry 2.5 AT": ["200 л.с.", "8.7 сек", "210 км/ч", "2.5л Бензин", "АКПП 8", "Передний", "6.8 л", "Седан"],
    "Toyota Corolla 1.6 MT": ["122 л.с.", "11.0 сек", "190 км/ч", "1.6л Бензин", "Механика", "Передний", "6.4 л", "Седан"],
    "Toyota RAV4 AWD": ["199 л.с.", "8.5 сек", "190 км/ч", "2.5л Бензин", "Вариатор", "Полный", "7.3 л", "Кроссовер"],
    "Toyota Land Cruiser 300": ["299 л.с.", "6.9 сек", "210 км/ч", "3.3л Дизель", "АКПП 10", "Полный", "8.9 л", "Внедорожник"],
    "Toyota Land Cruiser Prado": ["204 л.с.", "9.9 сек", "175 км/ч", "2.8л Дизель", "АКПП 6", "Полный", "7.9 л", "Внедорожник"],
    "Toyota Highlander": ["249 л.с.", "8.5 сек", "180 км/ч", "3.5л Бензин", "АКПП 8", "Полный", "9.4 л", "SUV"],
    "Toyota Yaris": ["116 л.с.", "9.7 сек", "175 км/ч", "1.5л Гибрид", "e-CVT", "Передний", "3.1 л", "Хэтчбек"],
    "Toyota Supra GR": ["340 л.с.", "4.3 сек", "250 км/ч", "3.0л Турбо", "АКПП 8", "Задний", "7.5 л", "Купе"],
    "Toyota Hilux": ["204 л.с.", "10.1 сек", "175 км/ч", "2.8л Дизель", "АКПП 6", "Полный", "8.0 л", "Пикап"],
    "Toyota Avensis": ["147 л.с.", "9.4 сек", "200 км/ч", "1.8л Бензин", "Вариатор", "Передний", "6.0 л", "Седан"],
    // BMW
    "BMW X5 xDrive40i": ["340 л.с.", "5.5 сек", "243 км/ч", "3.0л", "АКПП 8", "Полный", "9.1 л", "Кроссовер"],
    "BMW X3 30i": ["249 л.с.", "6.3 сек", "240 км/ч", "2.0л", "АКПП 8", "Полный", "7.6 л", "Кроссовер"],
    "BMW M3 Competition": ["510 л.с.", "3.9 сек", "290 км/ч", "3.0л", "АКПП 8", "Задний", "10.2 л", "Спорт"],
    "BMW M5": ["600 л.с.", "3.4 сек", "305 км/ч", "4.4л", "АКПП 8", "Полный", "10.5 л", "Седан"],
    "BMW 3 Series 320i": ["184 л.с.", "7.1 сек", "235 км/ч", "2.0л", "АКПП 8", "Задний", "6.3 л", "Седан"],
    "BMW 5 Series 530i": ["252 л.с.", "6.4 сек", "250 км/ч", "2.0л", "АКПП 8", "Полный", "6.7 л", "Седан"],
    "BMW 7 Series 740i": ["381 л.с.", "5.4 сек", "250 км/ч", "3.0л", "АКПП 8", "Задний", "7.0 л", "Люкс"],
    "BMW Z4 Roadster": ["197 л.с.", "6.6 сек", "240 км/ч", "2.0л", "АКПП 8", "Задний", "6.1 л", "Кабрио"],
    "BMW i4 Electric": ["340 л.с.", "5.7 сек", "190 км/ч", "Электро", "Редуктор", "Задний", "16 кВт", "Купе"],
    "BMW i7 Electric": ["544 л.с.", "4.7 сек", "240 км/ч", "Электро", "Редуктор", "Полный", "18 кВт", "Люкс"],
    // Mercedes
    "Mercedes C-Class C200": ["204 л.с.", "7.3 сек", "246 км/ч", "1.5л", "9G", "Задний", "6.6 л", "Седан"],
    "Mercedes E-Class E300": ["258 л.с.", "6.2 сек", "250 км/ч", "2.0л", "9G", "Задний", "7.1 л", "Седан"],
    "Mercedes S-Class S500": ["435 л.с.", "4.9 сек", "250 км/ч", "3.0л", "9G", "Полный", "8.4 л", "Люкс"],
    "Mercedes G-Class G63": ["585 л.с.", "4.5 сек", "220 км/ч", "4.0л", "9G", "Полный", "13.1 л", "Джип"],
    "Mercedes GLC 300": ["258 л.с.", "6.2 сек", "240 км/ч", "2.0л", "9G", "Полный", "7.5 л", "Кросс"],
    "Mercedes GLE 450": ["367 л.с.", "5.7 сек", "250 км/ч", "3.0л", "9G", "Полный", "9.4 л", "SUV"],
    "Mercedes CLS 350": ["299 л.с.", "6.0 сек", "250 км/ч", "2.0л", "9G", "Полный", "7.8 л", "Купе"],
    "Mercedes AMG GT": ["530 л.с.", "3.8 сек", "312 км/ч", "4.0л", "Робот", "Задний", "12.5 л", "Спорт"],
    "Mercedes EQS Electric": ["333 л.с.", "6.2 сек", "210 км/ч", "Электро", "Редуктор", "Задний", "15 кВт", "Люкс"],
    "Mercedes Vito": ["163 л.с.", "12.1 сек", "188 км/ч", "2.1л", "9G", "Задний", "7.3 л", "Вэн"],
    // Audi
    "Audi A4 40 TFSI": ["190 л.с.", "7.3 сек", "240 км/ч", "2.0л", "S-Tronic", "Передний", "5.8 л", "Седан"],
    "Audi A6 45 TFSI": ["245 л.с.", "6.0 сек", "250 км/ч", "2.0л", "S-Tronic", "Полный", "7.0 л", "Седан"],
    "Audi A8 L": ["340 л.с.", "5.7 сек", "250 км/ч", "3.0л", "Tiptronic", "Полный", "8.2 л", "Люкс"],
    "Audi Q3": ["150 л.с.", "9.2 сек", "207 км/ч", "1.4л", "S-Tronic", "Передний", "6.0 л", "Кросс"],
    "Audi Q5": ["249 л.с.", "6.3 сек", "240 км/ч", "2.0л", "S-Tronic", "Полный", "7.2 л", "Кросс"],
    "Audi Q7": ["249 л.с.", "6.9 сек", "225 км/ч", "3.0л", "Tiptronic", "Полный", "8.0 л", "SUV"],
    "Audi Q8": ["340 л.с.", "5.9 сек", "250 км/ч", "3.0л", "Tiptronic", "Полный", "9.1 л", "SUV"],
    "Audi RS6 Avant": ["600 л.с.", "3.6 сек", "305 км/ч", "4.0л", "Tiptronic", "Полный", "12.3 л", "Универсал"],
    "Audi TT": ["245 л.с.", "5.2 сек", "250 км/ч", "2.0л", "S-Tronic", "Полный", "7.0 л", "Купе"],
    "Audi e-tron": ["408 л.с.", "5.7 сек", "200 км/ч", "Электро", "Редуктор", "Полный", "22 кВт", "Электро"]
};

let currentPrice = 0, currentCar = "";
const labels = ["Мощность", "0-100", "Макс. скорость", "Двигатель", "Трансмиссия", "Привод", "Расход", "Кузов"];

// Открытие модалки с характеристиками
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy')) {
        const card = e.target.closest('.car');
        currentCar = card.querySelector('h3').innerText;
        currentPrice = parseInt(card.querySelector('.price').innerText.replace(/\D/g, ''));
        
        const s = carData[currentCar] || Array(8).fill("-");
        let pills = '<div class="specs-container">';
        s.forEach((v, i) => pills += `<div class="spec-pill"><small>${labels[i]}</small><b>${v}</b></div>`);
        pills += '</div>';

        document.getElementById("modalBody").innerHTML = `
            <img src="${card.querySelector('img').src}" style="width:100%; border-radius:15px; height:220px; object-fit:cover;">
            <h2 style="margin:20px 0 5px;">${currentCar}</h2>
            <div style="color:#007bff; font-weight:800; font-size:24px;">${currentPrice.toLocaleString()} ₸</div>
            ${pills}
        `;
        updateCalc();
        document.getElementById("carModal").style.display = "block";
    }
});

// Кредитный калькулятор
function updateCalc() {
    let dp = document.getElementById('dpR').value, t = document.getElementById('termR').value;
    document.getElementById('dpV').innerText = dp+'%';
    document.getElementById('termV').innerText = t+' мес';
    let principal = currentPrice * (1 - dp/100);
    let monthly = (principal * (0.14/12)) / (1 - Math.pow(1 + 0.14/12, -t));
    document.getElementById('monthlyP').innerText = Math.round(monthly).toLocaleString() + ' ₸';
}

document.getElementById('dpR').oninput = updateCalc;
document.getElementById('termR').oninput = updateCalc;

// Работа с формами
function openOrderForm() {
    document.getElementById("carModal").style.display = "none";
    document.getElementById("orderCarTitle").innerText = currentCar;
    document.getElementById("orderFormModal").style.display = "block";
}

function finalSubmit() {
    const name = document.getElementById('uName').value;
    const phone = document.getElementById('uPhone').value;
    if(!name || !phone) return alert("Пожалуйста, заполните данные для связи");

    const order = {
        date: new Date().toLocaleString(),
        car: currentCar,
        price: currentPrice,
        customer: name,
        phone: phone
    };

    let orders = JSON.parse(localStorage.getItem('orders') || "[]");
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert("Заявка отправлена менеджеру! Мы свяжемся с вами в ближайшее время.");
    document.getElementById("orderFormModal").style.display = "none";
}

// Фильтры и поиск
document.getElementById('carSearch').oninput = function() {
    let v = this.value.toLowerCase();
    document.querySelectorAll('.car').forEach(c => {
        c.style.display = c.querySelector('h3').innerText.toLowerCase().includes(v) ? "block" : "none";
    });
};

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        let f = btn.dataset.filter;
        document.querySelectorAll('.brand').forEach(br => {
            br.style.display = (f === 'all' || br.dataset.brand === f) ? "block" : "none";
        });
    };
});

// Закрытие модалок
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
    }
};
document.getElementById("closeSpecs").onclick = () => document.getElementById("carModal").style.display = "none";
document.getElementById("closeOrder").onclick = () => document.getElementById("orderFormModal").style.display = "none";
