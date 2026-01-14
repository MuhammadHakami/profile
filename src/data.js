export const profileData = {
    name: "MUHAMMAD HAKAMI",
    title: "Senior Ai Engineer/Researcher",
    location: "Riyadh, Saudi Arabia",
    phone: "+966581336604",
    email: "EngMuhammadHakami@gmail.com",
    links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-hakami-b28a75166/" },
    ],
    summary: "Senior Ai Engineer/Researcher with 7+ years of experience leading end-to-end research projects from Proof of Concept (PoC) to Technology Readiness Level (TRL) 7+. Specializes in Computer Vision, Generative AI, multi-agent systems, and optimal control. Proven track record of architecting and deploying large-scale AI solutions that generated over +1M SAR in direct revenue. Published researcher and patent holder committed to leveraging cutting-edge AI to drive innovation."
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
        role: "Data Science Immersive (Student/Fellow)",
        duration: "Nov 2018 – Feb 2019",
        points: [
            "Completed comprehensive coursework in Python Programming, ML Modeling, Data Visualization, and Data Mining.",
            "Won two Kaggle competitions, achieving best-in-class for advanced Regression and Classification challenges."
        ]
    }
];

export const educationData = [
    {
        institution: "MIT xPRO",
        degree: "Professional Certificates",
        date: "2024",
        details: [
            "Quantum Algorithms for Cybersecurity, Chemistry, and Optimization",
            "Quantum Computing Fundamentals"
        ]
    },
    {
        institution: "MITx",
        degree: "Certificate",
        date: "2023",
        details: ["Machine Learning with Python-From Linear Models to Deep Learning"]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "2020",
        details: ["Deep Reinforcement Learning", "Trained a drone to maintain mid-air stability using RL."]
    },
    {
        institution: "Misk Academy & General Assembly",
        degree: "Full Stack Web Development Immersive",
        date: "2020",
        details: ["HTML, CSS, JavaScript, Ruby on Rails, React, Redux, NodeJs, MongoDB."]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "2019",
        details: ["Machine Learning Engineer"]
    },
    {
        institution: "Udacity",
        degree: "NanoDegree",
        date: "2018",
        details: ["Introduction to Self-Driving Cars", "Optimized a Python auto-driving car code to run 10x faster using C++."]
    },
    {
        institution: "Umm Al-Qura University",
        location: "Makkah, Saudi Arabia",
        degree: "Bachelor of Science, Electrical Engineering (Electronics & Communication)",
        date: "2013 – 2018",
        details: ["Excelled in Deep Learning coursework, finishing top of the class."]
    }
];

export const projectsData = [
    {
        title: "Physical AI Agentic Tour Guide",
        description: "Engineered an agentic AI system capable of navigating mobile apps and websites for seamless purchases and scheduling. Integrated Speech-to-Action capabilities with AR glasses.",
        date: "2025",
        tech: ["Agentic AI", "Speech-to-Action", "AR"],
        image: "tour_guide_ai.png"
    },
    {
        title: "Agritech Hyper-Spectral Sensing",
        description: "Estimated crop conditions (water, nutrition, fertilizer needs) for every 9m² parcel across Saudi Arabia using satellite and drone data. Adapted digital twin simulations for open farms.",
        date: "2025",
        tech: ["Remote Sensing", "Digital Twin", "Agritech"],
        image: "agritech_sensing.png"
    },
    {
        title: "Large World Models Nuclear Simulation",
        description: "Adapted a World Model for monitoring and predictive maintenance in Molten Salt Nuclear Reactors. Presented technical findings at the Aramco SPE symposium conference for Energy with AI.",
        date: "2025",
        tech: ["World Models", "Predictive Maintenance", "AI"],
        image: "nuclear_simulation.png"
    },
    {
        title: "Port Logistics Automation Digital Twin",
        description: "Developed a multi-agent and swarm intelligence system for efficient, collaborative transport in a port logistics digital twin. Accelerated Sim2Real adaptation using World Models.",
        date: "2025",
        tech: ["Multi-Agent Systems", "Swarm Intelligence", "Sim2Real"],
        image: "port_automation.png"
    },
    {
        title: "Smart City Landscape Redesign with Generative AI",
        description: "Trained a conditional image generation model to suggest smart city redesigns based on metrics like Greenery, Privacy, and Walkability.",
        date: "2024",
        tech: ["GenAI", "Computer Vision"],
        image: "smart_city_genai.png"
    },
    {
        title: "Digital Twin Digital City Pipeline",
        description: "Built an HPC-based end-to-end pipeline using Gaussian Splatting and Structure from Motion to automate digital twin curation from drive-through, satellite, and drone data. Collaborated with KACST to develop a regularly updating digital twin for Riyadh.",
        date: "2024",
        tech: ["HPC", "Gaussian Splatting", "Digital Twin"],
        image: "digital_city_pipeline.png"
    },
    {
        title: "Time Series Market Prediction",
        description: "Made ARIMA and LSTM models to predict future price steps with a focus on market volatility and structural breaks.",
        date: "2019",
        tech: ["ARIMA", "LSTM", "Time Series"],
        link: "https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Market_Prediction/time_series.ipynb",
        image: "download.png"
    },
    {
        title: "Flower Classification with Transfer Learning",
        description: "Classified 102 types of flowers using a VGG model and Transfer Learning in PyTorch, achieving high accuracy on complex datasets.",
        date: "2019",
        tech: ["VGG", "Transfer Learning", "PyTorch"],
        link: "https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Transfer_learning/transfer_learning_project.ipynb",
        image: "transfer_learning.png"
    },
    {
        title: "Advanced Housing Regression & Classification",
        description: "Won first place in two offline Kaggle competitions by developing high-performance regression models for housing price prediction.",
        date: "2019",
        tech: ["Regression", "Kaggle", "XGBoost"],
        link: "https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Housing_advance_methods/Advance%20Regression%20and%20Classification.ipynb",
        image: "houses.png"
    },
    {
        title: "Customer Review Score Prediction",
        description: "Used Natural Language Processing (NLP) with Multinomial Naïve Bayes and Random Forest to predict customer ratings based on review text.",
        date: "2019",
        tech: ["NLP", "Naive Bayes", "Random Forest"],
        link: "https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/NLP/NLP%20Project%20.ipynb",
        image: "text.png"
    },
    {
        title: "Data Science Salary Investigation",
        description: "Scraped Data Science job postings and classified salaries into high and low categories using predictive modeling.",
        date: "2019",
        tech: ["Web Scraping", "Predictive Modeling", "Pandas"],
        link: "https://github.com/MuhammadHakami/Machine_Learning_Projects/blob/master/Data_Scientists_Salary_classification/Date_Science_salary_invistigation.ipynb",
        image: "salary.png"
    }
];
