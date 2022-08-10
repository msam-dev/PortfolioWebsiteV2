import projectImage1 from "../images/projectImage1.jpg"
import projectImage2 from "../images/projectImage2.jpg"
import projectImage3 from "../images/projectImage3.jpg"

/*
    project images must be 720 x 360px otherwise will look weird. 
    to crop images use https://resizepixel.com/edit
*/

const ProjectData = [
    {
        imageSrc: projectImage1,
        projectTitle: "Portfolio Website",
        projectSummary: "This is the portfolio website you are using right now! It was fully designed and created by me. This website was made using React (HTML, CSS and JavaScript).",
        projectUrl: "/",
        codeUrl: "https://github.com/Sammy-Dev/PortfolioWebsiteV2",
        detailsUrl: "https://github.com/Sammy-Dev/PortfolioWebsiteV2/blob/master/ProjectDetails.md",
    },
    {
        imageSrc: projectImage2,
        projectTitle: "Scientific Calculator",
        projectSummary: "This is a web-based calculator with some more functionality than many standard online calculators. It also includes day/night toggle. This website was made using HTML, CSS and JavaScript.",
        projectUrl: "/calculator.html",
        codeUrl: "https://github.com/Sammy-Dev/Scientifc-Calculator",
        detailsUrl: "https://github.com/Sammy-Dev/Scientifc-Calculator/blob/main/ProjectDetails.md",
    },
    {
        imageSrc: projectImage3,
        projectTitle: "Title 3",
        projectSummary: "This is sample text, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        projectUrl: "url.com",
        codeUrl: "url.com",
        detailsUrl: "url.com",
    }
];

export default ProjectData;