// Get the form and the resume sections
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDiv = document.getElementById("resume") as HTMLElement;

const personalInfoDiv = document.getElementById("personal-info") as HTMLElement;
const educationDiv = document.getElementById("resume-education") as HTMLElement;
const workExperienceDiv = document.getElementById("resume-work-experience") as HTMLElement;
const skillsDiv = document.getElementById("resume-skills") as HTMLElement;

// Listen for the form submission
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  // Get user input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');

  // Generate the resume sections dynamically
  personalInfoDiv.innerHTML = `
    <h3>Personal Information</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
  `;

  educationDiv.innerHTML = `
    <h3>Education</h3>
    <p>${education}</p>
  `;

  workExperienceDiv.innerHTML = `
    <h3>Work Experience</h3>
    <p>${workExperience}</p>
  `;

  skillsDiv.innerHTML = `
    <h3>Skills</h3>
    <ul>
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul>
  `;

  // Show the generated resume
  resumeDiv.style.display = "block";
});
