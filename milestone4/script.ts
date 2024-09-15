// Get references to form and output section
const form = document.getElementById('resumeForm') as HTMLFormElement;
const output = document.getElementById('resumeOutput') as HTMLElement;

interface ResumeData {
    name: string;
    email: string;
    phone?: string;
    education: {
        school: string;
        degree: string;
        gradYear: number;
    };
    workExperience?: {
        company?: string;
        role?: string;
        years?: number;
    };
    skills?: string[];
}

// Resume data model
let resumeData: ResumeData;

// Function to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const gradYear = parseInt((document.getElementById('gradYear') as HTMLInputElement).value);
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const years = parseInt((document.getElementById('years') as HTMLInputElement).value);
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Create or update the resume object
    resumeData = {
        name,
        email,
        phone,
        education: {
            school,
            degree,
            gradYear,
        },
        workExperience: {
            company,
            role,
            years,
        },
        skills: skills.map(skill => skill.trim()),
    };

    // Generate and display resume
    generateResume(resumeData);
});

function generateResume(data: ResumeData) {
    let resumeHTML = `
        <h2 contenteditable="true" data-field="name">${data.name}</h2>
        <p>Email: <span contenteditable="true" data-field="email">${data.email}</span></p>
        <p>Phone: <span contenteditable="true" data-field="phone">${data.phone ? data.phone : 'N/A'}</span></p>

        <h3>Education</h3>
        <p><span contenteditable="true" data-field="degree">${data.education.degree}</span> from 
        <span contenteditable="true" data-field="school">${data.education.school}</span> 
        (Graduated: <span contenteditable="true" data-field="gradYear">${data.education.gradYear}</span>)</p>
    `;

    if (data.workExperience?.company && data.workExperience?.role) {
        resumeHTML += `
            <h3>Work Experience</h3>
            <p><span contenteditable="true" data-field="role">${data.workExperience.role}</span> 
            at <span contenteditable="true" data-field="company">${data.workExperience.company}</span> 
            (<span contenteditable="true" data-field="years">${data.workExperience.years}</span> years)</p>
        `;
    }

    if (data.skills && data.skills.length > 0) {
        resumeHTML += `
            <h3>Skills</h3>
            <ul>
                ${data.skills.map((skill, index) => `<li contenteditable="true" data-field="skills" data-index="${index}">${skill}</li>`).join('')}
            </ul>
        `;
    }

    output.innerHTML = resumeHTML;

    // Add event listeners to editable sections
    // enableEditing();
}

// // Function to enable editing on all contenteditable sections
// function enableEditing() {
//     const editableElements = output.querySelectorAll('[contenteditable="true"]');

//     editableElements.forEach(element => {
//         element.addEventListener('blur', (event) => {
//             const target = event.target as HTMLElement;
//             const field = target.getAttribute('data-field');
//             const index = target.getAttribute('data-index');

//             // if (field && resumeData) {
//             //     if (field === 'skills' && index) {
//             //         // Handle skills array
//             //         resumeData.skills[parseInt(index)] = target.innerText;
//             //     } else if (field in resumeData) {
//             //         (resumeData as any)[field] = target.innerText;
//             //     } else if (field in resumeData.education) {
//             //         resumeData.education[field as keyof ResumeData['education']] = target.innerText;
//             //     } else if (resumeData.workExperience && field in resumeData.workExperience) {
//             //         resumeData.workExperience[field as keyof ResumeData['workExperience']] = target.innerText;
//             //     }
//             }
//         });
//     });
// }
