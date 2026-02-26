export const experienceData = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Lockheed Martin",
    duration: ["May 2025 - August 2025", "May 2024 - August 2024"],
    images: ["/cLogos/lockheed.png"],
    description: [
      <>
        Worked on the Software team supporting the{" "}
        <strong>MK41 Vertical Launch Systems (VLS)</strong>.
      </>,
      <>
        During my first summer, I focused on refactoring a Java Swing UI
        framework using a NetBeans IDE. I also collaborated with a team to
        design tracking algorithms for a search radar system using{" "}
        <span className="text-blue-500">Python</span> and MATLAB.
      </>,
      <>
        During my second summer, I worked on modernizing and automating build
        and deployment workflows for C/C++ applications on Linux. Using GitLab
        CI/CD and Docker, I created containerized pipelines that enhanced
        development speed and reliability. I also migrated legacy Makefile
        systems to CMake and integrated unit tests into CI pipelines, making the
        build process more maintainable and reliable for the whole team.
      </>,
    ],
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Johnson & Johnson",
    duration: ["September 2024 - December 2024"],
    images: ["/cLogos/jj.png"],
    description: [
      <>
        This experience was part of a term project where my group was tasked to
        find a client and work with to complete a project based on company
        needs.
      </>,
      <>
        At Johnson & Johnson, I focused on improving global data consistency and
        compliance by standardizing manufacturing process parameters across 18
        sites. Using SQL and automated workflows, I cleaned and structured data
        to support Good Manufacturing Practices (GMP) and streamline Product
        Quality Review (PQR) reporting. Working in Agile teams, I collaborated
        with cross-functional stakeholders to ensure accurate reporting and
        drive efficiency through scalable, engineering-driven solutions.
      </>,
    ],
  },
  {
    id: 3,
    title: "Student Researcher",
    company: "NASA",
    duration: ["January 2024 - May 2024"],
    images: ["/cLogos/nasa.png", "/cLogos/research.png"],
    description: [
      <>
        I worked on processing and enhancing video data from flow boiling
        experiments conducted aboard the International Space Station. I
        developed tools in Python and MATLAB using the scikit-image library and
        Mask R-CNN to segment and clarify thermal footage, helping visualize
        fluid behavior in microgravity environments. This work supported
        improved data analysis for scientific research and demonstrated the
        practical application of machine learning and image processing
        techniques.
      </>,
    ],
  },
];

export const projectData = [
  {
    id: 16,
    title: "FlyBy",
    stack: ["React", "Typescript", "Python", "FastAPI"],
    duration: ["February 2025"],
    images: ["/projects/flyby.png"],
    github: "https://github.com/SameriteRL/FlyBy",
    description: [
      "Second place winner of the 2025 NSBE x SHPE Climate Change & Sustainability Hackathon.",
      "FlyBy is a web application that leverages deep-learning computer vision to detect marine trash.",
    ],
  },
  {
    id: 15,
    title: "Asian Cafe Website + POS System",
    stack: ["Next.js", "Django", "PostgreSQL", "Dart", "Flutter"],
    duration: ["December 2024 - March 2025"],
    images: ["/projects/asianCafeHome.png"],
    github: "https://github.com/mirmirmirr/AsianCafe",
    description: [
      "This project is currently paused as of March 2025 because the business was sold to new owners.",
      "I'm developed this website and POS system to support a local restaurant. The goal was to improve their ordering system, enhance customer convenience, and create a system where they could access in person and online orders in one place.",
      "The frontend is built with Next.js, the backend is powered by Django with a PostgreSQL database, and the POS system is developed using Flutter for seamless cross-platform functionality on both Windows and iPadOS.",
    ],
  },

  {
    id: 11,
    title: "tomeeto",
    stack: ["React", "TailwindCSS", "Flask", "MySQL"],
    duration: ["September 2024 - Present"],
    images: ["/projects/tomeetohome.png", "/projects/tomeeto.png"],
    github: "https://github.com/tomeeto",
    description: [
      "tomeeto is a scheduling website that solves the logistics problem of figuring out when everyone is available to meet. Our goal was to simplify the process of communication with a simple and intuitive interface.",
      "The team and I worked on this project using Agile Methodologies, and I was responsible for frontend developement and design.",
    ],
  },
  {
    id: 12,
    title: "AIpaca",
    stack: ["React", "FlaskAPI", "MySQL"],
    duration: ["October 2024"],
    images: ["/projects/AIpaca.png"],
    github: "https://github.com/LawrenceMiao/AI-paca",
    description: [
      "AI-paca, submitted for SASE Hacks 2024, is a mobile app that lets users photograph animal sightings, which are then analyzed by a deep learning classifier to identify species. The goal was to help adolescents participate in conservation efforts using their phones and help researches have more access to data.",
    ],
  },
  {
    id: 13,
    title: "Cool Academic RPI Bot (CARPI)",
    stack: ["Discord.py", "React", "TailwindCSS"],
    duration: ["January 2023 - October 2024"],
    images: ["/projects/carpiScreen.png", "/projects/carpi.png"],
    github: "https://github.com/Project-CARPI",
    description: [
      "CARPI started off as a discord bot that provided RPI students with easy access to university resources from an application that they use daily. With the progress on the bot completed, we have shifted to also create an online web resource, starting with a custom 4-year planner.",
    ],
  },
];
