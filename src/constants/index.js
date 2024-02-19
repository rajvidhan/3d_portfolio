import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactnative,
    typescript,
    html,
    chatapp,
    css,
    blogapp,
    reactjs,
    redux,
    sql,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    socket,
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
      title: "MERN Stack✨Developer",
      icon: web,
    },
    {
      title: "React Native✨",
      icon: mobile,
    },
    {
      title: "Backend✨ Developer",
      icon: backend,
    },
    {
      title: "Web✨developer",
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
      name: "React Native ",
      icon:reactnative,
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
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "socket",
      icon: socket,
    },

    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js or Native",
      
      icon:react,
      iconBg: "#383E56",
      
      points: [
        "Develop new user-facing features using React.js or Native",
        'I have 8 months of experience in react js.',   
        "Skilled in developing responsive and intuitive user interfaces for web and mobile applications using React and React Native frameworks",       
      ],
    },
    {
      title: "MERN stack Developer",
      
      icon:backend1,
      iconBg: "#E6DEDD",
      
      points: [
        "Proficient in building scalable and robust web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack",
        "Skilled in setting up RESTful APIs, implementing authentication and authorization mechanisms, and optimizing performance for high-traffic applications."
        
      ],
    },
    {
      title: "Database Management",
     
      icon:web1,
      iconBg: "#383E56",
     
      points: [
        " Experienced in working with both SQL and NoSQL databases, including MongoDB for flexible data storage and SQL databases for relational data management.",
       
       
        
      ],
    },
    {
      title: "Backend",
      
      icon:full,
      iconBg: "#E6DEDD",
      
      points: [
        "Strong understanding of server-side programming concepts and backend architecture. Experienced in implementing authenticate/authorization mechanisms, and data validation/validation using middleware and server-side frameworks.",
       
        
      ],
    },
  ];
  
 
  const projects = [
   
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
        "It's an Education Website,In this project, instructors have the capability to create courses, while students can conveniently access and purchase them using the Razorpay payment gateway. Through an intuitive interface, instructors can upload course content, set pricing, and manage course details. Students navigate the platform to discover courses, view course previews, and make secure payments via Razorpay to enroll in their desired courses. This seamless integration of course creation and payment processing enhances the user experience, facilitating efficient learning and monetization for instructors.",
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
        {
          name: "express js ",
          color: "green-text-gradient",
        },
        {
          name: "OTP Verification ",
          color: "pink-text-gradient",
        },
        {
          name: "Mail-sending",
          color: "green-text-gradient",
        },
        {
          name: "Authentication",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      gitlink:"https://github.com/rajvidhan/Eucation-Website",
      source_code_link: "https://github.com/rajvidhan/Eucation-Website",
    },
    {
      name: "Blog Web",
      description:
        "MERN Stack Blog App,Built on the powerful combination of MongoDB, Express.js, React.js, and Node.js, This platform offers a modern and intuitive interface for bloggers of all levels. From creating captivating content to engaging with your audience, our app streamlines the entire blogging experience. Explore a range of features including rich text editing, user authentication, comment moderation, and real-time updates. ",
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
        {
          name: "flow-bitereact",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image:blogapp,
      gitlink:"https://github.com/rajvidhan/MernBlog",
      source_code_link: "https://github.com/rajvidhan/MernBlog",
    },
    {
      name: "Chat Web",
      description:
        "MERN Stack Chat App with Socket.io integration – your ultimate platform for seamless and real-time messaging! Powered by MongoDB, Express.js, React.js, and Node.js.With Socket.io, experience lightning-fast messaging, instant notifications, and real-time updates, ensuring smooth communication at every step. ",
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
        {
          name: "Socket io",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image:chatapp,
      gitlink:"https://github.com/rajvidhan/Chating_Website",
      source_code_link: "https://github.com/rajvidhan/Chating_Website",
    },
    
  ];
  
  export { services, technologies, experiences, projects };