// Animate skill bars on load
window.addEventListener("load", () => {
  document.querySelectorAll(".fill").forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});

// Download resume as PDF (simple print to PDF)
document.getElementById("downloadBtn").addEventListener("click", () => {
  window.print();
});