/*NAVIGATION*/

const navTabs = document.querySelectorAll(".nav-tab");
const sections = document.querySelectorAll(".section");


/* CLICK → SMOOTH SCROLL*/

navTabs.forEach((tab) => {

    tab.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = tab.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (!targetSection) return;

        const navbarHeight = 100;

        const targetPosition =
            targetSection.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* -----------------------------------------
   SCROLL → ACTIVE NAVIGATION
----------------------------------------- */

function updateActiveNav() {

    const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSection = section.id;
        }

    });


    /* If we're at the very bottom,
       activate the last section */

    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
    ) {
        currentSection = sections[sections.length - 1].id;
    }


    navTabs.forEach((tab) => {

        const sectionId =
            tab.getAttribute("data-section");

        tab.classList.toggle(
            "active",
            sectionId === currentSection
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

window.addEventListener(
    "load",
    updateActiveNav
);



/* MOUSE GLOW */

const cursorGlow =
    document.querySelector(".cursor-glow");


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);



/* MAGNETIC SOCIAL BUTTONS */

const socialButtons =
    document.querySelectorAll(
        ".social-links a"
    );


socialButtons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px, ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0, 0)";

        }
    );

});

