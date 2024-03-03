import { yoururls, seneca, rop } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Applications Developer Internship",
        company_name: "Region of Peel",
        icon: rop,
        iconBg: "#accbe1",
        date: "May 2023 - Current",
        points: [
            "Led the development and implementation of 20+ customized sofware applications for water and wastewater management, showcasing dynamic problem-solving and improving operational adaptability.",
            "Proactively executed routine maintenance, updates, and bug fixes, ensuring peak performance and enhancing user satisfaction, emphasizing a steadfast commitment to continuous improvement.",
            "Enhanced applications using Microsoft Power tools: SharePoint, Power Apps, Power Automate, and Power BI, contributing to streamlined workflows and improved data-driven decision-making.",
            "Utilized CMMS programs such as Hansen and IMT reports to produce comprehensive technical summaries for internal staff to enhance overall operational effectiveness.",
            "Collaborated closely with operators to support and enhance the digital work order process, demonstrating a keen understanding of the operational workflow for water and wastewater."
        ],
    },
    {
        title: "Back End Developer",
        company_name: "Seneca Polytechnic - Applied Research",
        icon: seneca,
        iconBg: "#fbc3bc",
        date: "February 2023 - April 2023",
        points: [
            "Responsible for coding, programming, quality assurance of applications for business clients, ensuring the delivery of cutting-edge applications.",
            "Collaborated seamlessly with the design team, contributing to the creation of compelling wireframes and prototypes.",
            "Coordinated contractor and client appointments in collaboration with internal staff through telephone, demonstrating effective scheduling and communication skills.",
            "Conducted unit testing and debugging to ensure high-quality outputs."
        ],
    },
    {
        title: "Front End Developer",
        company_name: "YourUrls",
        icon: yoururls,
        iconBg: "#b7e4c7",
        date: "June 2022 - August 2022",
        points: [
            "Supported scrum master with team communication and overlooked the sprint reviews",
            "Developed and designed the front end of websites for small business and large corporations."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/amina01hu',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ahussein0111/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Simple Calculator App',
        description: 'Developed a calculator app for Android using java.',
        link: 'https://github.com/amina01hu/simplecalculatorapp',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Happy Hippo App',
        description: 'Created an fullstack website in which you can create an account',
        link: 'https://github.com/amina01hu/happyhippo-app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Fragments Application',
        description: 'Fullstack website where you can store images and convert them by creating an account',
        link: 'https://github.com/amina01hu/fragments',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'My Custom Map',
        description: 'Fullstack about me page that showcases a map of all my frequented locations.',
        link: 'hhttps://github.com/amina01hu/my-custom-map',
    }
];