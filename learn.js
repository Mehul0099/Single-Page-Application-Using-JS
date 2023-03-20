const target = document.getElementById("target")

function loadHome() {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', "./home.html", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            target.innerHTML = this.responseText;
        }
    };
}


function loadAbout() {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', "./about.html", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            target.innerHTML = this.responseText;
        }
    };
}


function loadImages() {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', "./images.html", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            target.innerHTML = this.responseText;
        }
    };
}


function loadServices() {
    var xhttp = new XMLHttpRequest();

    xhttp.open('GET', "./services.html", true)
    xhttp.send()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            target.innerHTML = this.responseText;
        }
    };
}


