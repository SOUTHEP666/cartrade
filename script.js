const cars = [
  {
    brand: "本田 雅阁 2019款",
    image: "images/car1.jpg",
    price: 78000,
    description: "1.5T 自动豪华版，车况良好，支持试驾"
  },
  {
    brand: "丰田 卡罗拉 2020款",
    image: "images/car2.jpg",
    price: 65000,
    description: "1.2T 自动智能版，原厂保养记录"
  },
  {
    brand: "大众 朗逸 2018款",
    image: "images/car3.jpg",
    price: 52000,
    description: "1.6L 自动风尚版，无重大事故"
  }
];

const carList = document.getElementById("carList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function renderCars(data) {
  carList.innerHTML = "";
  data.forEach(car => {
    const card = document.createElement("div");
    card.className = "car-card";
    card.innerHTML = `
      <img src="${car.image}" alt="${car.brand}" />
      <div class="info">
        <h3>${car.brand}</h3>
        <p>${car.description}</p>
        <div class="price">¥${car.price.toLocaleString()}</div>
        <a class="contact-btn" target="_blank"
          href="https://wa.me/8562099194058?text=你好，我想了解一下 ${car.brand}">
          联系卖家
        </a>
      </div>
    `;
    carList.appendChild(card);
  });
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  const sortOrder = sortSelect.value;

  let filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(keyword)
  );

  if (sortOrder === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderCars(filtered);
}

// 初始渲染
renderCars(cars);

// 绑定事件
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
