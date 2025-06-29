const cars = [
  {
    brand: "本田 雅阁 2019款",
    image: "images/car1.jpg",
    price: "¥78,000",
    description: "1.5T 自动豪华版，车况良好，支持试驾"
  },
  {
    brand: "丰田 卡罗拉 2020款",
    image: "images/car2.jpg",
    price: "¥65,000",
    description: "1.2T 自动智能版，原厂保养记录"
  },
  {
    brand: "大众 朗逸 2018款",
    image: "images/car3.jpg",
    price: "¥52,000",
    description: "1.6L 自动风尚版，无重大事故"
  }
];

const carList = document.getElementById("carList");

cars.forEach(car => {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <img src="${car.image}" alt="${car.brand}" />
    <div class="info">
      <h3>${car.brand}</h3>
      <p>${car.description}</p>
      <div class="price">${car.price}</div>
    </div>
  `;
  carList.appendChild(card);
});
