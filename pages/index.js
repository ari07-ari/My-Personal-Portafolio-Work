document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".Proj");
  
    projects.forEach((project) => {
      const titleLink = project.querySelector("h2 a");
      const img = project.querySelector("img");
      const details = project.querySelector(".project-details");
      const backButton = project.querySelector(".back-button");
  
      // Function to toggle project details
      function toggleDetails() {
        if (details.style.display === "none" || details.style.display === "") {
          details.style.display = "block";
        } else {
          details.style.display = "none";
        }
      }
  
      // Add click event to the title link
      titleLink.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the link from navigating
        toggleDetails();
      });
  
      // Add click event to the image
      img.addEventListener("click", function () {
        toggleDetails();
      });
  
      // Add click event to the back button
      backButton.addEventListener("click", function () {
        toggleDetails();
      });
    });
  });