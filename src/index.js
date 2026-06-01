const images = document.querySelectorAll(".img");

const allBtn = document.getElementById("allBtn");
const natureBtn = document.getElementById("natureBtn");
const carBtn = document.getElementById("carBtn");
const foodBtn = document.getElementById("foodBtn");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentImages = Array.from(images);
let currentIndex = 0;

// Render images based on screen size
function renderImages() {
  const isMobile = window.innerWidth < 500;

  images.forEach((img) => {
    img.style.display = "none";
  });

  if (isMobile) {
    if (currentImages.length > 0) {
      currentImages[currentIndex].style.display = "block";
    }
  } else {
    currentImages.forEach((img) => {
      img.style.display = "block";
    });
  }
}

// Filter category
function setCategory(category) {
  if (category === "all") {
    currentImages = Array.from(images);
  } else {
    currentImages = Array.from(images).filter((img) =>
      img.classList.contains(category)
    );
  }

  currentIndex = 0;

  renderImages();
  setActiveButton(category);
}

// Next image
function nextImage() {
  if (currentImages.length === 0) return;

  currentIndex++;

  if (currentIndex >= currentImages.length) {
    currentIndex = 0;
  }

  renderImages();
}

// Previous image
function prevImage() {
  if (currentImages.length === 0) return;

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = currentImages.length - 1;
  }

  renderImages();
}

// Active button styling
function setActiveButton(category) {
  const buttons = [allBtn, natureBtn, carBtn, foodBtn];

  buttons.forEach((btn) => {
    btn.classList.remove("ring-2", "ring-black");
  });

  switch (category) {
    case "all":
      allBtn.classList.add("ring-2", "ring-black");
      break;

    case "nature":
      natureBtn.classList.add("ring-2", "ring-black");
      break;

    case "car":
      carBtn.classList.add("ring-2", "ring-black");
      break;

    case "food":
      foodBtn.classList.add("ring-2", "ring-black");
      break;
  }
}

// Button Events
allBtn.addEventListener("click", () => setCategory("all"));
natureBtn.addEventListener("click", () => setCategory("nature"));
carBtn.addEventListener("click", () => setCategory("car"));
foodBtn.addEventListener("click", () => setCategory("food"));

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Re-render when screen size changes
window.addEventListener("resize", renderImages);

// Initial load
setCategory("all");