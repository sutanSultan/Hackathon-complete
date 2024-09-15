// Get references to form, output section, and share section
const form = document.getElementById('resumeForm') as HTMLFormElement;
const output = document.getElementById('resumeOutput') as HTMLElement;
const shareSection = document.getElementById('shareSection') as HTMLElement;
const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
const downloadPDFButton = document.getElementById('downloadPDF') as HTMLButtonElement;

// Resume data model
interface ResumeData {
    username: string;
    name: string;
    email: string;
    phone?: string;
    // other fields...
}

let resumeData: ResumeData;

// Function to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values from form
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    // Update the resume object
    resumeData = {
        username,
        name,
        email,
        phone,
    };

    // Generate and display the resume
    generateResume(resumeData);

    // Generate the shareable URL
    const baseUrl = `https://your-app.vercel.app/${resumeData.username}`;
    resumeLink.href = baseUrl;
    resumeLink.textContent = baseUrl;
    shareSection.style.display = 'block';
});

// Function to generate and display the resume
function generateResume(data: ResumeData) {
    let resumeHTML = `
        <h2>${data.name}</h2>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone ? data.phone : 'N/A'}</p>
        <!-- Add other fields like education, work experience, skills, etc. -->
    `;
    output.innerHTML = resumeHTML;
}

// Event listener to download the resume as a PDF
downloadPDFButton.addEventListener('click', () => {
    downloadResumeAsPDF();
});

// Function to download the resume as a PDF
function downloadResumeAsPDF() {
    const resumeContent = output.innerHTML;
    const printWindow = window.open('', '', 'height=650,width=900');
    printWindow!.document.write('<html><head><title>Resume PDF</title>');
    printWindow!.document.write('</head><body >');
    printWindow!.document.write(resumeContent);
    printWindow!.document.write('</body></html>');
    printWindow!.document.close();
    printWindow!.print();
}
// Function to download the resume as a PDF using html2pdf.js
// function downloadResumeAsPDF() {
//     const element = document.getElementById('resumeOutput');
//     html2pdf().from(element).save(`${resumeData.username}-resume.pdf`);
// }
