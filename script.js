// review data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
const img = document.querySelector(".img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const text = document.querySelector(".text");


const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const randomBtn = document.querySelector(".randomBtn");

let currentItems = 0;

// load initial item

window.addEventListener("DOMContentLoaded",function(){
    showPerson(currentItems);
})
function showPerson(){
    const item=reviews[currentItems];
    img.src = item.img;    
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text
}

nextBtn.addEventListener("click",function(){
    currentItems++;
    if(currentItems > reviews.length - 1){
        currentItems = 0;
    }
    showPerson();
})

prevBtn.addEventListener("click",function(){
    currentItems--;
    if(currentItems < 0){
        currentItems = reviews.length - 1;
    }
    showPerson();
})
randomBtn.addEventListener("click",function(){
    currentItems=Math.floor(Math.random() * reviews.length);
    showPerson();
    console.log(currentItems)
})