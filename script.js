// ================= HAMBURGER MENU =================
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("sidemenu");

if (openBtn && sideMenu) {
    openBtn.addEventListener("click", () => {
        sideMenu.classList.add("open-menu");
    });
}

if (closeBtn && sideMenu) {
    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("open-menu");
    });
}

// ================= ABOUT SECTION FADE-IN =================
document.addEventListener("DOMContentLoaded", () => {
    const aboutCols = document.querySelectorAll(".about-col-1, .about-col-2");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    aboutCols.forEach(col => observer.observe(col));
});

// ================= ABOUT TABS =================
function opentab(tabName, event) {
    document.querySelectorAll(".tab-contents").forEach(tab => {
        tab.classList.remove("active-tab");
    });

    document.querySelectorAll(".tab-links").forEach(link => {
        link.classList.remove("active-link");
    });

    document.getElementById(tabName)?.classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

window.opentab = opentab; // IMPORTANT for inline HTML onclick

// ================= SERVICE MODAL SYSTEM =================
const serviceCards = document.querySelectorAll(".service-card");
const serviceDetails = document.querySelectorAll(".service-details");
const backBtns = document.querySelectorAll(".back-btn");
const overlay = document.getElementById("modal-overlay");

function closeModal() {
    serviceDetails.forEach(modal => modal.classList.remove("active"));
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
}

serviceCards.forEach(card => {
    card.addEventListener("click", () => {
        const target = document.getElementById(card.dataset.target);
        if (!target) return;

        serviceDetails.forEach(m => m.classList.remove("active"));

        target.classList.add("active");
        overlay?.classList.add("active");
        document.body.style.overflow = "hidden";

        target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});

backBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
    });
});

overlay?.addEventListener("click", closeModal);