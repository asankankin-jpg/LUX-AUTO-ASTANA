const carData = {
    "Toyota": [
        { name: "Toyota Camry 75", price: 18500000, img: "images/toyota_camry.jpg", year: "2023", hp: "249 л.с.", engine: "3.5L V6", drive: "Передний", trans: "АКПП", accel: "7.7 сек" },
        { name: "Toyota Land Cruiser 300", price: 58000000, img: "images/toyota_landcruiser.jpg", year: "2024", hp: "415 л.с.", engine: "3.5L V6 Twin-Turbo", drive: "Полный 4WD", trans: "10-АКПП", accel: "6.8 сек" },
        { name: "Toyota LC Prado 150", price: 34000000, img: "images/toyota_prado.jpg", year: "2022", hp: "282 л.с.", engine: "4.0L V6", drive: "Полный 4WD", trans: "6-АКПП", accel: "8.8 сек" },
        { name: "Toyota RAV4", price: 21500000, img: "images/toyota_rav4.jpg", year: "2023", hp: "199 л.с.", engine: "2.5L I4", drive: "Полный AWD", trans: "Вариатор", accel: "8.5 сек" },
        { name: "Toyota Highlander", price: 36000000, img: "images/toyota_highlander.jpg", year: "2023", hp: "295 л.с.", engine: "3.5L V6", drive: "Полный AWD", trans: "8-АКПП", accel: "7.5 сек" },
        { name: "Toyota Corolla", price: 13000000, img: "images/toyota_corolla.jpg", year: "2023", hp: "140 л.с.", engine: "1.8L", drive: "Передний", trans: "Вариатор", accel: "10.2 сек" },
        { name: "Toyota GR Supra", price: 46000000, img: "images/toyota_supra.jpg", year: "2022", hp: "340 л.с.", engine: "3.0L Turbo", drive: "Задний", trans: "8-АКПП", accel: "4.3 сек" },
        { name: "Toyota Hilux", price: 24500000, img: "images/toyota_hilux.jpg", year: "2023", hp: "150 л.с.", engine: "2.4L Diesel", drive: "Полный 4WD", trans: "МКПП/АКПП", accel: "12.0 сек" },
        { name: "Toyota Yaris", price: 11000000, img: "images/toyota_yaris.jpg", year: "2023", hp: "116 л.с.", engine: "1.5L Hybrid", drive: "Передний", trans: "E-CVT", accel: "9.7 сек" },
        { name: "Toyota Avensis", price: 9000000, img: "images/toyota_avensis.jpg", year: "2018", hp: "147 л.с.", engine: "2.0L", drive: "Передний", trans: "Вариатор", accel: "10.0 сек" }
    ],
    "BMW": [
        { name: "BMW X5 M-Package", price: 49500000, img: "images/bmw_x5.jpg", year: "2023", hp: "340 л.с.", engine: "3.0L B58", drive: "xDrive (Полный)", trans: "8-ZF", accel: "5.5 сек" },
        { name: "BMW M5 CS", price: 78000000, img: "images/bmw_m5.jpg", year: "2022", hp: "635 л.с.", engine: "4.4L V8 M-TwinTurbo", drive: "M xDrive", trans: "8-ZF M", accel: "3.0 сек" },
        { name: "BMW 7 Series G70", price: 68000000, img: "images/bmw_7.jpg", year: "2024", hp: "381 л.с.", engine: "3.0L I6 Mild-Hybrid", drive: "xDrive", trans: "8-ZF", accel: "5.4 сек" },
        { name: "BMW X7 M60i", price: 62000000, img: "images/bmw_x7.jpg", year: "2023", hp: "530 л.с.", engine: "4.4L V8", drive: "xDrive", trans: "8-ZF", accel: "4.7 сек" },
        { name: "BMW M3 Competition", price: 54000000, img: "images/bmw_m3.jpg", year: "2023", hp: "510 л.с.", engine: "3.0L TwinTurbo", drive: "M xDrive", trans: "8-ZF M", accel: "3.5 сек" },
        { name: "BMW 5 Series G30", price: 29500000, img: "images/bmw_5.jpg", year: "2023", hp: "252 л.с.", engine: "2.0L Turbo", drive: "xDrive", trans: "8-ZF", accel: "6.2 сек" },
        { name: "BMW 3 Series G20", price: 23000000, img: "images/bmw_3.jpg", year: "2023", hp: "184 л.с.", engine: "2.0L Turbo", drive: "Задний", trans: "8-ZF", accel: "7.1 сек" },
        { name: "BMW X3 xDrive", price: 27500000, img: "images/bmw_x3.jpg", year: "2023", hp: "249 л.с.", engine: "2.0L Turbo", drive: "xDrive", trans: "8-ZF", accel: "6.3 сек" },
        { name: "BMW i7 M70", price: 74000000, img: "images/bmw_i7.jpg", year: "2024", hp: "659 л.с.", engine: "Electric (101.7 kWh)", drive: "Полный", trans: "Редуктор", accel: "3.7 сек" },
        { name: "BMW Z4 Roadster", price: 39000000, img: "images/bmw_z4.jpg", year: "2022", hp: "340 л.с.", engine: "3.0L B58", drive: "Задний", trans: "8-ZF", accel: "4.5 сек" }
    ],
    "Mercedes": [
        { name: "Mercedes-AMG G63", price: 98000000, img: "images/mb_g.jpg", year: "2023", hp: "585 л.с.", engine: "4.0L V8 BiTurbo", drive: "4MATIC", trans: "9G-TRONIC", accel: "4.5 сек" },
        { name: "Mercedes S500 W223", price: 72000000, img: "images/mb_s.jpg", year: "2024", hp: "435 л.с.", engine: "3.0L EQ Boost", drive: "4MATIC", trans: "9G-TRONIC", accel: "4.9 сек" },
        { name: "Mercedes E-Class W213", price: 33500000, img: "images/mb_e.jpg", year: "2023", hp: "197 л.с.", engine: "2.0L I4", drive: "Задний/4MATIC", trans: "9G-TRONIC", accel: "7.5 сек" },
        { name: "Mercedes GLE 53 AMG", price: 47000000, img: "images/mb_gle.jpg", year: "2023", hp: "435 л.с.", engine: "3.0L Turbo Hybrid", drive: "4MATIC+", trans: "9G-SPEEDSHIFT", accel: "5.3 сек" },
        { name: "Mercedes-AMG GT Black", price: 120000000, img: "images/mb_amg.jpg", year: "2022", hp: "730 л.с.", engine: "4.0L V8 Flat-Plane", drive: "Задний", trans: "7G-DCT", accel: "3.2 сек" },
        { name: "Mercedes C-Class W206", price: 26500000, img: "images/mb_c.jpg", year: "2023", hp: "204 л.с.", engine: "1.5L Turbo Mild-Hybrid", drive: "4MATIC", trans: "9G-TRONIC", accel: "7.1 сек" },
        { name: "Mercedes GLC 300", price: 31000000, img: "images/mb_glc.jpg", year: "2023", hp: "258 л.с.", engine: "2.0L I4", drive: "4MATIC", trans: "9G-TRONIC", accel: "6.2 сек" },
        { name: "Mercedes EQS 580", price: 69000000, img: "images/mb_eqs.jpg", year: "2023", hp: "523 л.с.", engine: "Electric (107.8 kWh)", drive: "4MATIC", trans: "Редуктор", accel: "4.3 сек" },
        { name: "Mercedes CLS 450", price: 44000000, img: "images/mb_cls.jpg", year: "2022", hp: "367 л.с.", engine: "3.0L I6", drive: "4MATIC", trans: "9G-TRONIC", accel: "4.8 сек" },
        { name: "Mercedes V-Class Vito", price: 42000000, img: "images/mb_vito.jpg", year: "2023", hp: "190 л.с.", engine: "2.1L Diesel", drive: "Полный", trans: "7G-TRONIC", accel: "9.1 сек" }
    ],
    "Audi": [
        { name: "Audi RS6 Avant", price: 79500000, img: "images/audi_rs6.jpg", year: "2023", hp: "600 л.с.", engine: "4.0L V8 TFSI", drive: "quattro", trans: "8-Tiptronic", accel: "3.6 сек" },
        { name: "Audi Q8 S-line", price: 48000000, img: "images/audi_q8.jpg", year: "2023", hp: "340 л.с.", engine: "3.0L V6 TFSI", drive: "quattro", trans: "8-Tiptronic", accel: "5.9 сек" },
        { name: "Audi A8 L", price: 57000000, img: "images/audi_a8.jpg", year: "2023", hp: "340 л.с.", engine: "3.0L V6 TFSI", drive: "quattro", trans: "8-Tiptronic", accel: "5.7 сек" },
        { name: "Audi Q7 TFSI", price: 43500000, img: "images/audi_q7.jpg", year: "2023", hp: "249 л.с.", engine: "3.0L V6", drive: "quattro", trans: "8-Tiptronic", accel: "6.9 сек" },
        { name: "Audi e-tron GT", price: 64000000, img: "images/audi_e.jpg", year: "2023", hp: "476 л.с.", engine: "Dual Electric Motor", drive: "quattro", trans: "2-АКПП (зад)", accel: "4.1 сек" },
        { name: "Audi A6", price: 29000000, img: "images/audi_a6.jpg", year: "2023", hp: "245 л.с.", engine: "2.0L TFSI", drive: "quattro", trans: "7-S Tronic", accel: "6.0 сек" },
        { name: "Audi Q5", price: 25500000, img: "images/audi_q5.jpg", year: "2023", hp: "249 л.с.", engine: "2.0L TFSI", drive: "quattro", trans: "7-S Tronic", accel: "6.3 сек" },
        { name: "Audi A4", price: 19500000, img: "images/audi_a4.jpg", year: "2023", hp: "150 л.с.", engine: "2.0L TFSI", drive: "Передний", trans: "7-S Tronic", accel: "8.9 сек" },
        { name: "Audi Q3 Sportback", price: 21000000, img: "images/audi_q3.jpg", year: "2022", hp: "150 л.с.", engine: "1.4L TFSI", drive: "Передний", trans: "6-S Tronic", accel: "9.2 сек" },
        { name: "Audi TT RS", price: 42000000, img: "images/audi_tt.jpg", year: "2022", hp: "400 л.с.", engine: "2.5L I5 Turbo", drive: "quattro", trans: "7-S Tronic", accel: "3.7 сек" }
    ]
};

function renderCatalog(filter = 'all') {
    const main = document.getElementById('catalog');
    main.innerHTML = "";
    for (const brand in carData) {
        if (filter !== 'all' && brand !== filter) continue;
        let html = `<section class="brand"><h2>${brand}</h2><div class="cars">`;
        carData[brand].forEach(car => {
            html += `
                <div class="car">
                    <img src="${car.img}" onerror="this.src='https://via.placeholder.com/300x180?text=Auto'">
                    <h3>${car.name}</h3>
                    <p class="hp-info" style="color:#666; font-size:12px; margin-bottom:5px">${car.year} | ${car.engine} | ${car.hp}</p>
                    <p class="price">${car.price.toLocaleString()} ₸</p>
                    <button class="buy" onclick="openModal('${brand}', '${car.name}')">Подробнее</button>
                </div>`;
        });
        html += `</div></section>`;
        main.innerHTML += html;
    }
}

function filterCars(brand) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    if(event) event.target.classList.add('active');
    renderCatalog(brand);
}

function openModal(brand, name) {
    const car = carData[brand].find(c => c.name === name);
    const modal = document.getElementById('carModal');
    document.getElementById('modalBody').innerHTML = `
        <h2 style="margin-bottom:15px">${car.name}</h2>
        <p class="price" id="mPrice" data-val="${car.price}">${car.price.toLocaleString()} ₸</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
            <div class="spec-item"><b>Год:</b> ${car.year}</div>
            <div class="spec-item"><b>Мотор:</b> ${car.engine}</div>
            <div class="spec-item"><b>Мощность:</b> ${car.hp}</div>
            <div class="spec-item"><b>Привод:</b> ${car.drive}</div>
            <div class="spec-item"><b>КПП:</b> ${car.trans}</div>
            <div class="spec-item"><b>0-100 км/ч:</b> ${car.accel}</div>
        </div>

        <div style="background:#f9f9f9; padding:20px; border-radius:15px; margin-bottom:20px; color:#000">
            <h4 style="margin-bottom:15px">Кредитный калькулятор</h4>
            <div style="margin-bottom:15px">
                <label style="display:flex; justify-content:space-between; font-size:14px">Взнос: <span id="dV">30</span>%</label>
                <input type="range" id="dR" min="10" max="80" value="30" style="width:100%" oninput="updateCalc()">
            </div>
            <div style="margin-bottom:15px">
                <label style="display:flex; justify-content:space-between; font-size:14px">Срок: <span id="pV">36</span> мес.</label>
                <input type="range" id="pR" min="12" max="84" value="36" step="12" style="width:100%" oninput="updateCalc()">
            </div>
            <div style="background:#000; color:#fff; padding:15px; border-radius:10px; display:flex; justify-content:space-between; align-items:center">
                <span style="font-size:14px">Платеж в месяц:</span>
                <b id="mP" style="color:#007bff; font-size:20px">0 ₸</b>
            </div>
        </div>

        <div class="form-inputs">
            <input type="text" id="cName" placeholder="Ваше имя" style="width:100%; padding:12px; margin-bottom:10px; border:1px solid #ddd; border-radius:8px">
            <input type="tel" id="cPhone" placeholder="Телефон" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px">
            <button onclick="sendOrder('${car.name}')" style="width:100%; padding:15px; background:#007bff; color:#fff; border:none; border-radius:8px; font-weight:800; cursor:pointer">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
    `;
    modal.style.display = "block";
    updateCalc();
}

function updateCalc() {
    const price = parseInt(document.getElementById('mPrice').dataset.val);
    const dep = document.getElementById('dR').value;
    const months = document.getElementById('pR').value;
    document.getElementById('dV').innerText = dep;
    document.getElementById('pV').innerText = months;
    const loan = price * (1 - dep/100);
    const monthly = (loan / months) * 1.14; 
    document.getElementById('mP').innerText = Math.round(monthly).toLocaleString() + " ₸";
}

function closeModal() { document.getElementById('carModal').style.display = "none"; }

function sendOrder(car) {
    const n = document.getElementById('cName').value;
    const p = document.getElementById('cPhone').value;
    if(!n || !p) return alert("Заполните поля!");
    const orders = JSON.parse(localStorage.getItem('orders') || "[]");
    orders.push({ car, customer: n, phone: p, date: new Date().toLocaleString() });
    localStorage.setItem('orders', JSON.stringify(orders));
    alert("Заявка на " + car + " принята!");
    closeModal();
}

document.getElementById('carSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.car').forEach(card => {
        const text = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = text.includes(val) ? "block" : "none";
    });
});

window.onclick = (e) => { if (e.target == document.getElementById('carModal')) closeModal(); }

renderCatalog();
