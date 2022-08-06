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
        projectSummary: "This is the portfolio website you are using right now! It was fully designed and created by me. This website was made using React.",
        projectUrl: "/",
        codeUrl: "https://github.com/Sammy-Dev/PortfolioWebsiteV2",
        detailsUrl: "https://github.com/Sammy-Dev/PortfolioWebsiteV2/blob/master/ProjectDetails.md",
    },
    {
        imageSrc: projectImage2,
        projectTitle: "title 2",
        projectSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor a incididunt ut labore et dolore magna tip aliqua. Lorem ipsum dolor sit amet a it be tank a, consectetur adipiscing elit, sed do",
        projectUrl: "url.com",
        codeUrl: "url.com",
        detailsUrl: "url.com",
    },
    {
        imageSrc: projectImage3,
        projectTitle: "title 3",
        projectSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        projectUrl: "url.com",
        codeUrl: "url.com",
        detailsUrl: "url.com",
    }
];

export default ProjectData;