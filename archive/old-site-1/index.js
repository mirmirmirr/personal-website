document.querySelectorAll(".vnav a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const nav = document.querySelector(".vnav");
    const firstLine = document.querySelectorAll(".vline")[0];
    const secondLine = document.querySelectorAll(".vline")[1];

    const content = document.querySelector(".content");
    const href = this.getAttribute("href");

    // // Trigger a reflow to reset the position
    // firstLine.getBoundingClientRect();
    // secondLine.getBoundingClientRect();

    // // Re-enable transitions
    // firstLine.style.transition = 'transform 0.5s ease, width 0.5s ease';
    // secondLine.style.transition = 'transform 0.5s ease, width 0.5s ease';

    // Hide the navigation
    content.classList.add("hidden");
    setTimeout(() => {
      nav.classList.add("hidden");
    }, 500);

    // Delay to allow the navigation to fade out
    setTimeout(() => {
      // Animate the second line sliding into the first line
      secondLine.classList.add("slide-in");
    }, 1000); // Delay should match the duration of the `.nav` animation

    setTimeout(() => {
      secondLine.remove();
    }, 1500);

    setTimeout(() => {
      // Add horizontal transition class
      firstLine.classList.add("hidden");
      secondLine.classList.add("hidden");
    }, 1500);

    setTimeout(() => {
      // Navigate to the new page
      window.location.href = href;
    }, 2500); // Delay to allow horizontal transition to complete
  });
});
