"use strict";
var Review = /** @class */ (function () {
    function Review(img, text, name, desig) {
        this.imgPath = img;
        this.textContent = text;
        this.name = name;
        this.desig = desig;
    }
    return Review;
}());
function createReview(review) {
    var reviewImg = document.createElement("img");
    reviewImg.setAttribute("src", review.imgPath);
    var reviewName = document.createElement("div");
    reviewName.setAttribute("class", "name");
    reviewName.textContent = review.name;
    var reviewDesig = document.createElement("div");
    reviewDesig.setAttribute("class", "desig");
    reviewDesig.textContent = review.desig;
    var reviewContent = document.createElement("div");
    reviewContent.setAttribute("class", "content");
    reviewContent.textContent = review.textContent;
    var reviewWrap = document.createElement("div");
    reviewWrap.setAttribute("class", "review");
    reviewWrap.appendChild(reviewImg);
    reviewWrap.appendChild(reviewName);
    reviewWrap.appendChild(reviewDesig);
    reviewWrap.appendChild(reviewContent);
    return reviewWrap;
}
var content;
content = [
    new Review("img/prof1.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.", "lorem ipsum", "lorem"),
    new Review("img/prof2.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.", "lorem ipsum", "lorem"),
    new Review("img/prof3.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.", "lorem ipsum", "lorem"),
    new Review("img/prof4.jpg", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.", "lorem ipsum", "lorem"),
];
var index = 0;
function showReview(index) {
    var review = createReview(content[index]);
    var oldReview = document.querySelector(".review");
    oldReview.replaceWith(review);
}
function prevReview() {
    index = (index - 1 + content.length) % content.length;
    console.log(index);
    showReview(index);
}
function nextReview() {
    index = (index + 1) % content.length;
    console.log(index);
    showReview(index);
}
function random() {
    index = Math.floor(Math.random() * content.length);
    console.log(index);
    showReview(index);
}
window.onload = function () {
    showReview(0);
};
//# sourceMappingURL=script.js.map