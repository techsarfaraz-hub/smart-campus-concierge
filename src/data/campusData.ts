// Mock campus data for the Smart Campus Assistant

export interface CampusInfo {
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

export const campusDatabase: CampusInfo[] = [
  // Schedules
  {
    category: "schedules",
    question: "What are the library hours?",
    answer: "The main library is open Monday-Thursday 7:00 AM - 12:00 AM, Friday 7:00 AM - 9:00 PM, Saturday 9:00 AM - 9:00 PM, and Sunday 10:00 AM - 12:00 AM. Study rooms are available 24/7 with student ID access.",
    keywords: ["library", "hours", "schedule", "open", "time", "study"]
  },
  {
    category: "schedules",
    question: "When does registration open?",
    answer: "Registration for the Spring 2024 semester opens on November 15th for seniors, November 20th for juniors, November 25th for sophomores, and December 1st for freshmen. Check your student portal for your exact time slot.",
    keywords: ["registration", "enroll", "classes", "semester", "spring", "schedule"]
  },
  {
    category: "schedules",
    question: "What are the academic calendar dates?",
    answer: "Spring 2024 classes begin January 22nd. Spring break is March 11-15. Finals week is May 6-10. Summer session starts May 20th. Fall 2024 orientation begins August 19th, with classes starting August 26th.",
    keywords: ["calendar", "semester", "break", "finals", "start", "end", "summer"]
  },

  // Facilities
  {
    category: "facilities",
    question: "Where is the fitness center?",
    answer: "The Campus Recreation Center is located in the Student Union building, 2nd floor. It features cardio equipment, weight training, group fitness studios, and an indoor track. Open daily 5:00 AM - 11:00 PM.",
    keywords: ["gym", "fitness", "recreation", "workout", "exercise", "sports"]
  },
  {
    category: "facilities",
    question: "How do I book a study room?",
    answer: "Study rooms can be reserved through the library website or mobile app up to 7 days in advance. Rooms are available for 2-hour blocks and can be extended if no one else has booked them. Group study rooms accommodate 4-8 people.",
    keywords: ["study room", "book", "reserve", "library", "group", "private"]
  },
  {
    category: "facilities",
    question: "Where can I print documents?",
    answer: "Printing services are available at the library (1st and 3rd floors), computer labs in the Academic Building, and the Student Union. You can also use the mobile printing service through the campus app. Color printing is available at the library main desk.",
    keywords: ["print", "printing", "documents", "library", "computer", "color"]
  },

  // Dining
  {
    category: "dining",
    question: "What dining options are available on campus?",
    answer: "Campus dining includes the Main Dining Hall (all-you-can-eat), Café Verde (grab-and-go), The Grill (burgers & sandwiches), Panda Express, Starbucks, and various food trucks. Most locations accept meal plans and dining dollars.",
    keywords: ["food", "dining", "eat", "restaurant", "meal plan", "cafeteria"]
  },
  {
    category: "dining",
    question: "What are the dining hall hours?",
    answer: "Main Dining Hall: Breakfast 7:00-10:00 AM, Lunch 11:00 AM-3:00 PM, Dinner 5:00-9:00 PM. Weekend hours: Brunch 9:00 AM-2:00 PM, Dinner 5:00-8:00 PM. Other locations vary - check the dining app for current hours.",
    keywords: ["dining", "hours", "breakfast", "lunch", "dinner", "schedule", "time"]
  },
  {
    category: "dining",
    question: "Do you have vegetarian and vegan options?",
    answer: "Yes! All dining locations offer vegetarian options, and the Main Dining Hall has a dedicated vegan station. The Roots Café specializes in plant-based meals. All menus are marked with dietary symbols for easy identification.",
    keywords: ["vegetarian", "vegan", "dietary", "plant-based", "food", "restrictions"]
  },

  // Library Services
  {
    category: "library",
    question: "How do I access online databases?",
    answer: "Online databases are accessible through the library website using your student ID and password. Off-campus access requires VPN connection. Popular databases include JSTOR, ProQuest, and EBSCOhost. Ask librarians for research assistance.",
    keywords: ["database", "online", "research", "journals", "articles", "access"]
  },
  {
    category: "library",
    question: "Can I borrow books from other libraries?",
    answer: "Yes, through our Interlibrary Loan (ILL) service. Submit requests through the library website. Most items arrive within 5-7 business days. Articles are usually delivered electronically within 24-48 hours. Service is free for students.",
    keywords: ["borrow", "interlibrary", "loan", "books", "other", "libraries"]
  },
  {
    category: "library",
    question: "How long can I keep borrowed books?",
    answer: "Undergraduate students: 3 weeks for regular books, 7 days for reserves. Graduate students: 8 weeks for regular books. Renewals are possible if no holds exist. Late fees are $0.25 per day per item.",
    keywords: ["borrow", "return", "due date", "renewal", "fine", "overdue"]
  },

  // Administrative
  {
    category: "administrative",
    question: "How do I get a parking permit?",
    answer: "Parking permits are purchased online through the Campus Safety website. Student permits cost $150/semester. Faculty/staff permits are $300/semester. Daily visitor passes are $5. Appeals for tickets can be submitted online within 10 days.",
    keywords: ["parking", "permit", "pass", "ticket", "appeal", "cost"]
  },
  {
    category: "administrative",
    question: "Where do I get my student ID card?",
    answer: "Student ID cards are issued at the Campus Card Office in the Student Union, Room 150. Bring a photo ID and your student number. First card is free, replacements cost $15. The office is open Monday-Friday 9:00 AM-5:00 PM.",
    keywords: ["id card", "student id", "campus card", "replacement", "photo"]
  },
  {
    category: "administrative",
    question: "How do I drop or add a class?",
    answer: "Add/drop is done through your student portal. The deadline for adding classes is the end of the first week. Drop deadline without penalty is the end of the fourth week. After that, withdrawals show as 'W' on transcript and may affect financial aid.",
    keywords: ["drop", "add", "withdraw", "class", "course", "deadline", "portal"]
  }
];

export const quickResponses = [
  "Hi! I'm your Smart Campus Assistant. How can I help you today?",
  "I can help you with campus schedules, facilities, dining, library services, and administrative procedures.",
  "Feel free to ask me about anything related to campus life!",
  "Is there something specific you'd like to know about campus?"
];

export function findBestMatch(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // Look for keyword matches
  const matches = campusDatabase.filter(item => 
    item.keywords.some(keyword => input.includes(keyword.toLowerCase()))
  );
  
  if (matches.length > 0) {
    // Return the best match (first one for now, could be improved with scoring)
    return matches[0].answer;
  }
  
  // Fallback responses
  if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
    return "Hello! I'm your Smart Campus Assistant. I can help you with information about campus schedules, facilities, dining options, library services, and administrative procedures. What would you like to know?";
  }
  
  if (input.includes("help") && input.length < 20) {
    return "I'm here to help! You can ask me about:\n\n• Campus schedules and academic calendar\n• Facilities like the gym, study rooms, and computer labs\n• Dining options and hours\n• Library services and resources\n• Administrative procedures like parking permits and registration\n\nWhat specific information are you looking for?";
  }
  
  return "I'm not sure about that specific question, but I can help you with campus schedules, facilities, dining, library services, and administrative procedures. Could you try asking about one of these topics, or rephrase your question?";
}