document.querySelectorAll(".kep-trigger").forEach((trigger) => {
    function kepMegnyitasa() {
        const kep = trigger.querySelector(".kep-ablak img");
        const szekcio = trigger.closest("section[id]");
        if (!kep || !szekcio) {
            return;
        }

        const parameterek = new URLSearchParams({
            src: kep.getAttribute("src"),
            alt: kep.alt,
            returnTo: szekcio.id
        });

        window.location.href = `kep.html?${parameterek.toString()}`;
    }

    trigger.addEventListener("click", kepMegnyitasa);
    trigger.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            kepMegnyitasa();
        }
    });
});
