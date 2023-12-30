/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Prathamesh Sawant",
  title: "Hi all, I'm Prathamesh Sawant",
  subTitle: [
    emoji(
      "Skilled Software Engineer with 3 Years of demonstrated history of working with ASP.NET Stack with React, NodeJS, MongoDB and SQL."
    ),
    emoji(
      "Strong Engineering Professional with a Master's Degree focused in Information Systems from State University of New York at Binghamton University."
    )
  ],
  resumeLink:
    "https://drive.google.com/file/d/1HkCsP-402eq85LMw-U2yZ_HQ-NX6Ucb2/view?usp=drive_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pss-0501",
  linkedin: "https://www.linkedin.com/in/p-s-s-s/",
  gmail: "psawant507@gmail.com",
  //medium: "https://medium.com/@thedipeshpatil",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Skilled in ASP.NET & MERN Stack + (SQL and No SQL) Based Databases"),
    emoji("⚡ Integration of third party services such as AWS"),
    emoji("⚡ Familiar In - C#, JavaScript, Python, Java")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ASP.NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "State University of New York - Binghamton University",
      // logo: "https://i.ibb.co/f0Bnjnb/logo.jpg",
      subHeader: "Master of Science in Information Systems(STEM)",
      duration: "2023 - Present",
      desc: "Secured A GPA Of 3.7/4.0",
      descBullets:[
        "Relevant Coursework: Python Programming, Object Oriented Design Patterns, Database Systems, Web-based Programming"
      ]
    },
    {
      schoolName: "University Of Mumbai",
      // logo: "https://i.ibb.co/f0Bnjnb/logo.jpg",
      subHeader: "Bachelor Of Engineering in Electronics & Telecommunication Engineering",
      duration: "2016 - 2020",
      desc: "Secured A CGPA Of 6.3/10.0",
      descBullets:[
        "Relevant Coursework: Structured Programming Approach, Object Oriented Programming using Java, Database Management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer II - Backend",
    //   company: "FlexiLoans",
    //   companylogo: "https://iili.io/HzGvYmB.png",
    //   date: "Dec 2022 - Present",
    //   desc: "TBA",
    //   descBullets: []
    // },
    {
      role: "Software Developer",
      company: "Nexsus Solutions",
      //companylogo: "https://i.ibb.co/f8Qw6dT/bs.png",
      date: "Dec 2021 - Jul 2023",
      //desc: "Worked in Device Features Team.",
      descBullets: [
        "Developed an application tailored for State Bank of India, the largest bank in the India, which serves as a pivotal tool for seamlessly managing investment portfolios, increasing customer base by 15%",
        "Led the design and implementation of REST-APIs using the .NET framework, significantly improving data retrieval speed by 20 % and enabling seamless access to more than one million investment records",
        "Optimized application performance by identifying and resolving bottlenecks in C# code and SQL queries, resulting in a notable 25% reduction in loading times and enhancing user experience",
        "Implemented Agile Methodologies via careful planning, reduced software deployment time by 15 days",
        "Partnered with 10+ cross-functional teams to deliver software solutions on time and 66% below budget"
      ]
    },
    {
      role: "Trainee Software Developer",
      company: "Nexsus Solutions",
      companylogo:
        //"https://i.ibb.co/XS737zY/jio-logo-7720-D2-E7-BA-seeklogo-com.png",
        "https://i.ibb.co/pwr6vq0/download.jpg",
      date: "Dec 2020 - Dec 2021",
      // desc: "Department of Automation Testing",
      descBullets: [
        "Create and implement UI requirements using ASP.NET, JS/jQuery, HTML, and CSS, resulting in a seamless and intuitive user experience, and contributing to a 20% increase in user engagement",
        "Coordinated and executed a database migration with a seamless transition from MicrosoftSQL to PostgreSQL, all achieved with an ambitious 2-month timeframe & saved 10% of project cost",
        "Built database objects (T-SQL, triggers, stored procedures, functions, and jobs) to support responsive data access",
        "Reviewed code and conducted testing for 3 additional features on the newly designed web app that increased contributions by 12%"
      ]
    }
    // {
    //   role: "Software Developer",
    //   company: "Imprimo",
    //   companylogo: "https://i.ibb.co/r4pGZm4/imprimo-2dc135c0.png",
    //   date: "Apr 2019 - Mar 2020",
    //   desc: "Developed the website for Imprimo, A Subsidiary of Ricoh India.",
    //   descBullets: [
    //     "Developed the E-Commerce website for Imprimo Business Solution’s products and took complete ownership and maintenance including Search Engine Optimisation.",
    //     "Used Java SpringBoot and MySQL on the backend and ReactJS on the frontend."
    //   ]
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Complete ASP.Net Web Forms with ADO.Net From Scratch",
      subtitle: "Issued JUN 2022 · No Expiration Date",
      image:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-f8b3e4f0-565f-466b-b9b7-809270e25872.jpg?v=1655226570000",
      imageAlt: "ASP.NET WEB FORMS",
      showImage: true,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-f8b3e4f0-565f-466b-b9b7-809270e25872/"
        }
      ]
    },
    {
      title: "Asp.Net MVC 5 - Ultimate Guide - In depth & Sample Project",
      subtitle: "Issued MAY 2023 · No Expiration Date",
      image:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-7af3ecc6-a60d-41e7-998b-db1aebbadbc8.jpg?v=1682965216000",
      imageAlt: "Asp.Net MVC 5 - Ultimate Guide",
      showImage: true,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-7af3ecc6-a60d-41e7-998b-db1aebbadbc8/"
        }
      ]
    },
    {
      title: "Project Management Interview Preparation - Get a Job as a PM",
      subtitle: "Issued DEC 2023 · No Expiration Date",
      image:
        "https://udemy-certificate.s3.amazonaws.com/image/UC-b083ebbe-2056-4a6d-8af5-191aba25cb41.jpg?v=1703305912000",
      imageAlt: "Project Management",
      showImage: true,
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-b083ebbe-2056-4a6d-8af5-191aba25cb41/"
        }
      ]
    }
    // {
    //   title: "Project Management Interview Preparation - Get a Job as a PM",
    //   subtitle:
    //     "Issued DEC 2023 · No Expiration Date",
    //   image: "https://udemy-certificate.s3.amazonaws.com/image/UC-f8b3e4f0-565f-466b-b9b7-809270e25872.jpg?v=1655226570000",
    //   imageAlt: "Project Management",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://www.udemy.com/certificate/UC-b083ebbe-2056-4a6d-8af5-191aba25cb41/"
    //     }
    //   ]
    // }

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Some of the best blogs that I have came across",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@wijithbandara/best-practices-in-coding-9b9ffbdbfe27",
      title: "Best Practices in Coding",
      description:
        "This article will detail the most important best practices when writing readable code."
    },
    {
      url: "https://blog.logrocket.com/creating-offline-first-react-native-app/",
      title: "Creating an offline-first React Native app",
      description: "Five ways to implement an offline-first app in React Native"
    },
    {
      url: "https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec",
      title: "10 JavaScript Promise Challenges Before You Start an Interview",
      description: "10 code challenges about Promise, from basic to advanced."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "HOD of Website Committee for Spandan 2019",
      subtitle: "Xavier Institute Of Engineering"
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    },
    {
      title: "Resource Person - Android Workshop",
      subtitle: "Xavier Institute Of Engineering"
      // slides_url: "https://bit.ly/saadpasta-slides",
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 607-222-0154",
  email_address: "psawant507@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
