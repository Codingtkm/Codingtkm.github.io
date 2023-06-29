// preloader

window.onload = function () {
    document.getElementById("preloader").setAttribute("class", "d-none");
};


// hamburger

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('hamburger-toggle')) {
        e.target.children[0].classList.toggle('active');
    }
})



var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").classList.remove("bg-body-tertiary");
    } else {
      document.getElementById("navbar").classList.add("bg-body-tertiary");
    }
    prevScrollpos = currentScrollPos;
  }

