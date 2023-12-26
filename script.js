document.addEventListener("DOMContentLoaded", function () {
  var experienceSections = document.querySelectorAll(".experience-section");

  experienceSections.forEach(function (experienceSection) {
    var dropdownButton = experienceSection.querySelector(".dropdown-button");
    var experienceContent = experienceSection.querySelector(
      ".experience-content"
    );

    if (dropdownButton) {
      dropdownButton.addEventListener("click", function () {
        var isCollapsed = experienceSection.classList.toggle("collapsed");
        experienceContent.style.maxHeight = isCollapsed
          ? "0px"
          : experienceContent.scrollHeight + "px";
      });

      // Set initial state based on the "collapsed" class
      var isInitiallyCollapsed =
        experienceSection.classList.contains("collapsed");
      experienceContent.style.maxHeight = isInitiallyCollapsed ? "0px" : "auto";
    }
  });
});
