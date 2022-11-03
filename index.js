const txtAnim = document.getElementById("myDescription");

let lastScrollY = 0;

new Typewriter(txtAnim,{
    loop: true,
    deleteSpeed: 20
})
.changeDelay(50)
.typeString("<span style=\"color: #e2364d\">Site en cours de développement...</span>")
.pauseFor(3000)
.deleteAll()
.typeString("Site <span style=\"color: #ec69ec;\">bientôt opérationnel</span> !")
.pauseFor(1000)
.start();

window.addEventListener("scroll", () =>
{
    if (window.scrollY > lastScrollY)
    {
        navbar.style.height = 60+'px';
        hamburger.style.top = 17.5+'px';
    }
    else
    {
        navbar.style.height = 100+'px';
        hamburger.style.top = 37.5+'px';
    }
    lastScrollY = window.scrollY;
});

hamburger.addEventListener("click", () =>
{
    hamburger.classList.toggle("open");
    links_container.classList.toggle("open");
    main_page.classList.toggle("open");
});

window.addEventListener("click", (e) =>
{
    if (e.clientX < document.body.offsetWidth-200 && main_page.classList.contains("open"))
    {
        hamburger.classList.toggle("open");
        links_container.classList.toggle("open");
        main_page.classList.toggle("open");
    }
});