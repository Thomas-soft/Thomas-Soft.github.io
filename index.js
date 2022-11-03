const txtAnim = document.getElementById("myDescription");

const presentation_contain_left = document.getElementById("presentation_contain_left");
const presentation_contain_center = document.getElementById("presentation_contain_center");
const presentation_contain_right = document.getElementById("presentation_contain_right");
const progress_bar = document.getElementById("progress_bar");

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

window.addEventListener("scroll", () =>
{
    let percentScroll = window.scrollY*100/(document.body.offsetHeight-window.innerHeight);

    if (percentScroll > 2)
    {
        presentation_contain_left.style.transform = "translateX(0)";
        presentation_contain_left.style.opacity = 1;
    }
    if (percentScroll > 12)
    {
        presentation_contain_right.style.transform = "translateX(0)";
        presentation_contain_right.style.opacity = 1;
    }
    if (percentScroll > 25)
    {
        presentation_contain_center.style.transform = "translateY(0)";
        presentation_contain_center.style.opacity = 1;
    }

    if (percentScroll > 38)
    {
        competences.style.transform = "translateY(0)";
        competences.style.opacity = 1;
    }

    if (percentScroll > 40)
    {
        front_end_progress.style.width = 90+'%';
        back_end_progress.style.width = 10+'%';
        python_progress.style.width = 70+'%';
        c_progress.style.width = 60+'%';
        js_progress.style.width = 40+'%';
        php_progress.style.width = 10+'%';
    }

    if (percentScroll > 70)
    {
        contact.style.transform = "translateY(0)";
        contact.style.opacity = 1;
    }
});