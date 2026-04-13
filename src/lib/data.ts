import { PersonalInfo, Skill, Language, TimelineItem, Project } from './types';

export const personalInfo: PersonalInfo = {
  name: "Carlota Lemos",
  title: "Computer Engineering Student",
  bio: "I'm Carlota Lemos, a Computer Engineering student, building a strong academic foundation in software engineering while focusing on Front-End development to create seamless and user-friendly digital experiences.",
  bioParagraph2: "Currently studying at ISEP (Instituto Superior de Engenharia do Porto), I'm in my 2nd year and expected to complete my BSc in Computer Engineering in 2027. My passion lies in Front-End development, working with technologies like React, and I also enjoy building applications with Java.",
  bioHomeExtended:
    "I am currently pursuing a bachelor's degree in Computer Engineering at Instituto Superior de Engenharia do Porto (ISEP), expected to be completed in 2027. Since the beginning of my studies, I have been particularly drawn to Front-End development, where I discovered the perfect balance between creativity and technology. I enjoy working with React and modern web technologies to build intuitive interfaces, while strengthening my foundation in Java, an essential part of my academic journey.",
  email: "carlota.lemos48@gmail.com",
  linkedin: "https://www.linkedin.com/in/carlotamlemos",
  github: "https://github.com/carlotalemos",
  cv: "/docs/cv.pdf",
};

export const skills: Skill[] = [
  { name: "Java", category: "technical" },
  { name: "C", category: "technical" },
  { name: "Assembly", category: "technical" },
  { name: "Python", category: "technical" },
  { name: "SQL", category: "technical" },
  { name: "HTML", category: "technical" },
  { name: "CSS", category: "technical" },
  { name: "React", category: "technical" },
  { name: "Tailwind CSS", category: "technical" },
  { name: "JavaFX", category: "technical" },
  { name: "macOS", category: "tools" },
  { name: "Microsoft", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Affinity", category: "tools" },
  { name: "Canva", category: "tools" }
];

export const languages: Language[] = [
  { name: "PORTUGUESE", level: "NATIVE" },
  { name: "ENGLISH", level: "B2" },
  { name: "SPANISH", level: "A2" }
];

export const timeline: TimelineItem[] = [
  {
    title: "Best Project - Logistics on Rails",
    organization: "ISEP",
    date: "JAN 2026",
    description: "Developed a railway logistics management system, integrating warehouse and freight operations with route planning, inventory control, and network optimization algorithms to ensure efficient and reliable railroad operations.",
    certificate: "/docs/logistics-on-rails.pdf"
  },
  {
    title: "Design Department Coordinator",
    organization: "NEI-ISEP",
    date: "JAN 2025 - Present",
    description: "Coordinating the Image Department, I am responsible for maintaining a consistent visual identity and ensuring clear and engaging communication across all media."
  },
  {
    title: "Ambassador",
    organization: "CGI Portugal",
    date: "AUG 2025 - Present",
    description: "Focused on representing CGI within the academic community. Committed to connecting students with industry insights, sharing knowledge, and encouraging innovation."
  },
  {
    title: "Best Project - Railroad Simulator",
    organization: "ISEP",
    date: "JUL 2025",
    description: "Developed a railway network simulation system in Java with a JavaFX interface, enabling map creation, train routing and scheduling, and passenger and cargo transport monitoring, supported by route optimization algorithms and system modelling.",
    certificate: "/docs/railroad-simulator.pdf"
  },
  {
    title: "Design Department Member",
    organization: "NEI-ISEP",
    date: "JUL 2025 - JAN 2026",
    description: "I collaborated with the team to create visual content that strengthens the organization's image and effectively conveys its initiatives and values, namely through the design of event pages, social media content, and the creation of a complete visual identity for each event."
  },
  {
    title: "Participant",
    organization: "ENEI2025",
    date: "APR 2025",
    description: "During the event, I attended talks and workshops on emerging technologies, took part in networking activities with students and professionals, and explored new perspectives within the field of Computer Engineering.",
    certificate: "/docs/ENEI_2025.pdf"
  },
  {
    title: "Informatics Department Member",
    organization: "NEI-ISEP",
    date: "OCT 2024 - JUL 2025",
    description: "Developed websites based on design prototypes provided by the design department and provided IT support during events, ensuring smooth technical operations and a reliable digital experience."
  },
  {
    title: "BSc in Computer Engineering",
    organization: "ISEP",
    date: "SEP 2024 - Present",
    description: "Currently pursuing a Bachelor’s degree in Computer Engineering, with a strong focus on software development and algorithms, building a solid foundation in creating efficient and reliable technological solutions."
  }
];

export const projects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    technology: "react",
    image: "/assets/images/project-cards/portfolio.png",
    date: "FEB 2026",
    description: "A modern, high-performance portfolio website designed and developed to showcase my professional journey, technical skills, and project portfolio in an elegant and user-friendly manner. All interface design and user experience planning were completed beforehand in Figma, allowing the visual structure, layout, and interaction flows to be fully defined and validated prior to development.\n" +
        "\n" +
        "Built with Next.js and React, the website leverages cutting-edge web technologies. The design emphasizes clean aesthetics and intuitive navigation, featuring a minimalist black-and-white color scheme with subtle blue accents.\n" +
        "\n" +
        "Key highlights include a fully responsive layout that adapts seamlessly across all devices, animated scrolling text components for dynamic visual interest, and a horizontal image gallery with smooth scrolling interactions. The site architecture follows best practices, using a component-based structure and clear separation of concerns through a structured data layer.\n" +
        "\n" +
        "Every aspect of the user experience has been carefully crafted, from hover animations and smooth transitions to optimized image loading and accessible navigation.\n" +
        "\n" +
        "This project demonstrates proficiency in modern front-end development, strong attention to detail in UI/UX design, and the ability to create polished, production-ready web applications.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubURL: "https://github.com/carlotalemos/portfolio",
    figmaURL: "https://www.figma.com/design/xtJzu8KnNOkv0xKSzMgGMa/Untitled?node-id=0-1&t=KMfChrje0W7yzfZU-1",
    images: ["/assets/images/portfolio/1.png", "/assets/images/portfolio/2.png", "/assets/images/portfolio/3.png", "/assets/images/portfolio/4.png", "/assets/images/portfolio/5.png", "/assets/images/portfolio/6.png", "/assets/images/portfolio/7.png", "/assets/images/portfolio/8.png", "/assets/images/portfolio/9.png", "/assets/images/portfolio/10.png"]
  },
  {
    slug: "logistics-on-rails",
    title: "Logistics on Rails",
    technology: "java",
    image: "/assets/images/project-cards/LAPR3.png",
    date: "SEP 2025 - JAN 2026",
    description: "This project was developed as part of the 3rd Semester Integrative Project for the 2025/2026 academic year. It focuses on the design and implementation of a software application intended to manage warehouse operations and freight logistics within railway systems.\n" +
        "\n" +
        "The system enables the modelling and coordination of warehouses, railway infrastructure, stations, routes, and cargo movements, addressing real-world operational constraints associated with rail-based logistics. The solution integrates multiple technical components, combining high-level application logic, relational database management, and low-level system modules.\n" +
        "\n" +
        "Core functionalities include warehouse inventory control, freight handling, coordination between warehouses and railway networks, route planning, and the monitoring of operational and environmental conditions.\n" +
        "\n" +
        "The project was developed using an iterative and incremental SCRUM-based methodology, with a strong emphasis on modular design, data consistency, and system reliability.\n" +
        "\n" +
        "This work was carried out collaboratively by a team of five members, promoting effective teamwork, task distribution, and coordinated development practices.\n" +
        "\n" +
        "The project was recognised as one of the top three projects of the academic year, with no ranking distinction among them.",
    features: [
      "Warehouse management with inventory control and cargo handling",
      "Modelling of railway infrastructure including stations, tracks, and routes",
      "Coordination of freight logistics between warehouses and railway networks",
      "Route planning and optimisation for railway freight transport",
      "Support for FIFO and FEFO inventory management strategies",
      "Environmental monitoring of goods using sensor data",
      "Relational database design with advanced PL/SQL queries",
      "Graph-based algorithms for logistics and network optimisation"
    ],
    technologies: ["Java", "C", "Assembly (RISC-V)", "Oracle Database", "PL/SQL", "Data Structures"],
    githubURL: "https://github.com/carlotalemos/LAPR3-integrative-project",
    certificate: "/certificates/logistics-on-rails.pdf",
    images: ["/assets/images/sem3pi/1.jpg", "/assets/images/sem3pi/2.jpg", "/assets/images/sem3pi/3.jpg", "/assets/images/sem3pi/4.jpg", "/assets/images/sem3pi/5.jpg", "/assets/images/sem3pi/6.jpg", "/assets/images/sem3pi/7.jpg", "/assets/images/sem3pi/8.jpg", "/assets/images/sem3pi/9.jpg", "/assets/images/sem3pi/10.jpg", "/assets/images/sem3pi/11.jpg", "/assets/images/sem3pi/12.jpg", "/assets/images/sem3pi/13.jpg", "/assets/images/sem3pi/14.jpg", "/assets/images/sem3pi/15.jpg"]
  },
  {
    slug: "clinic-website",
    title: "Clinic Website",
    technology: "react",
    image: "/assets/images/project-cards/website.png",
    date: "2025 - Present",
    description: "Official web application for Patrícia Bacelar Psicologia Clínica, a professional psychology clinic website designed to establish a trustworthy and accessible online presence. The platform serves as a comprehensive digital gateway for clients seeking psychological services, providing detailed information about therapeutic approaches, clinic facilities, and professional expertise. Built with Next.js and React, the application features a clean, calming design that reflects the clinic's core values of empathy, confidentiality, and professional care. The website architecture includes dedicated service pages for clinical psychology, couples therapy, family therapy, group therapy, meditation sessions, and workshops, each with comprehensive descriptions to help potential clients make informed decisions. A key feature is the integrated contact management system with a validated form, real-time feedback, and a password-protected admin panel for managing client inquiries efficiently. The image gallery showcases the clinic's welcoming environment, emphasizing comfort and privacy. The responsive, mobile-first design ensures accessibility across all devices, while thoughtful animations and transitions create a smooth, professional user experience.",
    features: [
      "Comprehensive service pages with detailed therapy descriptions",
      "Interactive FAQ section with expandable answers for common questions",
      "Image gallery showcasing clinic facilities and environment",
      "Password-protected admin panel for managing client inquiries",
      "Fully responsive design optimized for mobile, tablet, and desktop",
      "Smooth animations and transitions",
      "PostgreSQL database integration for secure data management",
      "Professional branding consistent with clinic's identity",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubURL: "https://github.com/carlotalemos/website-patricia_bacelar_psicologia",
    websiteURL: "https://patriciabacelarpsicologia.netlify.app/",
    images: ["/assets/images/clinic-website/1.png", "/assets/images/clinic-website/2.png", "/assets/images/clinic-website/3.png", "/assets/images/clinic-website/4.png", "/assets/images/clinic-website/5.png", "/assets/images/clinic-website/6.png"]
  },
  {
    slug: "railroad-simulator",
    title: "Railroad Simulator",
    technology: "java",
    image: "/assets/images/project-cards/LAPR2.png",
    date: "FEB 2025 - JUN 2025",
    description: "Developed as an interdisciplinary academic project integrating Software Engineering, Computational Mathematics, Discrete Mathematics, and Programming Paradigms, this Java-based application simulates the operation of railway networks, enabling the design and analysis of complex transportation systems.\n" +
        "\n" +
        "The system allows users to create maps with cities and industries, define operational scenarios, build stations and railway lines, manage train fleets and routes, and monitor real-time cargo and passenger transport.\n" +
        "\n" +
        "It features an intuitive JavaFX graphical interface, advanced simulation algorithms for network analysis, and Python-based statistical tools for performance evaluation and data visualization. Core implementations include shortest-path algorithms for route optimization, maintenance planning, demand and supply modelling, and network connectivity analysis, all designed with rigorous worst-case time complexity considerations.\n" +
        "\n" +
        "Developed using an iterative SCRUM-based methodology and supported by UML documentation, the project was completed collaboratively within a five-member team.\n" +
        "\n" +
        "This work demonstrates strong skills in object-oriented design, algorithm development, mathematical modelling, and the delivery of reliable, production-quality software.\n" +
        "\n" +
        "Recognised as one of the top three projects of the academic year, with no ranking distinction among them.",
    features: [
      "Interactive map and scenario editor with cities, industries, and historical constraints",
      "Complete railway network simulation with stations, trains, routes, and cargo transport",
      "Demand and supply modelling for both passengers and goods transportation",
      "Advanced connectivity analysis with shortest-path algorithms for route optimization",
      "Maintenance route planning with graph-based pathfinding algorithms",
      "Worst-case time complexity analysis for all implemented algorithms",
      "Statistical analysis and data visualization using Python integration",
      "Comprehensive UML system design and documentation",
      "JavaFX graphical interface for intuitive network management",
      "Real-time monitoring of train movements and cargo distribution",
      "Iterative development following SCRUM agile methodology",
      "Interdisciplinary approach combining mathematics, programming, and engineering"
    ],
    technologies: ["Java", "JavaFX", "Python", "UML", "Object-Oriented Programming"],
    githubURL: "https://github.com/carlotalemos/LAPR2-integrative-project",
    certificate: "/certificates/railroad-simulator.pdf",
    images: ["/assets/images/sem2pi/1.jpg", "/assets/images/sem2pi/2.jpg", "/assets/images/sem2pi/3.jpg", "/assets/images/sem2pi/4.jpg", "/assets/images/sem2pi/5.jpg", "/assets/images/sem2pi/6.jpg", "/assets/images/sem2pi/7.jpg"]
  },
  {
    slug: "eigenfaces-recognition",
    title: "Eigenfaces Image Recognition",
    technology: "java",
    image: "/assets/images/project-cards/LAPR1.png",
    date: "DEC 2024 - JAN 2025",
    description: "This project was developed as part of the Informatics Engineering coursework and achieved a final grade of 20/20. It implements the Eigenfaces method using Principal Component Analysis (PCA) for facial reconstruction and face recognition.\n" +
        "\n" +
        "The system follows the complete Eigenfaces pipeline, including mean face computation, construction of the difference matrix, covariance matrix calculation, eigenvalue and eigenvector extraction, eigenface generation, and dimensionality reduction for efficient representation and recognition.\n" +
        "\n" +
        "The application supports both command-line and interactive execution modes, processes image data represented as matrices in CSV format, and exports reconstructed faces and eigenfaces as JPEG images.\n" +
        "\n" +
        "This project demonstrates strong proficiency in linear algebra, numerical methods, and software engineering principles, highlighting the ability to translate mathematical concepts into practical computational solutions.",
    features: [
        "Mean face computation and difference matrix construction",
        "Eigenfaces generation and normalization",
        "Face reconstruction with configurable number of eigenfaces",
        "CSV import and export of image matrices",
        "Covariance matrix calculation and eigen decomposition",
        "Dimensionality reduction using principal components",
        "Face identification using Euclidean distance",
        "Command-line and interactive execution modes",
    ],
    technologies: ["Java", "Linear Algebra", "PCA", "CSV Processing", "Eigenfaces", "Face Recognition", "Apache Commons Math", "File I/O"],
    githubURL: "https://github.com/carlotalemos/LAPR1-integrative-project",
    images: ["/assets/images/sem1pi/1.jpg", "/assets/images/sem1pi/2.jpg", "/assets/images/sem1pi/3.jpg", "/assets/images/sem1pi/4.jpg", "/assets/images/sem1pi/5.jpg", "/assets/images/sem1pi/6.jpg", "/assets/images/sem1pi/7.jpg", "/assets/images/sem1pi/9.jpg"]
  }
];
