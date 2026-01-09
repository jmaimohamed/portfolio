// Portfolio Data - Mohamed Jemai - Embedded Systems Engineer & Full-Stack Developer

export interface Technology {
  name: string
  version?: string
  icon?: string
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  category: "embedded" | "mobile" | "web" | "fullstack" | "iot" | "devops" | "desktop"
  thumbnail: string
  images: string[]
  videoUrl?: string
  tags: string[]
  features: string[]
  technologies: Technology[]
  challenges: string[]
  solutions: string[]
  liveUrl?: string
  githubUrl?: string
  demoUrl?: string
  date: string
  duration: string
  role: string
  status: "completed" | "in-progress" | "maintained"
}

export interface KnowledgeItem {
  id: string
  title: string
  category: "embedded" | "devtools" | "protocols" | "hardware" | "software" | "web" | "mobile"
  content: string
  codeExample?: string
  tags: string[]
  references?: { title: string; url: string }[]
  dateAdded: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  logo?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  period: string
  achievements?: string[]
  logo?: string
}

// ============ YOUR PROJECTS ============
export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS featuring animated backgrounds and responsive design",
    longDescription: `A modern, responsive portfolio website showcasing my projects, skills, and professional experience.

    Built with Next.js 16 and TypeScript for type-safe development, featuring a stunning animated tech background with canvas animations, dark/light theme support, and smooth page transitions. The UI is crafted with Tailwind CSS and shadcn/ui components for a polished, professional look.
    
    Features include dynamic project galleries, skills categorization, timeline-based experience display, and a contact section. Optimized for performance with static generation and image optimization.`,
    category: "web",
    thumbnail: "/Project/Portfolio Website/portfolio-thumb.png",
    images: ["/Project/Portfolio Website/Capture d'écran 2026-01-09 135058.png"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "shadcn/ui", "Framer Motion"],
    features: [
      "Animated tech background with canvas effects",
      "Dark/Light theme toggle",
      "Responsive design for all devices",
      "Dynamic project gallery with filtering",
      "Skills section with categorized badges",
      "Timeline-based experience display",
      "Contact form integration",
      "SEO optimized with Next.js metadata"
    ],
    technologies: [
      { name: "Next.js", version: "16" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "React", version: "19" },
      { name: "shadcn/ui" },
      { name: "Lucide Icons" }
    ],
    challenges: [
      "Creating smooth canvas animations without performance issues",
      "Implementing responsive design across all components",
      "Managing theme state with system preference detection"
    ],
    solutions: [
      "Used requestAnimationFrame with optimized particle system",
      "Tailwind CSS with mobile-first approach and breakpoints",
      "next-themes library with localStorage persistence"
    ],
    liveUrl: "https://mohamedjemai.dev",
    githubUrl: "https://github.com/jmaimohamed/portfolio",
    date: "2025",
    duration: "1 month",
    role: "Full-Stack Developer",
    status: "maintained"
  },
  {
    id: "truck-monitoring-system",
    title: "Truck Monitoring System (T.M.S)",
    shortDescription: "IoT-powered platform for logistics operations with vehicle monitoring, real-time telemetry, and safety analytics",
    longDescription: `An IoT-powered platform that enhances logistics operations through vehicle monitoring, real-time telemetry, and safety analytics.

    The system features real-time vehicle tracking & sensor monitoring, a safety system using OpenCV for drowsiness detection, and IoT devices integrated with ESP32 and Raspberry Pi. Built with a distributed architecture using containerized services, including a web dashboard in React.js, backend in Spring Boot, and mobile app via React Native. The full CI/CD and monitoring stack includes Docker, Jenkins, Prometheus, and Grafana.`,
    category: "iot",
    thumbnail: "/Project/Truck Monitoring System (T.M.S)/certificat.pdf",
    images: ["/Project/Truck Monitoring System (T.M.S)/certificat.pdf"],
    videoUrl: "/Project/Truck Monitoring System (T.M.S)/Video Com(1).mp4",
    tags: ["Spring Boot", "React.js", "React Native", "Docker", "Jenkins", "Grafana", "Prometheus", "Raspberry Pi", "ESP32", "Azure", "OpenCV"],
    features: [
      "Real-time vehicle tracking & sensor monitoring",
      "Safety system using OpenCV for drowsiness detection",
      "IoT devices integrated: ESP32, Raspberry Pi, external sensors",
      "Distributed architecture with containerized services",
      "Web dashboard in React.js & backend in Spring Boot",
      "Mobile app via React Native",
      "CI/CD and monitoring stack (Docker + Jenkins + Prometheus + Grafana)"
    ],
    technologies: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "React Native" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "Grafana" },
      { name: "Prometheus" },
      { name: "Raspberry Pi" },
      { name: "ESP32" },
      { name: "Azure" },
      { name: "OpenCV" },
      { name: "MySQL" }
    ],
    challenges: [
      "Real-time data synchronization across multiple IoT devices",
      "Implementing reliable drowsiness detection algorithm",
      "Managing distributed containerized services"
    ],
    solutions: [
      "Implemented MQTT protocol for efficient IoT communication",
      "Used OpenCV with custom trained model for face/eye detection",
      "Docker Compose for orchestrating microservices with health checks"
    ],
    liveUrl: "https://pi-tms.vercel.app/",
    githubUrl: "https://github.com/jmaimohamed/PI_TMS",
    date: "2024",
    duration: "6 months",
    role: "Full-Stack & IoT Developer",
    status: "completed"
  },
  {
    id: "nios2-soc-linge",
    title: "Nios II SoC - Linge Embedded System",
    shortDescription: "Complete Nios II Embedded System-on-Chip (SoC) for Altera/Intel Cyclone IV GX FPGA using Platform Designer",
    longDescription: `A complete Nios II Embedded System-on-Chip (SoC) designed for Altera/Intel Cyclone IV GX FPGA using Platform Designer (Qsys).

    This project implements a Nios II/f soft-core processor system on an FPGA, featuring integrated debugging capabilities, on-chip memory, and peripheral interfaces. It's designed for embedded applications requiring a 32-bit RISC processor with real-time debugging and customizable I/O.

    The "Linge" system is a complete SoC solution built using Intel's Platform Designer, demonstrating how to create a functional embedded processor system with industry-standard IP cores.`,
    category: "embedded",
    thumbnail: "/Project/Nios II SoC - Linge Embedded System/qsys.jpg",
    images: ["/Project/Nios II SoC - Linge Embedded System/qsys.jpg"],
    tags: ["VHDL", "Verilog", "SystemVerilog", "FPGA", "Nios II", "Intel Quartus", "SoC"],
    features: [
      "Nios II/f 32-bit RISC Processor at 50 MHz",
      "4 KB Instruction Cache & 2 KB Data Cache",
      "4 KB On-Chip RAM (32-bit wide)",
      "JTAG UART Serial Interface with 64-byte buffers",
      "8-bit Parallel I/O (PIO) port",
      "Avalon MM Interconnect Fabric",
      "JTAG Debug Module for real-time debugging"
    ],
    technologies: [
      { name: "VHDL" },
      { name: "Verilog" },
      { name: "SystemVerilog" },
      { name: "Intel Quartus Prime", version: "13.1" },
      { name: "Platform Designer (Qsys)" },
      { name: "Nios II SBT" },
      { name: "Cyclone IV GX FPGA" }
    ],
    challenges: [
      "Designing efficient interconnect fabric for multiple peripherals",
      "Memory mapping and address space allocation",
      "Timing closure for 50 MHz operation"
    ],
    solutions: [
      "Used Avalon MM interconnect with proper arbitration",
      "Implemented hierarchical memory map with base address offsets",
      "Optimized synthesis constraints and placement"
    ],
    githubUrl: "https://github.com/jmaimohamed/Linge-Embedded-System",
    date: "2025",
    duration: "2 months",
    role: "FPGA Developer",
    status: "completed"
  },
  {
    id: "stm32-project",
    title: "STM32F407 Embedded Project",
    shortDescription: "Embedded systems project using STM32F407VGTx microcontroller with peripheral interfaces",
    longDescription: `An embedded systems project developed using STM32F407VGTx microcontroller, demonstrating expertise in ARM Cortex-M4 development.

    The project utilizes STM32CubeIDE for development and implements various peripheral interfaces including GPIO, UART, I2C, SPI, and timers. Built with the HAL library for hardware abstraction and portability.`,
    category: "embedded",
    thumbnail: "/Project/STM32F407 Embedded Project/stm32f407.jpg",
    images: ["/Project/STM32F407 Embedded Project/stm32f407.jpg", "/Project/STM32F407 Embedded Project/STM32F407VGT6-schematic.png"],
    tags: ["STM32", "C", "ARM Cortex-M4", "STM32CubeIDE", "HAL", "Embedded C"],
    features: [
      "STM32F407VGTx ARM Cortex-M4 microcontroller",
      "Multiple peripheral interfaces (GPIO, UART, I2C, SPI)",
      "Timer-based operations and interrupts",
      "Flash and RAM linker script configuration",
      "Debug configuration with ST-Link"
    ],
    technologies: [
      { name: "STM32F407VGTx" },
      { name: "C" },
      { name: "STM32CubeIDE" },
      { name: "HAL Library" },
      { name: "ARM Cortex-M4" },
      { name: "Makefile" }
    ],
    challenges: [
      "Low-level peripheral configuration and initialization",
      "Memory management in resource-constrained environment",
      "Real-time interrupt handling"
    ],
    solutions: [
      "Used HAL library with custom optimizations",
      "Implemented efficient memory allocation strategies",
      "Priority-based interrupt management with NVIC"
    ],
    githubUrl: "https://github.com/jmaimohamed/Stm_Project",
    date: "2023",
    duration: "3 months",
    role: "Embedded Developer",
    status: "completed"
  },
  {
    id: "devops-project",
    title: "DevOps Project - CI/CD Pipeline",
    shortDescription: "Complete DevOps pipeline with Docker, Jenkins, SonarQube for Java Spring Boot application",
    longDescription: `A comprehensive DevOps project demonstrating modern CI/CD practices with containerized deployment.

    Built a complete CI/CD pipeline for a Java Spring Boot application, including Docker containerization, Jenkins automation, code quality analysis with SonarQube, and artifact management with Nexus. The project showcases best practices in DevOps automation and continuous delivery.`,
    category: "devops",
    thumbnail: "/Project/DevOps Project - CICD Pipeline/jenkins1.jpg",
    images: ["/Project/DevOps Project - CICD Pipeline/jenkins1.jpg", "/Project/DevOps Project - CICD Pipeline/grafanas.jpg", "/Project/DevOps Project - CICD Pipeline/sonar.jpg", "/Project/DevOps Project - CICD Pipeline/terminal jen.jpg"],
    tags: ["Docker", "Jenkins", "SonarQube", "Java", "Spring Boot", "Docker Compose", "CI/CD"],
    features: [
      "Automated CI/CD pipeline with Jenkins",
      "Docker containerization with multi-stage builds",
      "Code quality analysis with SonarQube",
      "Artifact management with Nexus",
      "Docker Compose for orchestration",
      "Automated testing and deployment"
    ],
    technologies: [
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Jenkins" },
      { name: "SonarQube" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Maven" }
    ],
    challenges: [
      "Automating the entire build-test-deploy cycle",
      "Managing multiple containerized services",
      "Ensuring code quality gates in pipeline"
    ],
    solutions: [
      "Jenkins pipeline with declarative syntax",
      "Docker Compose for service orchestration",
      "SonarQube quality gates blocking bad code"
    ],
    githubUrl: "https://github.com/jmaimohamed/DevProjectOps",
    date: "2024",
    duration: "2 months",
    role: "DevOps Engineer",
    status: "completed"
  },
  {
    id: "iot-mqtt-project",
    title: "IoT MQTT Project",
    shortDescription: "IoT project with MQTT protocol, ESP32/C++ publisher and web dashboard",
    longDescription: `An IoT project implementing MQTT protocol for sensor data communication with a modern web dashboard.

    The project includes an ESP32-based sensor node programmed in C++ that publishes sensor data via MQTT, and a web dashboard built with HTML, JavaScript, and Python backend for real-time data visualization and monitoring.`,
    category: "iot",
    thumbnail: "/Project/IoT MQTT Project/mqtt-architecture-1.png",
    images: ["/Project/IoT MQTT Project/mqtt-architecture-1.png", "/Project/IoT MQTT Project/raspber.jpg"],
    tags: ["Python", "C++", "MQTT", "ESP32", "JavaScript", "HTML", "IoT"],
    features: [
      "MQTT protocol for IoT communication",
      "ESP32 sensor node with C++ firmware",
      "Real-time web dashboard",
      "Python backend for data processing",
      "Sensor data visualization"
    ],
    technologies: [
      { name: "Python" },
      { name: "C++" },
      { name: "MQTT" },
      { name: "ESP32" },
      { name: "JavaScript" },
      { name: "HTML/CSS" }
    ],
    challenges: [
      "Reliable IoT communication over unreliable networks",
      "Real-time data synchronization",
      "Power-efficient sensor reading"
    ],
    solutions: [
      "MQTT QoS levels for delivery guarantee",
      "WebSocket for real-time web updates",
      "Deep sleep modes between readings"
    ],
    githubUrl: "https://github.com/jmaimohamed/IOT",
    date: "2025",
    duration: "1 month",
    role: "IoT Developer",
    status: "completed"
  },
  {
    id: "smart-construction-company",
    title: "Smart Contracting & Construction Company",
    shortDescription: "Desktop management application for construction companies built with Qt/C++ and Arduino integration",
    longDescription: `A comprehensive desktop application for managing construction company operations, built with Qt framework and C++.

    Features include employee management, project tracking (chantiers), supplier management, partner relations, task management, and Arduino integration for IoT sensors. The application includes QR code generation, data visualization with QCustomPlot, PDF export, and multi-language support with Python-based translation.`,
    category: "desktop",
    thumbnail: "/projects/qt-thumb.jpg",
    images: ["/projects/qt-1.jpg", "/projects/qt-2.jpg"],
    tags: ["C++", "Qt", "Arduino", "QCustomPlot", "PDF Export", "QR Code", "Desktop"],
    features: [
      "Employee and supplier management",
      "Construction site (chantier) tracking",
      "Partner relationship management",
      "Task management and scheduling",
      "Arduino integration for sensors",
      "QR code generation for documents",
      "Data visualization with charts",
      "PDF export and multi-language support"
    ],
    technologies: [
      { name: "C++" },
      { name: "Qt Framework" },
      { name: "Arduino" },
      { name: "QCustomPlot" },
      { name: "Python" },
      { name: "MySQL" }
    ],
    challenges: [
      "Complex UI with multiple management modules",
      "Hardware integration with Arduino",
      "Multi-language support implementation"
    ],
    solutions: [
      "Modular Qt architecture with separate classes",
      "Serial communication protocol with Arduino",
      "Python script for translation API integration"
    ],
    githubUrl: "https://github.com/jmaimohamed/Smart_Contracting_And_Construction_Company",
    date: "2022",
    duration: "4 months",
    role: "Desktop Developer",
    status: "completed"
  },
  {
    id: "padel-app",
    title: "PadelApp - Sports Booking Platform",
    shortDescription: "Full-stack web application for Padel court booking with React.js frontend and Java Spring Boot backend",
    longDescription: `A full-stack sports booking platform designed for Padel court reservations and management.

    Built with a React.js frontend for a modern user interface and a Java Spring Boot backend for robust API services. Features court availability management, booking system, and user authentication.`,
    category: "fullstack",
    thumbnail: "/Project/PadelApp - Sports Booking Platform/b2985880-5405-4461-accd-b9a3036a3196.jpg",
    images: ["/Project/PadelApp - Sports Booking Platform/b2985880-5405-4461-accd-b9a3036a3196.jpg", "/Project/PadelApp - Sports Booking Platform/b6a47979-1223-46da-8bab-07dc652893fd.jpg", "/Project/PadelApp - Sports Booking Platform/cfc48918-393c-4706-af3d-96db8ca0a239.jpg"],
    tags: ["React.js", "JavaScript", "Java", "Spring Boot", "CSS", "Full-Stack"],
    features: [
      "Court availability and booking system",
      "User authentication and profiles",
      "Responsive React.js interface",
      "RESTful API with Spring Boot",
      "Booking management dashboard"
    ],
    technologies: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "CSS" },
      { name: "MySQL" }
    ],
    challenges: [
      "Real-time availability updates",
      "Concurrent booking conflict handling",
      "Responsive design for all devices"
    ],
    solutions: [
      "Optimistic locking for concurrent access",
      "Database transactions for booking integrity",
      "CSS Grid and Flexbox for responsiveness"
    ],
    githubUrl: "https://github.com/jmaimohamed/PadelApp",
    date: "2024",
    duration: "2 months",
    role: "Full-Stack Developer",
    status: "completed"
  },
  {
    id: "jetsetgo",
    title: "JetSetGo - Android Travel App",
    shortDescription: "Android mobile application for travel planning with sensors integration and SQLite database",
    longDescription: `A native Android application built with Java for travel planning and management.

    Features include trip planning, itinerary management, sensor integration (GPS, accelerometer), and local SQLite database for offline functionality. The app uses modern Android architecture patterns and Gradle build system.`,
    category: "mobile",
    thumbnail: "/Project/JetSetGo/b14b37b8-5123-4b6c-96a1-b3632e8c6ae7.jpg",
    images: ["/Project/JetSetGo/b14b37b8-5123-4b6c-96a1-b3632e8c6ae7.jpg", "/Project/JetSetGo/bfdca3ce-e900-471b-91ad-bb30a7341116.jpg", "/Project/JetSetGo/c7347868-5c02-48bd-9872-34652d64cd10.jpg"],
    tags: ["Java", "Android", "SQLite", "Gradle", "Mobile", "Sensors"],
    features: [
      "Trip planning and management",
      "Itinerary organization",
      "GPS location integration",
      "Offline SQLite database",
      "Android sensor integration"
    ],
    technologies: [
      { name: "Java" },
      { name: "Android SDK" },
      { name: "SQLite" },
      { name: "Gradle" },
      { name: "Android Sensors API" }
    ],
    challenges: [
      "Offline-first architecture",
      "Battery-efficient location tracking",
      "Smooth UI performance"
    ],
    solutions: [
      "SQLite for local data persistence",
      "Fused Location Provider for efficiency",
      "RecyclerView with view holder pattern"
    ],
    githubUrl: "https://github.com/jmaimohamed/JetSetGo",
    date: "2024",
    duration: "3 months",
    role: "Android Developer",
    status: "completed"
  }
]

// ============ KNOWLEDGE BASE ITEMS ============
export const knowledgeItems: KnowledgeItem[] = [
  {
    id: "can-protocol",
    title: "CAN Bus Protocol",
    category: "protocols",
    content: `Controller Area Network (CAN) is a robust vehicle bus standard designed for automotive applications.

**Key Features:**
- Multi-master serial communication
- Message-based protocol with priority arbitration
- Built-in error detection and handling
- Speeds up to 1 Mbps (CAN 2.0) or 5 Mbps (CAN FD)`,
    tags: ["CAN", "automotive", "embedded", "protocol"],
    dateAdded: "2024-01-15"
  },
  {
    id: "uds-protocol",
    title: "UDS Diagnostic Protocol",
    category: "protocols",
    content: `Unified Diagnostic Services (UDS) is an automotive diagnostic protocol standardized in ISO 14229.

**Key Services:**
- Diagnostic Session Control (0x10)
- ECU Reset (0x11)
- Read Data By Identifier (0x22)
- Write Data By Identifier (0x2E)`,
    tags: ["UDS", "automotive", "diagnostics", "ISO14229"],
    dateAdded: "2024-02-01"
  },
  {
    id: "i2c-protocol",
    title: "I2C Bus Protocol",
    category: "protocols",
    content: `I2C (Inter-Integrated Circuit) is a synchronous, multi-master, multi-slave serial bus.

**Key Features:**
- Only two wires: SDA (data) and SCL (clock)
- 7-bit or 10-bit addressing
- Speed Modes: Standard (100kHz), Fast (400kHz), Fast+ (1MHz)`,
    tags: ["I2C", "serial", "embedded", "sensors"],
    dateAdded: "2024-02-15"
  },
  {
    id: "spi-protocol",
    title: "SPI Communication",
    category: "protocols",
    content: `SPI (Serial Peripheral Interface) is a synchronous serial communication interface.

**SPI Lines:**
- MOSI: Master Out Slave In
- MISO: Master In Slave Out
- SCLK: Serial Clock
- CS/SS: Chip Select`,
    tags: ["SPI", "serial", "embedded", "high-speed"],
    dateAdded: "2024-03-01"
  },
  {
    id: "uart-protocol",
    title: "UART Communication",
    category: "protocols",
    content: `UART (Universal Asynchronous Receiver-Transmitter) is asynchronous serial communication.

**Key Parameters:**
- Baud Rate: 9600, 115200, etc.
- Data Bits: Usually 8
- Stop Bits: 1 or 2
- Parity: None, Even, Odd`,
    tags: ["UART", "serial", "embedded", "debugging"],
    dateAdded: "2024-03-15"
  }
]

// ============ EXPERIENCE ============
export const experiences: Experience[] = [
  {
    id: "1",
    company: "ACTIA Engineering Services",
    role: "Embedded Systems Intern",
    period: "2024",
    description: "Internship at ACTIA, a leading automotive electronics company. Worked on embedded systems development and automotive diagnostics protocols.",
    achievements: [
      "Developed embedded firmware for automotive ECU testing",
      "Worked with CAN bus and UDS diagnostic protocols",
      "Implemented communication interfaces (SPI, I2C, UART)",
      "Contributed to vehicle diagnostic tool development",
      "Gained hands-on experience with STM32 microcontrollers in automotive context"
    ],
    technologies: ["C", "STM32", "CAN Bus", "UDS Protocol", "SPI", "I2C", "UART", "Embedded C"]
  },
  {
    id: "2",
    company: "ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies",
    role: "Engineering Student - Software Engineering (Embedded Systems)",
    period: "2020 - 2025",
    description: "Completed Software Engineering degree with specialization in Embedded Systems. Ranked 1st in class with strong experience in full-stack development, embedded systems, and DevOps automation.",
    achievements: [
      "Ranked 1st in class - Top performing student",
      "Developed complete IoT Truck Monitoring System with real-time telemetry",
      "Implemented FPGA-based SoC using Nios II processor",
      "Built full CI/CD pipelines with Docker, Jenkins, and monitoring stack",
      "Created multiple full-stack applications with Spring Boot and React"
    ],
    technologies: ["STM32", "ESP32", "Spring Boot", "React.js", "React Native", "Docker", "Jenkins", "VHDL"]
  },
  {
    id: "3",
    company: "Freelance - Web Development",
    role: "Full-Stack Web Developer",
    period: "2023 - Present",
    description: "Developing modern web applications for clients using cutting-edge technologies and best practices.",
    achievements: [
      "Built responsive web applications with React.js and Next.js",
      "Developed REST APIs with Spring Boot and Node.js",
      "Implemented authentication, payment integration, and real-time features",
      "Deployed applications with Docker and cloud platforms"
    ],
    technologies: ["React.js", "Next.js", "Spring Boot", "Node.js", "PostgreSQL", "MySQL", "Docker", "Tailwind CSS"]
  },
  {
    id: "4",
    company: "Freelance - Mobile Development",
    role: "Mobile App Developer",
    period: "2023 - Present",
    description: "Creating cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    achievements: [
      "Built cross-platform apps with React Native",
      "Integrated BLE connectivity for IoT device control",
      "Implemented offline-first architecture with local storage",
      "Published apps with push notifications and analytics"
    ],
    technologies: ["React Native", "JavaScript", "TypeScript", "Firebase", "BLE", "Redux", "Expo"]
  },
  {
    id: "5",
    company: "Freelance - Embedded Systems",
    role: "Embedded Systems Developer",
    period: "2023 - Present",
    description: "Designing and developing firmware solutions for IoT devices and embedded systems projects.",
    achievements: [
      "Developed custom firmware for STM32 and ESP32 platforms",
      "Implemented wireless communication (WiFi, BLE, LoRa)",
      "Designed sensor integration and data acquisition systems",
      "Created IoT solutions with MQTT and cloud connectivity"
    ],
    technologies: ["C", "C++", "STM32", "ESP32", "FreeRTOS", "MQTT", "I2C", "SPI", "UART"]
  },
  {
    id: "6",
    company: "Freelance - DevOps & Automation",
    role: "DevOps Engineer",
    period: "2024 - Present",
    description: "Setting up CI/CD pipelines, containerization, and monitoring solutions for development teams.",
    achievements: [
      "Configured Jenkins pipelines for automated builds and deployments",
      "Containerized applications with Docker and Docker Compose",
      "Set up monitoring with Prometheus and Grafana dashboards",
      "Implemented code quality gates with SonarQube"
    ],
    technologies: ["Docker", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "SonarQube", "Linux", "Nexus"]
  }
]

// ============ EDUCATION ============
export const education: Education[] = [
  {
    id: "1",
    institution: "ESPRIT - École Supérieure Privée d'Ingénierie et de Technologies",
    degree: "Engineering Degree",
    field: "Software Engineering - Embedded Systems & Full-Stack Development",
    period: "2020 - 2025",
    achievements: [
      "Ranked 1st in class",
      "Specialized in Embedded Systems and IoT",
      "Completed multiple full-stack development projects",
      "Strong foundation in DevOps and Cloud technologies"
    ]
  }
]

// ============ SKILLS (Without Percentages) ============
export const hardSkills = {
  programmingLanguages: [
    "C",
    "C++",
    "Java (Spring Boot)",
    "JavaScript",
    "Python",
    "PHP"
  ],
  webAndMobile: [
    "Spring Boot",
    "React.js",
    "React Native",
    "JavaFX",
    "Symfony"
  ],
  embeddedAndIoT: [
    "STM32CubeIDE",
    "ESP32",
    "Raspberry Pi",
    "Arduino",
    "CAN Bus",
    "UDS Protocol",
    "SPI",
    "I2C",
    "UART"
  ],
  devopsAndAutomation: [
    "Docker",
    "Docker Compose",
    "Jenkins",
    "SonarQube",
    "Nexus",
    "Git",
    "GitHub Actions",
    "Linux"
  ],
  monitoringAndCloud: [
    "Prometheus",
    "Grafana",
    "Azure (basic)"
  ],
  databases: [
    "MySQL",
    "PostgreSQL",
    "Redis (basics)"
  ],
  fpgaAndHardware: [
    "VHDL",
    "Verilog",
    "SystemVerilog",
    "Intel Quartus",
    "Nios II",
    "Platform Designer (Qsys)"
  ]
}

export const softSkills = {
  professionalMindset: [
    "Problem-solving",
    "Autonomy",
    "Quality-driven",
    "Adaptability",
    "Continuous Learning"
  ],
  collaboration: [
    "Teamwork",
    "Communication",
    "Technical Reporting",
    "Documentation"
  ],
  productivity: [
    "Time Management",
    "Ownership",
    "Task Prioritization"
  ]
}

// Legacy format for compatibility (without levels)
export const technicalSkills = {
  embedded: hardSkills.embeddedAndIoT.map(skill => ({ name: skill })),
  web: [...hardSkills.webAndMobile, ...hardSkills.programmingLanguages].map(skill => ({ name: skill })),
  mobile: ["React Native", "Android (Java)", "JavaFX"].map(skill => ({ name: skill })),
  devops: hardSkills.devopsAndAutomation.map(skill => ({ name: skill })),
  fpga: hardSkills.fpgaAndHardware.map(skill => ({ name: skill }))
}

// ============ PERSONAL INFO ============
export const personalInfo = {
  name: "Mohamed Jemai",
  title: "Embedded Systems Engineer & Full-Stack Developer",
  tagline: "Software Engineer · Full-Stack Developer · Embedded Systems & DevOps Practitioner",
  photo: "/images/profile.jpg",
  email: "mohamed.jmai@esprit.tn",
  phone: "+216 94 653 412",
  location: "Tunis, Tunisia",
  github: "https://github.com/jmaimohamed",
  linkedin: "https://www.linkedin.com/in/mohamed-jemai-0b6135202/",
  resume: "/cv/resume.pdf",
  about: `I am a results-driven Software Engineer, ranked 1st in my class at ESPRIT, with strong experience in full-stack development, embedded systems, and DevOps automation.

My work spans across:
• Building scalable and secure backend systems
• Designing modern front-end interfaces
• Developing embedded firmware (STM32, CAN, UDS)
• Automating deployments with CI/CD pipelines
• Running production environments using Docker, Jenkins, SonarQube, and monitoring tools

I focus on clean architecture, performance, and reliable engineering, bridging software, hardware, and cloud systems.

Currently focusing on:
• Designing scalable backend systems with Spring Boot
• Building end-to-end CI/CD pipelines (Jenkins, GitHub Actions)
• Improving embedded firmware development on STM32 (CAN, UDS)
• Building performant React Native mobile apps
• Strengthening cloud & container orchestration skills
• Writing cleaner, maintainable, and testable code`
}
