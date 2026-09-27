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


/* PROJECT CASE STUDIES */

const projectDialog = document.querySelector("#project-dialog");
const projectCards = document.querySelectorAll(".project-card[data-project]");
const dialogTitle = document.querySelector("#dialog-title");
const dialogIntro = document.querySelector("#dialog-intro");
const dialogChallenge = document.querySelector("#dialog-challenge");
const dialogApproach = document.querySelector("#dialog-approach");
const dialogFocus = document.querySelector("#dialog-focus");
const dialogStack = document.querySelector("#dialog-stack");
const dialogClose = document.querySelector(".dialog-close");

const projectDetails = {
    psyduck: {
        challenge: "Bring trivia and word challenges into a quick, accessible mobile format.",
        approach: "Build short rounds around familiar game mechanics and a straightforward interface.",
        focus: "Game flow, mobile UX, and Google Play release management."
    },
    shadownet: {
        challenge: "Communication in shadow zones can be difficult when regular networks are unavailable.",
        approach: "Dedicated to the Indian Army, this project explores offline messaging between nearby devices over Bluetooth and Wi-Fi.",
        focus: "Communication for shadow zones, nearby connections, and mesh networking."
    },
    sports: {
        challenge: "Make it easier to find a place to play and book a session.",
        approach: "Bring venue discovery and turf booking into one sports-focused platform.",
        focus: "Sports facilities, venue discovery, and booking."
    },
    campus: {
        challenge: "Give students a clear way to report campus issues and check their status.",
        approach: "Keep issue reports and their updates together in one campus-focused tool.",
        focus: "Issue reporting, status updates, and campus services."
    }
};

function openProjectDetails(card) {
    const details = projectDetails[card.dataset.project];
    if (!details || !projectDialog) return;

    dialogTitle.textContent = card.querySelector(".project-info h3").textContent;
    dialogIntro.textContent = card.querySelector(".project-hover-info p").textContent.trim();
    dialogChallenge.textContent = details.challenge;
    dialogApproach.textContent = details.approach;
    dialogFocus.textContent = details.focus;

    dialogStack.replaceChildren(
        ...Array.from(card.querySelectorAll(".project-meta span"), (tag) => {
            const item = document.createElement("span");
            item.textContent = tag.textContent;
            return item;
        })
    );

    projectDialog.showModal();
}

projectCards.forEach((card) => {
    card.addEventListener("click", () => openProjectDetails(card));

    card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openProjectDetails(card);
    });
});

dialogClose?.addEventListener("click", () => projectDialog.close());

projectDialog?.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
});

