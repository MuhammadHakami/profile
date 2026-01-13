export const profileData = {
    name: "MUHAMMAD HAKAMI",
    title: "Senior Data Scientist",
    location: "Riyadh, Saudi Arabia",
    phone: "+966581336604",
    email: "EngMuhammadHakami@gmail.com",
    links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-hakami-b28a75166/" }, // Assuming URL from old App.js, user didn't provide new one explicitly but mentioned it
        // { label: "Personal Website", url: "#" } // Placeholder or current site
    ],
    summary: "Senior Data Scientist with 7+ years of experience leading end-to-end research projects from Proof of Concept (PoC) to Technology Readiness Level (TRL) 7+. Specializes in Computer Vision, Generative AI, multi-agent systems, and optimal control. Proven track record of architecting and deploying large-scale AI solutions that generated over +1M SAR in direct revenue. Published researcher and patent holder committed to leveraging cutting-edge AI to drive innovation."
};

export const skillsData = {
    categories: [
        {
            category: "Programming",
            items: ["Python", "C++", "Julia", "JavaScript (React, Node)", "SQL (PostgreSQL, MongoDB)", "Linux/Command Line"]
        },
        {
            category: "ML Frameworks",
            items: ["Scikit-Learn", "Keras", "PyTorch", "TensorFlow", "StatsModels", "Pandas", "Numpy", "Scipy"]
        },
        {
            category: "Big Data/Cloud",
            items: ["AWS (Familiar)", "Hadoop/MapReduce (Familiar)", "Spark (Familiar)", "Hive", "Pig"]
        },
        {
            category: "AI/ML Specialisms",
            items: ["Computer Vision", "GenAI", "Multi-Agent Systems", "Optimal Control", "Reinforcement Learning", "NLP", "Data Mining", "Predictive Modeling", "Deep Learning", "Statistical Analysis"]
        },
        {
            category: "Tools",
            items: ["Git/GitHub", "Web Scraping", "APIs", "Data Visualization (Tableau)", "LaTeX"]
        }
    ]
};

export const experienceData = [
    {
        company: "Elm Company",
        location: "Riyadh, Saudi Arabia",
        role: "Research Scientist",
        duration: "Oct 2019 – Present",
        points: [
            "Spearheaded the development and deployment of multiple successful MVPs (TRL 7+), resulting in over +1M SAR in direct revenue.",
            "Architected agentic AI solutions for diverse domains, including tourism, agritech, and autonomous systems using Reinforcement Learning (RL) and GenAI.",
            "Authored 2 research papers and contributed to securing 4 patents, representing the company at multiple industry conferences."
        ]
    },
    {
        company: "Misk Academy & General Assembly",
        location: "Riyadh, Saudi Arabia",
        role: "Data Scientist BootCamp Teacher",
        duration: "June 2019 – Sep 2019",
        points: [
            "Taught 40 students in a 4-month immersive Data Science BootCamp, guiding them through high-impact use-cases in DS and ML."
        ]
    },
    {
        company: "General Assembly",
        location: "Riyadh, Saudi Arabia",
        role: "Data Science Immersive (Student/Fellow)", // Clarified role based on context
        duration: "Nov 2018 – Feb 2019",
        points: [
            "Completed comprehensive coursework in Python Programming, ML Modeling, Data Visualization, and Data Mining.",
            "Won two Kaggle competitions, achieving best-in-class for advanced Regression and Classification challenges."
        ]
    }
];

// Education sorted by newest first implies 
export const educationData = [
    {
        institution: "MIT xPRO",
        degree: "Professional Certificates",
        date: "Recent", // No date in CV, assuming recent
        details: [
            "Quantum Algorithms for Cybersecurity, Chemistry, and Optimization",
            "Quantum Computing Fundamentals"
        ]
    },
    {
        institution: "MITx",
        degree: "Certificate",
        date: "Recent",
        details: ["Machine Learning with Python-From Linear Models to Deep Learning"]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "Recent",
        details: ["Deep Reinforcement Learning", "Trained a drone to maintain mid-air stability using Reinforcement Learning."]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "Recent",
        details: ["Machine Learning Engineer"]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "Recent",
        details: ["Introduction to Self-Driving Cars", "Optimized a Python auto-driving car code to run 10+ times faster after translating it to C++."]
    },
    {
        institution: "Umm Al-Qura University",
        location: "Makkah, Saudi Arabia",
        degree: "Bachelor of Science, Electrical Engineering (Electronics & Communication)",
        date: "Jun 2013 – Jun 2018",
        details: ["Excelled in Deep Learning coursework, finishing top of the class."]
    }
];

// Projects - "All projects are sorted chronologically" implies newest first in listing
// The user provided list order suggests chronological order (most recent first assumed based on topics like GenAI/Large World Models vs Digital Twin vs older ML)
export const projectsData = [
    {
        title: "Smart City Landscape Redesign with Generative AI",
        description: "Trained a conditional image generation model to suggest smart city redesigns based on metrics like Greenery, Privacy, and Walkability.",
        date: "Recent",
        tech: ["GenAI", "Computer Vision"]
    },
    {
        title: "End-to-End Large Scale Fully-automated Digital Twin for the Digital City",
        description: "Built an HPC-based end-to-end pipeline using Gaussian Splatting and Structure from Motion to automate digital twin curation from drive-through, satellite, and drone data. Collaborated with KACST to develop a regularly updating digital twin for Riyadh.",
        date: "Recent",
        tech: ["HPC", "Gaussian Splatting", "Digital Twin"]
    },
    {
        title: "Large World Models for Molten Salt Nuclear Reactor Simulation",
        description: "Reduced operational costs drastically by adapting a World Model for monitoring and predictive maintenance. Presented technical findings at the Aramco SPE symposium conference for Energy with AI.",
        date: "Recent",
        tech: ["World Models", "Predictive Maintenance", "AI"]
    },
    {
        title: "Agritech Hyper-Spectral Remote Sensing",
        description: "Estimated crop conditions (water, nutrition, fertilizer needs) for every 9m² parcel across Saudi Arabia using satellite and drone data. Adapted digital twin simulations for open farms, providing farmers with market analysis and crop simulations.",
        date: "Recent",
        tech: ["Remote Sensing", "Digital Twin", "Agritech"]
    },
    {
        title: "Physical AI Agentic Tour Guide",
        description: "Engineered an agentic AI system capable of navigating mobile apps and websites for seamless purchases and scheduling. Integrated Speech-to-Action capabilities with eWallets (BarCodes/NFCs) and AR glasses for enhanced tourism support.",
        date: "Recent",
        tech: ["Agentic AI", "Speech-to-Action", "AR"]
    },
    {
        title: "End-to-End Automation over Digital Twin of Port Logistics",
        description: "Developed a multi-agent and swarm intelligence system for efficient, collaborative transport in a port logistics digital twin. Accelerated Sim2Real adaptation from 3 years to under 3 months by developing a robust World Model for the digital twin.",
        date: "Recent",
        tech: ["Multi-Agent Systems", "Swarm Intelligence", "Sim2Real"]
    }
];
