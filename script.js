

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        var target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


var themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});


document.querySelectorAll("table tr").forEach(function(row) {
    if (!row.querySelector("th")) {
        row.addEventListener("mouseover", function() {
            row.style.backgroundColor = "#ffeaa7";
        });

        row.addEventListener("mouseout", function() {
            row.style.backgroundColor = "";
        });
    }
});


var readMoreButton = document.getElementById("read-more");
var extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {
    if (extraText.hidden) {
        extraText.hidden = false;
        readMoreButton.textContent = "Read Less";
    } else {
        extraText.hidden = true;
        readMoreButton.textContent = "Read More";
    }
});


var popup = document.getElementById("popup");
var popupMessage = document.getElementById("popup-message");

function showPopup(message) {
    popupMessage.textContent = message;
    popup.style.display = "flex";
}

document.getElementById("popup-close").addEventListener("click", function() {
    popup.style.display = "none";
});


var form = document.getElementById("contact-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var counter = document.getElementById("counter");

messageInput.addEventListener("input", function() {
    var remaining = 100 - messageInput.value.length;
    counter.textContent = remaining + " characters remaining";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        showPopup("Please fill all input fields.");
        return;
    }

    if (!email.includes("@")) {
        showPopup("Please enter a valid email.");
        return;
    }

    showPopup("Thank you " + name + "! Your message was sent successfully.");

    form.reset();
    counter.textContent = "100 characters remaining";
});


var topButton = document.getElementById("top-button");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
