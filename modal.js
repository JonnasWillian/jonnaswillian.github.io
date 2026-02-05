document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
    });
});

function openModal() {
    document.getElementById('myModal').style.display = "block";
}


function closeModal() {
    document.getElementById('myModal').style.display = "none";
}


window.onclick = function(event) {
    let modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }

    let modal2 = document.getElementById('myModal2');
    if (event.target == modal2) {
        closeModal2();
    }

    let modal3 = document.getElementById('myModal3');
    if (event.target == modal3) {
        closeModal3();
    }

    let modal4 = document.getElementById('myModal4');
    if (event.target == modal4) {
        closeModal4();
    }

    let modal5 = document.getElementById('myModal5');
    if (event.target == modal5) {
        closeModal5();
    }

    let modal6 = document.getElementById('myModal6');
    if (event.target == modal6) {
        closeModal6();
    }

    let modal7 = document.getElementById('myModal7');
    if (event.target == modal7) {
        closeModal7();
    }

    let modal8 = document.getElementById('myModal8');
    if (event.target == modal8) {
        closeModal8();
    }
}

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


function openModal2() {
    document.getElementById('myModal2').style.display = "block";
}


function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);


function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}


function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}


function openModal3() {
    document.getElementById('myModal3').style.display = "block";
}


function closeModal3() {
    document.getElementById('myModal3').style.display = "none";
}

let slideIndex3 = 1;
showSlides3(slideIndex3);


function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}


function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) { slideIndex3 = 1 }
    if (n < 1) { slideIndex3 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3 - 1].style.display = "block";
}


function openModal4() {
    document.getElementById('myModal4').style.display = "block";
}


function closeModal4() {
    document.getElementById('myModal4').style.display = "none";
}

let slideIndex4 = 1;
showSlides4(slideIndex4);


function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}


function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) { slideIndex4 = 1 }
    if (n < 1) { slideIndex4 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex4 - 1].style.display = "block";
}

function openModal5() {
    document.getElementById('myModal5').style.display = "block";
}


function closeModal5() {
    document.getElementById('myModal5').style.display = "none";
}

let slideIndex5 = 1;
showSlides5(slideIndex5);


function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}


function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides5");
    if (n > slides.length) { slideIndex5 = 1 }
    if (n < 1) { slideIndex5 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex5 - 1].style.display = "block";
}

function openModal6() {
    document.getElementById('myModal6').style.display = "block";
}


function closeModal6() {
    document.getElementById('myModal6').style.display = "none";
}

let slideIndex6 = 1;
showSlides6(slideIndex6);


function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}


function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides6");
    if (n > slides.length) { slideIndex6 = 1 }
    if (n < 1) { slideIndex6 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex6 - 1].style.display = "block";
}

function openModal7() {
    document.getElementById('myModal7').style.display = "block";
}


function closeModal7() {
    document.getElementById('myModal7').style.display = "none";
}

let slideIndex7 = 1;
showSlides7(slideIndex7);


function plusSlides7(n) {
    showSlides7(slideIndex7 += n);
}


function currentSlide7(n) {
    showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides7");
    if (n > slides.length) { slideIndex7 = 1 }
    if (n < 1) { slideIndex7 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex7 - 1].style.display = "block";
}

function openModal8() {
    document.getElementById('myModal8').style.display = "block";
}


function closeModal8() {
    document.getElementById('myModal8').style.display = "none";
}

let slideIndex8 = 1;
showSlides8(slideIndex8);


function plusSlides8(n) {
    showSlides8(slideIndex8 += n);
}


function currentSlide8(n) {
    showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides8");
    if (n > slides.length) { slideIndex8 = 1 }
    if (n < 1) { slideIndex8 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex8 - 1].style.display = "block";
}