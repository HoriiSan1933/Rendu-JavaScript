  const boutonDark = document.getElementById("darkModeBtn");

  boutonDark.addEventListener("click", function () { // action de l'utilisateur si click activation dark mode
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      boutonDark.textContent = "Mode jour";
    } else {
      boutonDark.textContent = "Mode nuit";
    }
  });

  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click",() =>{
    burger.classList.toggle("active");   // Si click appelle la fonction burger.active 
    nav.classList.toggle("active")
  });

