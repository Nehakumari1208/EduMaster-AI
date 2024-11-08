const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate A Course Tutorial on Following Detail With field as Course Name,Description,Along with Chapter Name,about,Duration: Category:'Programming' , Topic:Python, Level:Basic, Duration:1hours, NoOfChapters:5,in JSON format ",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course": {\n    "name": "Python Programming for Beginners",\n    "description": "This course provides a comprehensive introduction to Python programming, covering the fundamental concepts and essential syntax. It is designed for individuals with no prior programming experience.",\n    "chapters": [\n      {\n        "name": "Introduction to Python",\n        "about": "This chapter will introduce you to the basics of Python, including its history, purpose, and key features. You will learn how to install Python and set up your development environment.",\n        "duration": "15 minutes"\n      },\n      {\n        "name": "Variables and Data Types",\n        "about": "This chapter explores different data types used in Python, such as integers, floats, strings, and booleans. You will learn how to declare variables, assign values, and perform basic operations.",\n        "duration": "20 minutes"\n      },\n      {\n        "name": "Operators and Expressions",\n        "about": "This chapter dives into various operators used in Python, including arithmetic, comparison, logical, and assignment operators. You will learn how to build expressions and evaluate their results.",\n        "duration": "25 minutes"\n      },\n      {\n        "name": "Control Flow Statements",\n        "about": "This chapter covers control flow statements such as if-else, loops (for and while), and conditional statements. You will learn how to create programs that execute different code blocks based on conditions.",\n        "duration": "15 minutes"\n      },\n      {\n        "name": "Functions and Modules",\n        "about": "This chapter introduces functions, which are reusable blocks of code that perform specific tasks. You will learn how to define, call, and pass arguments to functions. It also covers modules and how to import them.",\n        "duration": "15 minutes"\n      }\n    ],\n    "category": "Programming",\n    "topic": "Python",\n    "level": "Basic",\n    "duration": "1 hour",\n    "noOfChapters": 5\n  }\n}\n```',
        },
      ],
    },
  ],
});
export const GenerateChapterContent_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Explain the concept in Detail on Topic:health,Chapter:Stress Management and Mindfulness , in JSON Format with list of array with field as title,explanation on given chapter in detail, Code Example  if applicable\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "title": "Stress Management and Mindfulness",\n    "explanation": "Stress is a natural response to challenging or demanding situations. However, chronic stress can have a significant impact on our physical and mental well-being. Mindfulness is a powerful tool for managing stress and improving overall health. It involves paying attention to the present moment without judgment, cultivating awareness of thoughts, feelings, and sensations.",\n    "code": ""\n  },\n  {\n    "title": "Understanding Stress",\n    "explanation": "Stress can be defined as any real or perceived threat to our well-being. It triggers a physiological response known as the \\"fight-or-flight\\" response, involving the release of hormones like adrenaline and cortisol. While this response is helpful in short-term emergencies, chronic stress can lead to a range of health problems, including anxiety, depression, cardiovascular disease, and weakened immune system.",\n    "code": ""\n  },\n  {\n    "title": "Mindfulness Techniques",\n    "explanation": "Mindfulness practices involve cultivating present moment awareness through techniques like meditation, deep breathing exercises, and mindful movement. These techniques help us to become more aware of our thoughts, feelings, and bodily sensations, allowing us to observe them without judgment and develop greater emotional regulation.",\n    "code": ""\n  },\n  {\n    "title": "Benefits of Mindfulness for Stress Management",\n    "explanation": "Mindfulness has been shown to reduce stress levels, improve emotional regulation, increase self-awareness, and enhance focus and concentration. By cultivating present moment awareness, we can interrupt the cycle of negative thoughts and emotions associated with stress, promoting a sense of calm and well-being.",\n    "code": ""\n  },\n  {\n    "title": "Mindfulness Meditation",\n    "explanation": "Mindfulness meditation involves focusing attention on the present moment without judgment. It can be practiced by sitting or lying down in a comfortable position, focusing on the breath, body sensations, or sounds in the environment. Regular practice helps to develop a greater sense of awareness and reduce stress.",\n    "code": ""\n  },\n  {\n    "title": "Mindful Breathing",\n    "explanation": "Mindful breathing is a simple yet powerful technique that can be used to reduce stress and promote relaxation. It involves focusing on the sensation of breath as it enters and leaves the body, paying attention to the rise and fall of the chest and abdomen.",\n    "code": ""\n  },\n  {\n    "title": "Mindful Movement",\n    "explanation": "Mindful movement incorporates elements of mindfulness into physical activities like yoga, tai chi, or walking. It involves paying attention to the sensations of movement, body position, and breath, cultivating a sense of presence and awareness during physical activity.",\n    "code": ""\n  },\n  {\n    "title": "Integrating Mindfulness into Daily Life",\n    "explanation": "Mindfulness can be integrated into daily life through various activities such as mindful eating, mindful walking, and mindful communication. By paying attention to our experiences in the present moment, we can cultivate a greater sense of peace and reduce stress throughout the day.",\n    "code": ""\n  }\n]\n```',
        },
      ],
    },
  ],
});
