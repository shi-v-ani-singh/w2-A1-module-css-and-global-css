// import React from 'react'
// import styles from './contact.module.css'

// const page = () => {
//     return (
//         <div className='p-8 max-w-4xl mx-auto'>
//             <h1 className={`text-3xl font-bold mb-6 ${styles.highlight}`}>
//             Contact Me
//             </h1>
//             <p className="mb-8 text-gray-600 dark:text-gray-300">
//                 I’m open to internships, collaborations, and learning opportunities.
//                 Feel free to connect with me through any of the platforms below.
//             </p>
//             <p className="mb-6">
//                 You can reach out to me using the following platforms:
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//                 <a
//                     href="mailto:sivi0899@gmail.com"
//                     className="px-6 py-3 bg-purple-600 text-white rounded-xl text-center"
//                 >
//                     Email Me
//                 </a>
//                 <a
//                     href="https://www.linkedin.com/in/developershivani/"
//                     target="_blank"
//                     className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl text-center"
//                 >
//                     LinkedIn
//                 </a>

//                 <a
//                     href="https://github.com/shi-v-ani-singh"
//                     target="_blank"
//                     className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl text-center"
//                 >
//                     GitHub
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default page

import React from 'react';
import styles from './contact.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={`heading ${styles.highlight}`}>Contact Me</h1>

      <p className={styles.textGray}>
        I’m open to internships, collaborations, and learning opportunities.
        Feel free to connect with me through any of the platforms below.
      </p>

      <p className={styles.textNormal}>
        You can reach out to me using the following platforms:
      </p>

      <div className={styles.buttonGroup}>
        <a href="mailto:sivi0899@gmail.com" className={styles.buttonPrimary}>
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/developershivani/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonSecondary}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/shi-v-ani-singh"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buttonSecondary}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Page;
