document.addEventListener("DOMContentLoaded", function() {
    const seeMoreBtn = document.getElementById("see-more-btn");
    const hiddenContent = document.querySelector(".hidden");
  
    seeMoreBtn.addEventListener("click", function() {
      if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        seeMoreBtn.textContent = "Show less";
      } else {
        hiddenContent.style.display = "none";
        seeMoreBtn.textContent = " See more";
      }
    });
  });                                       