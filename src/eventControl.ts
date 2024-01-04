/*
 *This script assigns event listeners to the buttons on the page
 *The buttons scroll to the corresponding section of the page
 */

const aboutButton = document.getElementById("about-btn") as HTMLButtonElement;
const projectsButton = document.getElementById(
  "projects-btn"
) as HTMLButtonElement;
const contactButton = document.getElementById(
  "contact-btn"
) as HTMLButtonElement;
const skillsButton = document.getElementById("skills-btn") as HTMLButtonElement;
const workExperienceButton = document.getElementById(
  "work-experience-btn"
) as HTMLButtonElement;

aboutButton.addEventListener("click", function () {
  const aboutSection = document.getElementById("about");
  aboutSection &&
    window.scroll({
      top: aboutSection.offsetTop - window.innerHeight * (1 / 4),
      behavior: "smooth",
    });
});

projectsButton.addEventListener("click", function () {
  const projectsSection = document.getElementById("projects");
  projectsSection &&
    window.scroll({
      top: projectsSection.offsetTop - window.innerHeight * (1 / 4),
      behavior: "smooth",
    });
});

contactButton.addEventListener("click", function () {
  const contactSection = document.getElementById("contact");
  contactSection &&
    window.scroll({
      top: contactSection.offsetTop - window.innerHeight * (1 / 4),
      behavior: "smooth",
    });
});

skillsButton.addEventListener("click", function () {
  const skillsSection = document.getElementById("skills");
  skillsSection &&
    window.scroll({
      top: skillsSection.offsetTop - window.innerHeight * (1 / 4),
      behavior: "smooth",
    });
});

workExperienceButton.addEventListener("click", function () {
  const workExperienceSection = document.getElementById("work-experience");
  workExperienceSection &&
    window.scroll({
      top: workExperienceSection.offsetTop - window.innerHeight * (1 / 4),
      behavior: "smooth",
    });
});

const audio = document.getElementById("audio") as HTMLAudioElement;
const playButton = document.getElementById("play-btn") as HTMLButtonElement;
const pauseButton = document.getElementById("pause-btn") as HTMLButtonElement;

playButton.addEventListener("click", function () {
  if (audio) {
    audio.volume = 0.05;
    audio.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  }
});

pauseButton.addEventListener("click", function () {
  audio.pause();
  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
});
