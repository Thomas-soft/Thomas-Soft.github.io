const txtAnim = document.getElementById("myDescription");

let lastScrollY = 0;

// let x_before = 0;
// let y_before = 0;
// let x_after = 0;
// let y_after = 0;
// let sleep = 0;
// let speed = 0;

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
    }
    else
    {
        navbar.style.height = 100+'px';
    }
    lastScrollY = window.scrollY;
});

// const generateBubbles = () =>
// {
//     window.addEventListener("mousemove", (e) =>
//     {
//         const bubble = document.createElement("div");
//         bubble.classList.add("bubble");
//         document.body.appendChild(bubble);
    
//         size = Math.random()*10+10;
    
//         bubble.style.width = size+'px';
//         bubble.style.height = size+'px';
//         y = e.pageY-size/2;
//         x = e.pageX-size/2;
//         bubble.style.top = y+'px';
//         bubble.style.left = x+'px';
        
//         translate = Math.random()*50;
//         plusMinus = Math.random() >= 0.5 ? 1 : -1;
//         bubble.style.setProperty('--x', x+translate*plusMinus+'px');
//         translate = Math.random()*50;
//         plusMinus = Math.random() >= 0.5 ? 1 : -1;
//         bubble.style.setProperty('--y', y+translate*plusMinus+'px');
//         setTimeout(() =>
//         {
//             bubble.remove();
//         }, 500);
//         setTimeout(() =>
//         {
//             if (x_before == x_after)
//             {
//                 x_before = e.clientX;
//                 y_before = e.clientY;
//             }
//             else
//             {
//                 x_after = x_before;
//                 y_after = y_before;
//             }
//             if (x_before-x_after+y_before-y_after != 0)
//             {
//                 speed = Math.abs(x_before-x_after+y_before-y_after);
//             }
//             if (speed < 200)
//             {
//                 speed = 200;
//             }
//             generateBubbles();
//         }, speed/2);
//     }, {once: true});
// };
// generateBubbles();