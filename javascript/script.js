const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let image_section = document.querySelector(".image-section");
let evidence = document.querySelector(".evidence");
let jumbo;
let image;

for(let i = 0; i < items.length; i++)
{
    let evidence_img_box = document.createElement("div");
    evidence_img_box.classList.add("image-box", "relative");
    jumbo = `   <div class="jumbotron absolute text-end">
                    <h1>${title[i]}</h1>
                    <span>${text[i]}</span>
                </div>
                <img class="w-100" src="${items[i]}" alt="">`;
    evidence_img_box.innerHTML = jumbo;
    evidence.append(evidence_img_box);


    let image_box = document.createElement("div");
    image_box.classList.add("my-col");
    image = `<img class="click-me" src="${items[i]}" alt="">`
    image_box.innerHTML = image;
    image_section.append(image_box);
}

let all_evi_img = document.querySelectorAll(".image-box");
let all_box_img = document.querySelectorAll(".my-col");

all_evi_img[0].classList.add('active');
all_box_img[0].classList.add('active');



// let click_img = document.querySelectorAll("img.click-me");
// let active = false;

// click_img.addEventListener('click', 
//     function()
//     {
//         if(click_img.classList == "active")
//         {
//             click_img.classList.remove("active");
//         }
//         else
//         {
//             click_img.classList.add("active");
//         }
//     }
// );