// simple animation placeholder
console.log("UI Loaded");

// Card reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Smooth counter + Scroll trigger

const counters = document.querySelectorAll(".counter");
const section = document.querySelector(".stats");

let started = false;

function startCounter() {
    if (started) return;

    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        let count = 0;

        const increment = target / 100;

        function update() {
            count += increment;

            if (count < target) {
                counter.innerText = Number.isInteger(target)
                    ? Math.floor(count)
                    : count.toFixed(1);

                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        }

        update();
    });

    started = true;
}

/* Run on load ALSO */
window.addEventListener("load", startCounter);

/* And also on scroll */
window.addEventListener("scroll", () => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        startCounter();
    }
});

// Page Transition

const transition = document.querySelector(".page-transition");

/* Fade IN when page loads */
window.addEventListener("load", () => {
    setTimeout(() => {
        transition.classList.add("loaded");
    }, 100);
});

/* Fade OUT when clicking links */
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (href && !href.startsWith("#")) {
            e.preventDefault();

            transition.classList.remove("loaded");
            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        }
    });
});