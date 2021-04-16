const reviews = [
    {
        id: 1,
        name: "Roshan Bajgain",
        job: "Software Engineer",
        img: "bb.JPG",
        text: 'He is one of the best software engineer in the world right now. this contribution towards the country is very interesting.As he import  from nepal.'   
    },
    {
        id: 2,
        name: "Dinesh Bajgain",
        job:"Web Developer",
        img: "baa.jpeg",
        text: 'One of the best software engineer. have a lot of experience in the working area. now he is working'
    },
    {
        id: 3,
        name: "Dipesh Bajgain",
        job: "Web Developer",
        img: "photo.jpg",
        text: 'sduisdghi hsi uihij idfuhj uu iri hhsduh iudfhib ufb jdfidfh hdfjh dfhfo' 
    },
    {
        id: 4,
        name: "Dipa Bajgain",
        job: "Web Developer",
        img: "Elon-Musk-2010.jpg",
        text: 'hsdihdfj hdfnf idfonf hdfnf hdffj hfndfjk fihdf dhfk dfdfioj dfh sdj9 shsjhu sifhj'
    }
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});
function showPerson(person) {
    const review = reviews[person];
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
}
    nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
});