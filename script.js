
function getSaudacao() {
  var hora = new Date().getHours();
  var saudacao;

  if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde!";
  } else {
    saudacao = "Boa noite!";
  }

  var el = document.getElementById("greetingMsg");
  if (el) el.textContent = saudacao;
}

function configurarFiltros() {
  var botoes = document.querySelectorAll(".filter-btn");
  var cards  = document.querySelectorAll(".projeto-card");

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      var cat = this.dataset.cat;
      
      for (var j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("active");
      }
      this.classList.add("active");

      for (var k = 0; k < cards.length; k++) {
        if (cat === "Todos" || cards[k].dataset.cat === cat) {
          cards[k].classList.remove("hidden");
        } else {
          cards[k].classList.add("hidden");
        }
      }
    });
  }
}

function configurarHamburger() {
  var btn   = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  if (!btn || !links) return;

  btn.addEventListener("click", function () {
    links.classList.toggle("open");
  });

  var navLinks = document.querySelectorAll(".nav-link");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      links.classList.remove("open");
    });
  }
}


function configurarBtnTopo() {
  var btn = document.getElementById("btnTopo");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btn.classList.add("visivel");
    } else {
      btn.classList.remove("visivel");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function configurarNavAtivo() {
  var secoes   = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    var atual = "";

    for (var i = 0; i < secoes.length; i++) {
      if (window.scrollY >= secoes[i].offsetTop - 100) {
        atual = secoes[i].id;
      }
    }

    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
      if (navLinks[j].getAttribute("href") === "#" + atual) {
        navLinks[j].classList.add("active");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  getSaudacao();
  configurarFiltros();
  configurarHamburger();
  configurarBtnTopo();
  configurarNavAtivo();
});
