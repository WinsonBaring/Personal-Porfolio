import { ReactOriginalWordmark } from 'devicons-react';
import { SpringOriginalWordmark } from 'devicons-react';    

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
    ]

}
const about = {
    intro:"About",
    title:"A Computer Science Student ",
    description:"I'm Winson Baring, a third-year Computer Science student at Cebu Institute of Technology University in Cebu City. With a strong passion for software development and AI, I've gained hands-on experience through various projects and a part-time role as a Software Developer at Wind's Gate Philippines. I thrive on solving complex problems and continually expanding my skill set, which includes Python, ReactJS, Django, and SQL, among others. I'm excited to apply my knowledge and enthusiasm for technology to real-world challenges and make a meaningful impact.",
}

const projects ={ 
    title: "Projects",
    projects: [{
    image: "assets/Project.jpg",
    title:"Identity Your Animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github","React","Tailwind","Github","React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    }, 
    {
    image: "assets/Project.jpg",
    title:"Identity your animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github","React","Tailwind","Github","React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    },
    {
    image: "assets/Project.jpg",
    title:"Identity your animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    },
    {
    image: "assets/Project.jpg",
    title:"Identity your animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    },
    {
    image: "assets/Project.jpg",
    title:"Identity your animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    },
    {
    image: "assets/Project.jpg",
    title:"Identity your animal", 
    description:"Web Application that Identify Animal",
    tools_used:["React","Tailwind","Github","React","Tailwind","Github","React","Tailwind","Github"],
    source_code: "http://github.identify.com",
    link: "http://animal.identify.com"
    }
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