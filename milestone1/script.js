"use strict";
// Get the form and the resume sections
const form = document.getElementById("resume-form");
const resumeDiv = document.getElementById("resume");
const personalInfoDiv = document.getElementById("personal-info");
const educationDiv = document.getElementById("resume-education");
const workExperienceDiv = document.getElementById("resume-work-experience");
const skillsDiv = document.getElementById("resume-skills");
// Listen for the form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get user input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const skills = document.getElementById("skills").value.split(',');
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
