import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    san_s_r_l__logo,
    axieme_logo,
    itauros_logo,
    aws,
    php,
    azure_devops,
    next,
    nest,
    express,
    bunatati_moldovenesti,
    axieme,
    jobit,
    emanuela,
    davide,
    remus
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Frontend developer',
        icon: mobile,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Dev ops',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Figma',
        icon: figma,
    },
    {
        name: 'Next JS',
        icon: next,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Php',
        icon: php,
    },
    {
        name: 'Nest Js',
        icon: nest,
    },
    {
        name: 'Express Js',
        icon: express,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Aws',
        icon: aws,
    },
    {
        name: 'Docker',
        icon: docker,
    },
    {
        name: 'Git',
        icon: git,
    },
    {
        name: 'Azure dev ops',
        icon: azure_devops,
    }
];

const experiences = [
    {
        title: 'Full stack Developer',
        company_name: 'Itauros',
        icon: itauros_logo,
        iconBg: '#E6DEDD',
        date: 'November 2023 - Present',
        points: [
            'Developing and maintaining web applications using React and Node and other related technologies (ExpressJs, Aws).',
            'Developing devops solution using AzureDevops.',
            'Implementing serveless solution using Amazon web services (Sqs, S3, Lambda, Step function, DynamoDb etc).',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'Axieme',
        icon: axieme_logo,
        iconBg: '#383E56',
        date: 'September 2019 - October 2023',
        points: [
            'Developing and maintaining web applications using Php, Javascript, Typescript and other related technologies (React, NextJs, NestJs, CodeIgniter).',
            'Collaborating with cross-functional teams including designers, product owner, and other developers to create high-quality products.',
            'Participating in code reviews and providing constructive feedback to other developers and members of team.',
        ],
    },
    {
        title: 'Machine learning researcher',
        company_name: 'San S.r.l',
        icon: san_s_r_l__logo,
        iconBg: '#383E56',
        date: 'March 2018 - July 2018',
        points: [
            'Develop an application using Python to analyze the ECG and identify the diagnosis.',
        ],
    },
];

const projects = [
    {
        name: 'Itauros',
        description:
            'Manage and developing several serverless projects in AWS cloud and implement devops solutions.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'node',
                color: 'green-text-gradient',
            },
            {
                name: 'express',
                color: 'green-text-gradient',
            },
            {
                name: 'aws',
                color: 'pink-text-gradient',
            },
            {
                name: 'devops',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        link: 'https://itauros.com/',
    },
    {
        name: 'Axieme',
        description:
            'Insurtech e-commerce application that allow users to search for insurance products, view estimated pricing and generate orders.',
        tags: [
            {
                name: 'js',
                color: 'blue-text-gradient',
            },
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'nest',
                color: 'green-text-gradient',
            },
            {
                name: 'php',
                color: 'green-text-gradient',
            },
            {
                name: 'sql',
                color: 'pink-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'pink-text-gradient',
            },
        ],
        image: axieme,
        link: 'https://www.vitanuova.it/',
    },
    {
        name: 'Bunatati moldovenesti',
        description:
            'Web application platform that allows users to search and book food products (all natural) in just a few click.',
        tags: [
            {
                name: 'javascript',
                color: 'blue-text-gradient',
            },
            {
                name: 'php',
                color: 'green-text-gradient',
            },
            {
                name: 'codeigniter',
                color: 'green-text-gradient',
            },
            {
                name: 'mariadb',
                color: 'pink-text-gradient',
            },
        ],
        image: bunatati_moldovenesti,
        link: 'https://www.bunatatimoldovenesti.com/',
    },
];

const testimonials = [
    {
        testimonial:
            'Iustin is a wonderful person to work with. He feels committed and responsible for the projects he works on. ' +
            'He is a self learner, he keeps informed about programming languages evolution, new frameworks and libraries and autonomously organizes to learn and to propose application of new solutions in the company he works for.',
        name: 'Emanuela Civatti',
        designation: 'Project manager',
        linkedin: 'https://www.linkedin.com/in/emanuelacivatti/',
        image: emanuela,
    },
    {
        testimonial: 'Iustin is reliable and committed to what he does. I would definitely recommend him as a full stack dev as well as a team leader.',
        name: 'Davide Taddei',
        designation: 'Cloud engineer',
        linkedin: 'https://www.linkedin.com/in/davide-taddei/',
        image: davide
    },
    {
        testimonial: 'Iustin is a wonderful developer. ' +
            'I was surprised of the way he listens to strategic business goals and feels really part of the team and of a project, aligning his effort and his skills to reach the goal together.',
        name: 'Remus Burlacu',
        designation: 'Frontend developer',
        linkedin: 'https://www.linkedin.com/in/marian-remus-burlacu/',
        image: remus
    }
];

export { services, technologies, experiences, testimonials, projects };
