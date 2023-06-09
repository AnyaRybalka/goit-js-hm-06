const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");
const element = images
  .map((image) => `<li><img src=${image.url} alt="${image.alt}"></li>`)
  .join("");
list.insertAdjacentHTML("beforeend", element);
const items = list.querySelectorAll("li");
items.forEach((item) => {
  item.classList.add("gallery__item");
});
const styleImgs = list.querySelectorAll("img");
styleImgs.forEach((img) => {
  img.classList.add("gallery__image");
});
const head = document.querySelector("head");
head.innerHTML += `<link rel="stylesheet" href="css/gallery-style.css"/>`;