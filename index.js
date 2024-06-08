// select element
let iconsContainer = document.querySelectorAll(".icons-container");
console.log(iconsContainer);


iconsContainer.forEach(iconContainer => {
    iconContainer.addEventListener("click", () => {
        console.log("click");


        let openIcon = iconContainer.children[0];
        openIcon.classList.toggle("toggle");

        let questionItem= iconContainer.parentElement;
        console.log(questionItem);

        let answerContainer = questionItem.nextElementSibling;
        console.log(answerContainer);
        answerContainer.classList.toggle("toggle-answer");
        
    })
})