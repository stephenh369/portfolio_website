// DOM VARIABLES
const typingSpan = document.querySelector(".typing");
const cursor = document.querySelector(".cursor");
const solidCursor = document.querySelector(".solidCursor");
solidCursor.classList.remove("solidCursor");
// TYPED TEXT ARRAY
const typeText = ["code.", "drive.", "listen to music.", "go to the gym.", "play guitar."];
// DELAY VARIABLES
const typingDelay = 200;
const deleteDelay = 100;
const newTextDelay = 2000;
// INDEX VARIABLES
let textIndex = 0;
let letterIndex = 0;


// TYPE FUNCTION
function type() {
    cursor.classList.remove("cursor");
    solidCursor.classList.add("solidCursor"); // ADDS SOLID CURSOR WHEN TYPING
    if (letterIndex < typeText[textIndex].length) {
    typingSpan.textContent += typeText[textIndex].charAt(letterIndex);
    letterIndex++; // IF LETTER INDEX IS LESS THAN LENGTH OF WORD ADD MORE LETTERS
    setTimeout(type, typingDelay); // DELAY BETWEEN LETTERS
   } else {
       setTimeout(delText, newTextDelay); //DELAY BEFORE DELETE FUNCTION STARTS
       solidCursor.classList.remove("solidCursor");
       cursor.classList.add("cursor"); //ADDS BLINKING CURSOR BACK IN
   }
};

// DELETE FUNCTION
function delText() {
    cursor.classList.remove("cursor");
    solidCursor.classList.add("solidCursor");
    if (letterIndex > 0) {
        typingSpan.textContent = typeText[textIndex].substring(0, letterIndex - 1);
        letterIndex--; // IF LETTER INDEX IS GREATER THAN 0, DELETE LETTERS
        setTimeout(delText, deleteDelay); // DELAY BETWEEN DELETION OF LETTERS
    } else {
        textIndex++; // WHEN 0, MOVE ON TO NEXT TEXT
        solidCursor.classList.remove("solidCursor");
       cursor.classList.add("cursor");
        if (textIndex >= typeText.length)
            textIndex = 0; // IF FINISHED CYCLING THROUGH TEXT START AGAIN
            setTimeout(type, typingDelay + 1000); // DELAY BEFORE TYPE FUNCTION BEGINS AGAIN
            
    }
};

// LOAD DOM CONTENT ON PAGE LOAD & DELAY BEFORE START
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, typingDelay + 800);
});
    
