class Review {
    imgPath: string;
    textContent: string;
    name: string;
    desig: string;

    constructor(img: string, text: string, name: string, desig: string) {
        this.imgPath = img;
        this.textContent = text;
        this.name = name;
        this.desig = desig;
    }
}

function createReview(review: Review) {
    let reviewImg = document.createElement("img") as HTMLElement;
    reviewImg.setAttribute("src", review.imgPath);

    let reviewName = document.createElement("div") as HTMLElement;
    reviewName.setAttribute("class", "name");
    reviewName.textContent = review.name;

    let reviewDesig = document.createElement("div") as HTMLElement;
    reviewDesig.setAttribute("class", "desig");
    reviewDesig.textContent = review.desig;

    let reviewContent = document.createElement("div") as HTMLElement;
    reviewContent.setAttribute("class", "content");
    reviewContent.textContent = review.textContent;

    let reviewWrap = document.createElement("div") as HTMLElement;
    reviewWrap.setAttribute("class", "review");

    reviewWrap.appendChild(reviewImg);
    reviewWrap.appendChild(reviewName);
    reviewWrap.appendChild(reviewDesig);
    reviewWrap.appendChild(reviewContent);

    return reviewWrap;
}

let content: Review[];
content = [
    new Review(
        "img/prof1.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.",
        "lorem ipsum",
        "lorem"
    ),
    new Review(
        "img/prof2.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.",
        "lorem ipsum",
        "lorem"
    ),
    new Review(
        "img/prof3.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.",
        "lorem ipsum",
        "lorem"
    ),
    new Review(
        "img/prof4.jpg",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque eveniet aliquam quis esse architecto adipisci debitis recusandae id cum minima pariatur modi, ipsum rem optio illo quaerat explicabo quisquam fuga laudantium soluta! Error perspiciatis nobis quidem nulla in aliquid distinctio neque aspernatur ratione ducimus vitae, laborum obcaecati quo voluptates.",
        "lorem ipsum",
        "lorem"
    ),
];

let index = 0;

function showReview(index: number) {
    let review = createReview(content[index]);
    let oldReview = document.querySelector(".review") as HTMLElement;
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
