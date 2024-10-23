function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Array of image URLs for the carousel
// const images = [
//   "/images/mainjpg",
//   "/images/page1.jpg", // replace with your actual image paths
//   "/images/page2.jpg",
//   "/images/page3.jpg",
//   "/images/page4.jpg",
//   "/images/page5.jpg",
//   "/images/page6.jpg",
//   "/images/page7.jpg",
//   "/images/page8.jpg",
// ];

// let currentIndex = 0;
// let isSlideshowRunning = true;
// const carouselImg = document.getElementById("carousel-img");

// // Function to change the image
// function changeImage() {
//   if (isSlideshowRunning) {
//     currentIndex = (currentIndex + 1) % images.length;
//     carouselImg.src = images[currentIndex];
//   }
// }

// // Start the slideshow by changing the image every 3 seconds
// const interval = setInterval(changeImage, 3000);

// // Stop the slideshow when the image is clicked
// carouselImg.addEventListener("click", () => {
//   isSlideshowRunning = false;
//   clearInterval(interval); // Stop the interval
// });
const images = [
  "/images/main.jpg",
  "/images/page1.jpg", // replace with your actual image paths
  "/images/page2.jpg",
  "/images/page3.jpg",
  "/images/page4.jpg",
  "/images/page5.jpg",
  "/images/page6.jpg",
  "/images/page7.jpg",
  "/images/page8.jpg",
  "/images/page9.jpg",
];

let currentIndex = 0;
let isSlideshowRunning = true;
const carouselImg = document.getElementById("carousel-img");

function changeImage() {
  if (isSlideshowRunning) {
    carouselImg.classList.add("fade-out");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      carouselImg.src = images[currentIndex];

      carouselImg.classList.remove("fade-out");
      carouselImg.classList.add("fade-in");
    }, 500);
  }
}

const interval = setInterval(changeImage, 3000);

carouselImg.addEventListener("click", () => {
  isSlideshowRunning = false;
  clearInterval(interval);
});
