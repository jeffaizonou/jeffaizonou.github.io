/* =========================
   TYPING EFFECT
========================= */

const texts = {
  fr: [
    "Licencié en Génie Télécoms & TIC",
    "Développeur Web",
    "Passionné par les Réseaux",
    "Spécialiste VoIP & Systèmes"
  ],
  en: [
    "Telecoms & ICT Graduate",
    "Web Developer",
    "Networks Enthusiast",
    "VoIP & Systems Specialist"
  ]
};

let index = 0;
let char = 0;

function type(){
  const current = texts[currentLanguage][index];
  if(char < current.length){
    document.getElementById("typing").textContent += current.charAt(char);
    char++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase(){
  const current = texts[currentLanguage][index];
  if(char > 0){
    document.getElementById("typing").textContent = current.substring(0, char-1);
    char--;
    setTimeout(erase, 40);
  } else {
    index++;
    if(index >= texts[currentLanguage].length){
      index = 0;
    }
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", type);







/* =========================
   MATRIX EFFECT
========================= */


const canvas =
document.getElementById("matrix");


const ctx =
canvas.getContext("2d");



canvas.height =
window.innerHeight;


canvas.width =
window.innerWidth;



const letters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const fontSize = 14;


const columns =
canvas.width/fontSize;



const drops =
Array(Math.floor(columns)).fill(1);



function drawMatrix(){


ctx.fillStyle =
"rgba(0,0,0,0.08)";


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="#00ffff";

ctx.font =
fontSize+"px monospace";



drops.forEach((y,i)=>{


const text =
letters[Math.floor(Math.random()*letters.length)];



ctx.fillText(
text,
i*fontSize,
y*fontSize
);



if(y*fontSize >
canvas.height &&
Math.random()>0.975)

drops[i]=0;



drops[i]++;


});


}



setInterval(drawMatrix,50);




window.addEventListener(
"resize",
()=>{


canvas.height =
window.innerHeight;


canvas.width =
window.innerWidth;


});



 /*Ajouté après*/
/* =========================
   ANIMATIONS AU DEFILEMENT
========================= */

const reveals =
document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    reveals.forEach((element) => {

        const position =
        element.getBoundingClientRect().top;


        const visiblePosition =
        window.innerHeight - 120;


        if (
            position < visiblePosition
        ) {

            element.classList.add(
                "active"
            );

        }

    });

};


window.addEventListener(
"scroll",
revealOnScroll
);


window.addEventListener(
"load",
revealOnScroll
);

/* */

/* =========================
   MODE CLAIR / SOMBRE
========================= */

const themeBtn =
document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        themeBtn.textContent = "🌙";

    }

    else {

        themeBtn.textContent = "☀";

    }

});


/* =========================
   CHANGEMENT DE LANGUE
========================= */


let currentLanguage = "fr";


const languageBtn =
document.getElementById("languageBtn");



languageBtn.addEventListener(
"click",
()=>{


currentLanguage =
currentLanguage === "fr"
? "en"
: "fr";



document
.querySelectorAll("[data-fr]")
.forEach(element=>{


element.textContent =
element.dataset[currentLanguage];


});



languageBtn.textContent =
currentLanguage.toUpperCase();

document.getElementById("typing").textContent = "";
char = 0;

}
);