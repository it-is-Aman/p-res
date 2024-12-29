const projects = [
  {
    id: 1,
    title: "FaceCare AI",
    inspiration: "FaceCare AI was inspired by the need to make professional dermatological analysis more accessible through artificial intelligence, helping users identify and understand various skin conditions from the comfort of their homes.",
    techStack: [
      "React",
      "FastAPI",
      "Auth0",
      "Tailwind CSS",
      "Shadcn UI",
      "Machine Learning"
    ],
    useCase: "FaceCare AI allows users to upload images of their skin conditions for instant AI-powered analysis. The application provides detailed predictions about potential skin conditions, confidence scores, and tailored treatment suggestions.",
    description: "An AI-powered skin condition analysis platform that combines image recognition technology with interactive consultation features.",
    features: [
      "Secure user authentication via Auth0",
      "Drag-and-drop image upload interface",
      "Real-time skin condition analysis",
      "Confidence scoring for predictions",
      "Interactive AI chat consultation",
      "Treatment recommendations",
      "HIPAA-compliant data handling"
    ],
    imageUrl: '/img/FaceCareAI.png',
    liveUrl: import.meta.env.VITE_FACECAREAI,
    githubUrl: import.meta.env.VITE_FACECAREAI_GITHUB,
  },
  {
    id: 2,
    title: "SafeZone",
    inspiration: "SafeZone was inspired by the growing need for personal safety solutions, particularly for women, providing real-time protection and emergency response capabilities in potentially dangerous situations.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "Nodemailer"
    ],
    useCase: "SafeZone enables users to maintain their safety through real-time location tracking, SOS alerts, and community-driven safety reporting. The app helps users stay connected with emergency contacts and provides immediate assistance during critical situations.",
    description: "A comprehensive personal safety application focusing on real-time tracking, emergency response, and community safety features.",
    features: [
      "Real-time location tracking",
      "SOS alert system",
      "Emergency contact management",
      "Safety incident reporting",
      "Community safety alerts",
      "Trip monitoring",
      "Geofencing capabilities",
      "Email notifications",
      "JWT-based secure authentication"
    ],
    imageUrl: '/img/SafeZone.png',
    liveUrl: import.meta.env.VITE_SAFEZONE,
    githubUrl: import.meta.env.VITE_SAFEZONE_GITHUB,
  },

  {
    id: 3,
    title: "ExpenseSync",
    inspiration: "ExpenseSync was developed to simplify personal and group expense tracking, making it easier for individuals and groups to manage their finances and split expenses efficiently.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Context API",
      "Tailwind CSS",
      "Recharts"
    ],
    useCase: "ExpenseSync helps users track personal and group expenses, manage budgets, and handle recurring payments. It provides detailed financial reports and simplifies expense splitting among group members.",
    description: "A comprehensive expense tracking application with features for both personal and group expense management.",
    features: [
      "Personal expense tracking",
      "Group expense management",
      "Budget planning and monitoring",
      "Recurring payment handling",
      "Expense categorization",
      "Financial reporting and analytics",
      "Group settlement calculator",
      "Real-time expense updates",
      "Multi-currency support"
    ],
    imageUrl: '/img/ExpenseSync.png',
    liveUrl: import.meta.env.VITE_EXPENSESYNC,
    githubUrl: import.meta.env.VITE_EXPENSESYNC_GITHUB,
  },
  {
    id: 4,
    title: "Fit Track",
    inspiration: "Fit Track was developed to provide users with a comprehensive fitness tracking solution that combines workout management, nutrition tracking, and personalized guidance.",
    techStack: [
      "React",
      "Firebase",
      "Chart.js",
      "Shadcn UI",
      "Tailwind CSS",
      "Context API"
    ],
    useCase: "Fit Track helps users maintain their fitness journey by tracking workouts, monitoring calorie intake, and providing personalized workout recommendations based on their goals.",
    description: "A comprehensive fitness tracking application that combines workout management, nutrition monitoring, and personalized guidance.",
    features: [
      "Workout tracking and logging",
      "Calorie tracking",
      "Progress visualization",
      "Custom workout plans",
      "Exercise guide library",
      "Goal setting and monitoring",
      "Progress charts and analytics",
      "Firebase authentication",
      "Real-time data synchronization"
    ],
    imageUrl: '/img/FitTrack.png',
    liveUrl: import.meta.env.VITE_FITTRACK,
    githubUrl: import.meta.env.VITE_FITTRACK_GITHUB,
  },
  {
    id: 5,
    title: "Crypto-Scope",
    inspiration: "Crypto-Scope was created to provide cryptocurrency enthusiasts with a comprehensive platform for tracking and analyzing digital assets in real-time.",
    techStack: [
      "React",
      "Shadcn UI",
      "Tailwind CSS",
      "Cryptocurrency APIs",
      "Chart.js"
    ],
    useCase: "Crypto-Scope enables users to track cryptocurrency prices, analyze market trends, and manage their digital asset portfolio with real-time updates and detailed analytics.",
    description: "A cryptocurrency tracking and analysis platform with real-time market data and portfolio management features.",
    features: [
      "Real-time cryptocurrency pricing",
      "Portfolio tracking",
      "Market trend analysis",
      "Price alerts",
      "Interactive charts",
      "Watchlist functionality",
      "Market news integration",
      "Multi-currency support",
      "Responsive design"
    ],
    imageUrl: '/img/CryptoScope.png',
    liveUrl: import.meta.env.VITE_CRYPTOSCOPE,
    githubUrl: import.meta.env.VITE_CRYPTOSCOPE_GITHUB,
  },

]
export default projects;
