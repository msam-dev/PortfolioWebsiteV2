import projectImage1 from "../images/projectImage1.jpg"
import projectImage2 from "../images/projectImage2.jpg"
import projectImage3 from "../images/projectImage3.jpg"

/*
    project images must be 720 x 360px otherwise will look weird. 
    to crop images use resizepixel.com/edit
*/

const ProjectData = [
    {
        imageSrc: projectImage1,
        projectTitle: "Portfolio Website",
        projectSummary: "This is the website you are currently using.  It was fully designed by me and implemented using the React JavaScript library.",
        projectUrl: "url.com",
        codeUrl: "url.com",
        detailsUrl: "url.com",
    },
    {
        imageSrc: projectImage2,
        projectTitle: "title 2",
        projectSummary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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