// var submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function(){
//     alert("Thank You")
// })

document.querySelector(".form").addEventListener("submit", submitForm),

function submitBtn(e) {
    e.preventDefault();
    let name = document.querySelector(".name").Value;
    let email = document.querySelector(".email").Value;
    let message = document.querySelector(".massage").Value;

    document.querySelector(".form").reset();

    sendEmail(name, email,message);
}



function sendEmail(name, email, message ){

    Email.send({
        Host : "smtp.gmail.com",
        Username : "email",
        Password : "",
        To : "email",
        From : "email",
        Subject : `${name}`,
        Body : `Name: ${name} <br/>  Email: ${email} <br/> Message: ${message}`
    }).then(message => alert("Your Email has sent successfully")
    );

}


