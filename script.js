const carData = {
    "Toyota": [
        { name: "Toyota Camry 75", price: 18500000, img: "images/toyota_camry.jpg", hp: "249 л.с.", year: "2023" },
        { name: "Toyota Land Cruiser 300", price: 58000000, img: "images/toyota_landcruiser.jpg", hp: "415 л.с.", year: "2024" },
        { name: "Toyota Land Cruiser Prado 150", price: 34000000, img: "images/toyota_prado.jpg", hp: "282 л.с.", year: "2022" },
        { name: "Toyota RAV4", price: 21500000, img: "images/toyota_rav4.jpg", hp: "199 л.с.", year: "2023" },
        { name: "Toyota Highlander", price: 36000000, img: "images/toyota_highlander.jpg", hp: "295 л.с.", year: "2023" },
        { name: "Toyota Corolla", price: 13000000, img: "images/toyota_corolla.jpg", hp: "140 л.с.", year: "2023" },
        { name: "Toyota GR Supra", price: 46000000, img: "images/toyota_supra.jpg", hp: "340 л.с.", year: "2022" },
        { name: "Toyota Hilux", price: 24500000, img: "images/toyota_hilux.jpg", hp: "150 л.с.", year: "2023" },
        { name: "Toyota Yaris", price: 11000000, img: "images/toyota_yaris.jpg", hp: "116 л.с.", year: "2023" },
        { name: "Toyota Avensis", price: 9000000, img: "images/toyota_avensis.jpg", hp: "147 л.с.", year: "2018" }
    ],
    "BMW": [
        { name: "BMW X5 M-Package", price: 49500000, img: "images/bmw_x5.jpg", hp: "340 л.с.", year: "2023" },
        { name: "BMW M5 CS", price: 78000000, img: "images/bmw_m5.jpg", hp: "635 л.с.", year: "2022" },
        { name: "BMW 7 Series G70", price: 68000000, img: "images/bmw_7.jpg", hp: "381 л.с.", year: "2024" },
        { name: "BMW X7 M60i", price: 62000000, img: "images/bmw_x7.jpg", hp: "530 л.с.", year: "2023" },
        { name: "BMW M3 Competition", price: 54000000, img: "images/bmw_m3.jpg", hp: "510 л.с.", year: "2023" },
        { name: "BMW 5 Series G30", price: 29500000, img: "images/bmw_5.jpg", hp: "252 л.с.", year: "2023" },
        { name: "BMW 3 Series G20", price: 23000000, img: "images/bmw_3.jpg", hp: "184 л.с.", year: "2023" },
        { name: "BMW X3 xDrive", price: 27500000, img: "images/bmw_x3.jpg", hp: "249 л.с.", year: "2023" },
        { name: "BMW i7 M70 Electric", price: 74000000, img: "images/bmw_i7.jpg", hp: "659 л.с.", year: "2024" },
        { name: "BMW Z4 Roadster", price: 39000000, img: "images/bmw_z4.jpg", hp: "340 л.с.", year: "2022" }
    ],
    "Mercedes": [
        { name: "Mercedes-Benz G63 AMG", price: 98000000, img: "images/mb_g.jpg", hp: "585 л.с.", year: "2023" },
        { name: "Mercedes-Benz S500 W223", price: 72000000, img: "images/mb_s.jpg", hp: "435 л.с.", year: "2024" },
        { name: "Mercedes-Benz E-Class W213", price: 33500000, img: "images/mb_e.jpg", hp: "197 л.с.", year: "2023" },
        { name: "Mercedes-Benz GLE 53 AMG", price: 47000000, img: "images/mb_gle.jpg", hp: "435 л.с.", year: "2023" },
        { name: "Mercedes-AMG GT Black Series", price: 120000000, img: "images/mb_amg.jpg", hp: "730 л.с.", year: "2022" },
        { name: "Mercedes-Benz C-Class W206", price: 26500000, img: "images/mb_c.jpg", hp: "204 л.с.", year: "2023" },
        { name: "Mercedes-Benz GLC 300", price: 31000000, img: "images/mb_glc.jpg", hp: "258 л.с.", year: "2023" },
        { name: "Mercedes-Benz EQS 580", price: 69000000, img: "images/mb_eqs.jpg", hp: "523 л.с.", year: "2023" },
        { name: "Mercedes-Benz CLS 450", price: 44000000, img: "images/mb_cls.jpg", hp: "367 л.с.", year: "2022" },
        { name: "Mercedes-Benz V-Class Vito", price: 42000000, img: "images/mb_vito.jpg", hp: "190 л.с.", year: "2023" }
    ],
    "Audi": [
        { name: "Audi RS6 Avant", price: 79500000, img: "images/audi_rs6.jpg", hp: "600 л.с.", year: "2023" },
        { name: "Audi Q8 S-line", price: 48000000, img: "images/audi_q8.jpg", hp: "340 л.с.", year: "2023" },
        { name: "Audi A8 L", price: 57000000, img: "images/audi_a8.jpg", hp: "340 л.с.", year: "2023" },
        { name: "Audi Q7 TFSI", price: 43500000, img: "images/audi_q7.jpg", hp: "249 л.с.", year: "2023" },
        { name: "Audi e-tron GT Electric", price: 64000000, img: "images/audi_e.jpg", hp: "476 л.с.", year: "2023" },
        { name: "Audi A6", price: 29000000, img: "images/audi_a6.jpg", hp: "245 л.с.", year: "2023" },
        { name: "Audi Q5", price: 25500000, img: "images/audi_q5.jpg", hp: "249 л.с.", year: "2023" },
        { name: "Audi A4", price: 19500000, img: "images/audi_a4.jpg", hp: "150 л.с.", year: "2023" },
        { name: "Audi Q3 Sportback", price: 21000000, img: "images/audi_q3.jpg", hp: "150 л.с.", year: "2022" },
        { name: "Audi TT RS", price: 42000000, img: "images/audi_tt.jpg", hp: "400 л.с.", year: "2022" }
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
        <div style="display:flex; gap:10px; margin-bottom:20px;">
            <div style="background:#f0f0f0; padding:10px; border-radius:10px; flex:1">
                <small style="color:#888">Мощность</small><br><b>${car.hp}</b>
            </div>
            <div style="background:#f0f0f0; padding:10px; border-radius:10px; flex:1">
                <small style="color:#888">Год выпуска</small><br><b>${car.year}</b>
            </div>
        </div>
        <div style="background:#f9f9f9; padding:20px; border-radius:15px; margin-bottom:20px">
            <h4 style="margin-bottom:15px">Кредитный калькулятор</h4>
            <div style="margin-bottom:15px">
                <label style="display:flex; justify-content:space-between; font-size:14px">Первоначальный взнос: <span id="dV">30</span>%</label>
                <input type="range" id="dR" min="10" max="80" value="30" style="width:100%" oninput="updateCalc()">
            </div>
            <div style="margin-bottom:15px">
                <label style="display:flex; justify-content:space-between; font-size:14px">Срок кредита: <span id="pV">36</span> мес.</label>
                <input type="range" id="pR" min="12" max="84" value="36" step="12" style="width:100%" oninput="updateCalc()">
            </div>
            <div style="background:#000; color:#fff; padding:15px; border-radius:10px; display:flex; justify-content:space-between; align-items:center">
                <span>Ежемесячный платеж:</span>
                <b id="mP" style="color:#007bff; font-size:18px">0 ₸</b>
            </div>
        </div>
        <div class="form-inputs">
            <input type="text" id="cName" placeholder="Ваше имя" style="width:100%; padding:12px; margin-bottom:10px; border:1px solid #ddd; border-radius:8px">
            <input type="tel" id="cPhone" placeholder="Ваш телефон" style="width:100%; padding:12px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px">
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
    const monthly = (loan / months) * 1.14; // Процентная ставка 14%
    document.getElementById('mP').innerText = Math.round(monthly).toLocaleString() + " ₸";
}

function closeModal() { document.getElementById('carModal').style.display = "none"; }

function sendOrder(car) {
    const n = document.getElementById('cName').value;
    const p = document.getElementById('cPhone').value;
    if(!n || !p) return alert("Пожалуйста, заполните все поля!");
    const orders = JSON.parse(localStorage.getItem('orders') || "[]");
    orders.push({ car, customer: n, phone: p, date: new Date().toLocaleString(), price: parseInt(document.getElementById('mPrice').dataset.val) });
    localStorage.setItem('orders', JSON.stringify(orders));
    alert("Спасибо! Заявка на " + car + " успешно отправлена.");
    closeModal();
}

document.getElementById('carSearch').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll('.car').forEach(card => {
        const text = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = text.includes(val) ? "block" : "none";
    });
});

window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target == modal) closeModal();
}

renderCatalog();
