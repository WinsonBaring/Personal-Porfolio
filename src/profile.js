
const header_name = {
    name: "inson",
};

const skillset = [
    "About",
    "Skills",
    "Projects",
];
const intro = {
    intro:"Hi, I'm",
    name: "Winson Baring",
    about: "A Passionate Software Developer Experienced in Building Simple Website",
    highlight: "",
}



// manually add the image to the sections/Skills
// the name should match
const skills = {
    intro:"The skills,tools, and technologies that I am good at:",
    skillset:[
    {tool:{name: "react"}},
    {tool:{name: "spring"}},
    {tool:{name: "mysql"}},
    {tool:{name: "django"}},
    {tool:{name: "djangorest"}},
    {tool:{name: "npm"}},
    {tool:{name: "github"}},
    {tool:{name: "nextjs"}},
    {tool:{name: "vitejs"}},
    {tool:{name: "androidstudio"}},
    {tool:{name: "materialui"}},
    {tool:{name: "tailwindcss"}},
    {tool:{name: "docker"}},
    ]

}
const about = {
    intro:"About",
    title:"A Computer Science Student ",
    description:"I'm Winson Baring, a third-year Computer Science student at Cebu Institute of Technology University in Cebu City. With a strong passion for software development and AI, I've gained hands-on experience through various projects and a part-time role as a Software Developer at Wind's Gate Philippines. I thrive on solving complex problems and continually expanding my skill set, which includes Python, ReactJS, Django, and SQL, among others. I'm excited to apply my knowledge and enthusiasm for technology to real-world challenges and make a meaningful impact.",
}

const projects ={ 
    title: "Projects that I coded:",
    projects: [{
    image: "assets/Project.jpg",
    title:"Identity Your Animal", 
    description:"Web Application that uses AI to identify a type of animal",
    tools_used:["Python","Streamlit","Machine Learning","Github"],
    source_code: "https://github.com/WinsonBaring/Machine-Learning-Classification",
    link: "https://identify-your-animal.streamlit.app/"
    }, 
    {
    image: "assets/Project.jpg",
    title:"Techno-Dynamic-Learning V2 (TechnoDynamic V2)", 
    description:"Techno-Dynamic-Learning V2 is an advanced learning management system designed specifically for technopreneurship courses. Building upon the foundation of Techno-Dynamic-Learning V1, this extended version incorporates dynamic content generation and insightful suggestions based on frequently asked questions (FAQ) from students.",
    tools_used:["React","Django","Github","Docker","Material UI","Github","React","Tailwind","Github"],
    source_code: "https://github.com/WinsonBaring/techno-dynamic-v2",
    },
    {
    image: "assets/Project.jpg",
    title:"Task Management SpringBoot API", 
    description:"Task Management Application built with Java and Spring Boot. It allows users to create, view, update, and delete tasks.",
    tools_used:["SpringBoot","Github"],
    source_code: "https://github.com/WinsonBaring/Task-Management-Entities",
    },
    {
    image: "assets/Project.jpg",
    title:"Bank Management System Netbeans", 
    description:"A functino Bank Management System built using Netbeans and Java",
    tools_used:["Netbeans","Java","Xammp","MySql"],
    source_code: "https://github.com/WinsonBaring/Bank_Functional_OOP",
    },
   
]
}

const social_media = [
    {
        socialmedia:"linkedin",
        link:"https://www.linkedin.com/in/winson-baring-a1329b219/",
    },
    {
        socialmedia:"github",
        link:"https://github.com/WinsonBaring",
    },
    {
        socialmedia:"facebook",
        link:"https://www.facebook.com/Winsonismine",
    },
]



export {
    header_name,
    skillset,
    intro,
    skills,
    about,
    projects,
    social_media,

}