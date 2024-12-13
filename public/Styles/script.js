"use strict";

window.addEventListener("load", function () {
    var allimages2 = document.querySelectorAll("img");
    for (const image of allimages2) {
        var atribute = image.getAttribute("data-src");
        if (atribute != null) {
            image.setAttribute("src", atribute);
        }
    }
});


const btn = document.getElementById("send_mail");

document.getElementById("send_mail").addEventListener("submit", function (event) {
    event.preventDefault();
    if (document.getElementById('languaje').innerText == "languaje") {
        btn.value = "Sending...";
    }else{
        btn.value = "Enviando...";
    }
    

    const serviceID = "default_service";
    const templateID = "template_64zscvn";

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            
            if (document.getElementById('languaje').innerText == "languaje") {
                alert("Sent!");
            }else{
                alert("Enviado");
            }
            
        },
        (err) => {
            if (document.getElementById('languaje').innerText == "languaje") {
                btn.value = "Send Email";
            }else{
                btn.value = "Enviado";
            }
            alert(JSON.stringify(err));
        }
    );
});

window.onscroll = function () {
    var dScroll = document.documentElement.scrollTop;
    var posicionSeccion = $('#carouselExampleInterval').offset().bottom;
    // Obtén la posición superior de la ventana
    var posicionVentana = $(window).scrollTop();
    // Obtén la altura de la ventana
    var alturaVentana = $(window).height();
    var opacityValue = 1

    let navbar = document.querySelectorAll(".navbar");
    
    if (dScroll >= 500) {
        for (const nav of navbar) {
            nav.classList.add("navbar-top-fade");
        }
    } else {
        for (const nav of navbar) {
            nav.classList.remove("navbar-top-fade");
        }
    }
    let img_move = document.querySelectorAll(".img_bg1");
    if (dScroll >= 50) {
        for (const nav of img_move) {
            nav.classList.add("move");
        }
    } else {
        for (const nav of img_move) {
            nav.classList.remove("move");
        }
    }
    
    if (dScroll > 100) {
        var scrollPosY = window.scrollY || window.pageYOffset;
        var opacityValue = 1 - (scrollPosY / 1400); // Ajusta según la cantidad de scroll para hacer la imagen invisible
        for (const nav of img_move) {
            nav.style.opacity  = opacityValue;
        }
    }else{
        var scrollPosY = window.scrollY || window.pageYOffset;
        var opacityValue = 1 + (scrollPosY / 1400); // Ajusta según la cantidad de scroll para hacer la imagen invisible
        for (const nav of img_move) {
            nav.style.opacity  = opacityValue;
        }
    }
    // Verifica si la sección del carrusel está en el área visible
    if (posicionSeccion < (posicionVentana + alturaVentana)) {
        // Si la sección está visible, inicia el carrusel
        $('#carouselExampleInterval').carousel('cycle');
    }
};

function scrollToSection(sectionId) {
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}



function showelements (section) {
    if (section == "pos_section") {
        document.getElementById("home_section").classList.add("d-none");
        document.getElementById("gis_section").classList.add("d-none");
        document.getElementById("pos_section").classList.remove("d-none");
    }

    if (section == "home") {
        document.getElementById("pos_section").classList.add("d-none");
        document.getElementById("gis_section").classList.add("d-none");
        document.getElementById("home_section").classList.remove("d-none");
    }

    if (section == "gis_section") {
        document.getElementById("home_section").classList.add("d-none");
        document.getElementById("pos_section").classList.add("d-none");
        document.getElementById("gis_section").classList.remove("d-none");
    }
        // Para navegadores modernos
    if ('scrollBehavior' in document.documentElement.style) {
        document.documentElement.scrollTop = 0;
    } else {
      // Para navegadores más antiguos
        document.body.scrollTop = 0;
    }
}