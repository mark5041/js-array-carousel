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
                <img src="${items[i]}" alt="">`;
    evidence_img_box.innerHTML = jumbo;
    evidence.append(evidence_img_box);


    let image_box = document.createElement("div");
    image_box.classList.add("my-col", "relative");
    image = `<img class="click-me" src="${items[i]}" alt="">`
    image_box.innerHTML = image;
    image_section.append(image_box);
}

let all_evi_img = document.querySelectorAll(".image-box");
let all_box_img = document.querySelectorAll(".my-col");

let evi_img = document.querySelector(".image-box");
let box_img = document.querySelector(".my-col");

let up = document.querySelector(".up");
let down = document.querySelector(".down");

all_evi_img[0].classList.add('active');
all_box_img[0].classList.add('active');


up.addEventListener('click', 
    function()
    {
        const active_ev_box = document.querySelector(".image-box.active");
        const prev_active_ev_box = active_ev_box.previousElementSibling;
        const active_img = document.querySelector(".my-col.active");
        const prev_active_img = active_img.previousElementSibling;

        if(active_img == all_box_img[0])
        {
            active_img.classList.remove("active");
            active_ev_box.classList.remove("active");
            all_evi_img[items.length - 1].classList.add('active');
            all_box_img[items.length - 1].classList.add('active');
        }
        else
        {
            active_img.classList.remove("active");
            prev_active_ev_box.classList.add("active");
            active_ev_box.classList.remove("active");
            prev_active_img.classList.add("active");
        }

        
        
    }
);

down.addEventListener('click', 
    function()
    {
        const active_ev_box = document.querySelector(".image-box.active");
        const next_active_ev_box = active_ev_box.nextElementSibling;
        const active_img = document.querySelector(".my-col.active");
        const next_active_img = active_img.nextElementSibling;

        if(next_active_img == null)
        {
            active_img.classList.remove("active");
            active_ev_box.classList.remove("active");
            all_evi_img[0].classList.add('active');
            all_box_img[0].classList.add('active');
        }
        else
        {
            active_img.classList.remove("active");
            next_active_img.classList.add("active");
            active_ev_box.classList.remove("active");
            next_active_ev_box.classList.add("active");
        }
    }
);

