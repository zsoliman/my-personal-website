const h2 = document.createElement("h2");
h2.textContent = "";

//document.querySelector("body").appendChild(h2);

/*
let con = document.getElementById("btnContact"); //Target blank wasn't working
btnContact.addEventListener("click", function () {
    window.open("contact.html", "_blank")
});
*/ //opens contact page in new tab but also opens in the already open tab

let form = document.getElementById("contactForm");
form.addEventListener("submit", function () {
    alert("Looking forward to speaking to you soon " + `${fname.value}`)
});

