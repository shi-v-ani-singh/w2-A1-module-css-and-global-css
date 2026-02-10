// import React from 'react'
// import ExperienceItem from "../../components/ExperienceItem";

// const page = () => {


//     const experiences = [

//         {
//             role: "Programming Analyst Intern",
//             company: "Cepialabs",
//             duration: "Current",
//             points:
//                 [
//                     "Currently working as a Programmer Intern at Cepialabs.",
//                     "Enrolled in a structured training program across multiple technology domains.",
//                     "Selected Full-Stack Development as primary domain, AI/ML as secondary, and Agentic AI as tertiary.",
//                     "Gaining hands-on experience with modern development workflows and problem-solving."
//                 ],

//         },
//         {
//             role: "Web Development Intern",
//             company: "OctaNet",
//             duration: "2 Months (Online)",
//             points: [
//                 "Completed a learning-based internship through live MERN stack lectures.",
//                 "Focused on understanding core frontend and backend web development concepts.",
//                 "Built a responsive landing page as a frontend project.",
//                 "Strengthened practical knowledge of HTML, CSS, JavaScript, and React basics."
//             ],

//         }
//     ]

//     return (
//         <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
//             <h1 className="text-3xl font-bold">Experience</h1>

//             {experiences.map((experiences,index)=>(
//                 <ExperienceItem 
//                     key={index} role ={experiences.role} company={experiences.company} duration={experiences.duration} points= {experiences.points}  
//                 />
//             ))}
//         </div>

//     )
// }

// export default page
import React from "react";
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import styles from "./experience.module.css";

const Page = () => {
  const experiences = [
    {
      role: "Programming Analyst Intern",
      company: "Cepialabs",
      duration: "Current",
      points: [
        "Currently working as a Programmer Intern at Cepialabs.",
        "Enrolled in a structured training program across multiple technology domains.",
        "Selected Full-Stack Development as primary domain, AI/ML as secondary, and Agentic AI as tertiary.",
        "Gaining hands-on experience with modern development workflows and problem-solving.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "OctaNet",
      duration: "2 Months (Online)",
      points: [
        "Completed a learning-based internship through live MERN stack lectures.",
        "Focused on understanding core frontend and backend web development concepts.",
        "Built a responsive landing page as a frontend project.",
        "Strengthened practical knowledge of HTML, CSS, JavaScript, and React basics.",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={`heading ${styles.highlight}`}>Experience</h1>

      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          role={exp.role}
          company={exp.company}
          duration={exp.duration}
          points={exp.points}
        />
      ))}
    </div>
  );
};

export default Page;
