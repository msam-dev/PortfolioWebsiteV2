import projectImage1 from "../images/projectImage1.webp"
import projectImage2 from "../images/projectImage2.webp"
import animateImg from "../images/animate.webp"
import testImg from "../images/TestApp.webp"
import defaultImg from "../images/projectImage3.webp"
// import Blank from "../images/Blank.webp"

/*
    make project images 720 x 360px. 
    to crop images use https://resizepixel.com/edit
*/

const ProjectData = [
    {
        imageSrc: defaultImg,
        projectTitle: "QuizGame.top",
        projectSummary: "QuizGame.top is a live dynamic web app which has multiple geography based quizzes. I created this site using React, TypeScript, C#, SQLite, and it is hosted using AWS.",
        projectUrl: "https://QuizGame.top",
        codeUrl: "https://github.com/mSam-Dev/quizgame.top",
        detailsUrl: "https://github.com/mSam-Dev/quizgame.top/blob/main/ProjectDetails.md",
    },
    {
        imageSrc: projectImage1,
        projectTitle: "Portfolio Website",
        projectSummary: "This is the website you are using right now! msam.dev was fully designed and created by me using the React JavaScript library.",
        projectUrl: "/",
        codeUrl: "https://github.com/mSam-Dev/PortfolioWebsiteV2",
        detailsUrl: "https://github.com/mSam-Dev/PortfolioWebsiteV2/blob/master/ProjectDetails.md",
    },
    {
        imageSrc: testImg,
        projectTitle: "Android Test App",
        projectSummary: "A quiz app I made that lets you test your knowledge on a variety of topics. It also has user registration so you can keep track of your quiz scores. This app was made using java for android.",
        projectUrl: "https://youtu.be/hi1MHuar9vk",
        codeUrl: "https://github.com/mSam-Dev/TestApp",
        detailsUrl: "https://github.com/mSam-Dev/TestApp/blob/master/ProjectDetails.md",
    },
    {
        imageSrc: projectImage2,
        projectTitle: "Scientific Calculator",
        projectSummary: "A web-based calculator with some more functionality than many standard online calculators. It also includes day/night toggle. This website was made using HTML, CSS and JavaScript.",
        projectUrl: "/calculator.html",
        codeUrl: "https://github.com/msam-dev/PortfolioWebsiteV2/tree/master/public",
        detailsUrl: "https://github.com/msam-dev/PortfolioWebsiteV2/blob/master/public/Calculator-ProjectDetails.md",
    },
    {
        imageSrc: animateImg,
        projectTitle: "Android Animations",
        projectSummary: "A simple app I made to test and play with android’s image animation functionality. This app was made using java for android.",
        projectUrl: "https://www.youtube.com/watch?v=NXO6JAi1iu0",
        codeUrl: "https://github.com/mSam-Dev/AndroidAnimation",
        detailsUrl: "https://github.com/mSam-Dev/AndroidAnimation/blob/main/ProjectDetails.md",
    },
    
    /*
    {
        imageSrc: Blank,
        projectTitle: "Title 3",
        projectSummary: "This is sample text, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
        projectUrl: "url.com",
        codeUrl: "url.com",
        detailsUrl: "url.com",
    }
    */
];

export default ProjectData;