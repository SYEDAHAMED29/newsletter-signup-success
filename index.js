const signupBtn = document.getElementById("btn-signup");
const dismissBtn = document.getElementById("btn-dismiss");
const firstContainer = document.querySelector(".container-1");
const secondContainer = document.querySelector(".container-2");
const email = document.getElementById("email");
const span = document.querySelector(".email-bold");
const valid = document.querySelector(".validity");
const imgChange = document.getElementById("img-change");

function addImage() {
   const screenWidth = window.innerWidth;

   if (screenWidth <= 425) {
      imgChange.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
   } else {
      imgChange.setAttribute("src", "./assets/images/illustration-sign-up-desktop.svg");
   }
}

window.addEventListener("resize", addImage);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signupBtn.addEventListener("click", function () {
   console.log("Button clicked");
   let value = email.value;
   if (value.match(emailPattern)) {
      firstContainer.style.display = "none";
      secondContainer.style.display = "block";

      span.textContent = value;
   } else {
      email.style.borderColor = "#ff6257";
      email.style.backgroundColor = "#ff615526";
      valid.style.display = "block";

      email.addEventListener("focus", () => {
         email.style.borderColor = "#242742";
         email.style.backgroundColor = "#fff";
         valid.style.display = "none";
      });
   }
});

dismissBtn.addEventListener("click", function () {
   secondContainer.style.display = "none";
   firstContainer.style.display = "flex";
   email.value = "";
   valid.style.display = "none";
});

// signupBtn.addEventListener("click", function () {
//    firstContainer.style.display = "none";
//    secondContainer.classList.remove("container-2");
// });

// dismissBtn.addEventListener("click", function () {
//    secondContainer.classList.add("container-2");
//    firstContainer.style.display = "flex";
// });
