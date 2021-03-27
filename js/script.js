

//question 1
const cat= {
    complain: function() {
        console.log("meow");
    }
}

cat.complain(); 

//question 2  question 4

const heading = document.querySelector("h3");

heading.innerHTML= "updated heading" 
heading.classList.add("subheading");

//question 3 

const size = document.querySelector("h3") ;

size.style.fontSize= "2em";


//question 5

const paragraph= document.querySelectorAll("p") 
    for(let i=0; i < paragraph.length; i++ ) {
        paragraph[i].style.color= "red";
    }

//qestion 6

const resultContainer= document.querySelector(".results");

resultContainer.innerHTML += "<p>New paragraph</p>"; 
resultContainer.style.backgroundColor= "yellow";

//question 7

const cats  = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function listvalue(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

listvalue(cats);


//question 8



function createCats(cats) {

    let html = "";

    for(let i = 0; i < cats.lenght; i++) {
        
        let catAge = "Unknown age";

        if(cats[i].age) {
          catAge = cats[i].age;
        }

        html +=  `<div class="cats">
                  <h5> ${cats[i].name}</h5>
                  <p>age: ${catAge}</p>
        </div>`;
    }

    return html;
}

createCats(cats);

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;
















