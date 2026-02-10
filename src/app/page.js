import Image from "next/image";

const Page = () => {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto flex flex-row items-center gap-12">
        
        {/* Text */}
        <div className="w-1/2 text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-(var(--primary))">Shivani</span>
          </h1>

          <p className="text-lg mb-4">
            Programmer Analyst Intern & Full-Stack Developer
          </p>

          <p className="text-gray-600 mb-6">
            I build clean, responsive web applications using React, Next.js,
            MERN stack, and Django. Currently gaining industry experience at
            Cepialabs.
          </p>

          <div className="flex flex-row gap-4 justify-start">
            <a
              href="/resume/Shivani-resume.pdf"
              download
              className="px-6 py-3 bg-purple-600 text-white rounded-xl text-center"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center w-1/2">
          <Image
            src="/image/profile.png"
            alt="Profile"
            width={280}
            height={280}
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
