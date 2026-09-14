const sections = document.querySelectorAll(".section");
const navTabs = document.querySelectorAll(".nav-tab");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const sectionId = entry.target.id;


                navTabs.forEach((tab) => {

                    tab.classList.remove("active");


                    if (
                        tab.dataset.section === sectionId
                    ) {

                        tab.classList.add("active");

                    }

                });

            }

        });

    },

    {
        threshold: 0.45
    }

);


sections.forEach((section) => {

    observer.observe(section);

});



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

