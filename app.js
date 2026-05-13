const filterButtons = document.querySelectorAll(".faq-tools button");
const faqItems = document.querySelectorAll(".faq-list details");
const counters = document.querySelectorAll("[data-count]");
const revealItems = document.querySelectorAll(
  ".section, .quick-strip article, .control-deck, .timeline-item, .subject-grid article, .track, .exam-grid article, .checklist label, .faq-list details"
);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    faqItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.hidden = !shouldShow;
      if (!shouldShow) item.open = false;
    });

    const firstVisible = Array.from(faqItems).find((item) => !item.hidden);
    if (firstVisible) firstVisible.open = true;
  });
});

document.querySelectorAll(".checklist input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkbox.closest("label").classList.toggle("checked", checkbox.checked);
  });
});

const animateCounter = (item) => {
  const target = Number(item.dataset.count);
  const duration = 900;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    item.textContent = Math.round(target * eased).toLocaleString("zh-Hant");
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.7 }
  );

  counters.forEach((item) => counterObserver.observe(item));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
  });
} else {
  counters.forEach((item) => {
    item.textContent = Number(item.dataset.count).toLocaleString("zh-Hant");
  });
  revealItems.forEach((item) => item.classList.add("in-view"));
}
