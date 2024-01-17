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
    full,
    react,
    backend1,
    web1,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
 const services = [
    {
      title: "Web✨ Developer",
      icon: web,
    },
    {
      title: "React✨  Developer",
      icon: mobile,
    },
    {
      title: "Backend✨ Developer",
      icon: backend,
    },
    {
      title: "Full Stack✨ developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      
      icon:react,
      iconBg: "#383E56",
      
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
       
      ],
    },
    {
      title: "Backend Developer",
      
      icon:backend1,
      iconBg: "#E6DEDD",
      
      points: [
        "In the backend i use node js.",
        "i have alse knowledge to find the erorrs throw debugging."
      ],
    },
    {
      title: "Web Developer",
     
      icon:web1,
      iconBg: "#383E56",
     
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
       
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Full stack Developer",
      
      icon:full,
      iconBg: "#E6DEDD",
      
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Password Generator",
      description:
        "A password generator is a software tool that creates random or customized passwords for users. It helps users create strong passwords that provide greater security for a given type of access.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      gitlink:"https://github.com/rajvidhan/PASSWORD-GENERATOR-",
      source_code_link: "https://demo-phi-drab.vercel.app/",
    },
    {
      name: "3D Portfolio",
      description:
        "My portfolio, built with React and Three.js, showcases my work using , interactive experiences, and seamless navigation. It  ensuring a visually engaging and responsive presentation across devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      gitlink:"https://github.com/rajvidhan/3d_portfolio",
      source_code_link: "https://3d-portfolio-hello.vercel.app/",
    },
    {
      name: "Eduction Website",
      description:
        "I leveraged the power of router technology to create a seamless and intuitive user experience. By implementing a router framework such as React Router or Vue Router.",
      tags: [
        {
          name: "React js ",
          color: "blue-text-gradient",
        },
        {
          name: "Node js",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      gitlink:"https://github.com/rajvidhan/Eucation-Website",
      source_code_link: "https://github.com/rajvidhan/Eucation-Website",
    },
    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };