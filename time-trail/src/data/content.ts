export type EraId =
  | "ancient"
  | "classical"
  | "medieval"
  | "exploration"
  | "modern"
  | "space";

export type Story = {
  slug: string;
  title: string;
  shortTitle: string;
  eraId: EraId;
  yearLabel: string;
  yearSort: number;
  minutes: number;
  blurb: string;
  heroGradient: string;
  accent: string;
  icon: string;
  paragraphs: string[];
  funFact: string;
  quiz: {
    question: string;
    choices: string[];
    correctIndex: number;
    explain: string;
  }[];
};

export type Era = {
  id: EraId;
  name: string;
  range: string;
  color: string;
  soft: string;
  summary: string;
};

export const eras: Era[] = [
  {
    id: "ancient",
    name: "Ancient Worlds",
    range: "3000–500 BCE",
    color: "#C47A2C",
    soft: "#F6E7D4",
    summary: "People built cities, wrote stories, and raised stone wonders.",
  },
  {
    id: "classical",
    name: "Classical Age",
    range: "500 BCE–500 CE",
    color: "#2F6F8F",
    soft: "#D7EAF2",
    summary: "Ideas about games, law, and learning traveled far.",
  },
  {
    id: "medieval",
    name: "Middle Ages",
    range: "500–1400",
    color: "#3F6B4A",
    soft: "#DCE9DF",
    summary: "Castles rose. Rules of fairness began to grow.",
  },
  {
    id: "exploration",
    name: "Age of Voyages",
    range: "1400–1700",
    color: "#1F7A6C",
    soft: "#D4EFEA",
    summary: "Ships crossed oceans. Maps of the world changed.",
  },
  {
    id: "modern",
    name: "Modern Times",
    range: "1700–1950",
    color: "#8B4A2F",
    soft: "#F1E0D7",
    summary: "New nations and big inventions reshaped daily life.",
  },
  {
    id: "space",
    name: "Space Age",
    range: "1950–today",
    color: "#3558A0",
    soft: "#DCE5F7",
    summary: "Humans left Earth and looked back at our blue home.",
  },
];

export const stories: Story[] = [
  {
    slug: "great-pyramid",
    title: "The Great Pyramid of Giza",
    shortTitle: "Great Pyramid",
    eraId: "ancient",
    yearLabel: "about 2560 BCE",
    yearSort: -2560,
    minutes: 3,
    blurb: "Workers stacked millions of stones into a mountain for a pharaoh.",
    heroGradient: "linear-gradient(145deg, #f3d5a0 0%, #c47a2c 45%, #6e3b16 100%)",
    accent: "#C47A2C",
    icon: "△",
    paragraphs: [
      "Long ago in Egypt, a pharaoh named Khufu wanted a grand tomb. His builders chose a flat plateau near the Nile River.",
      "Teams cut limestone blocks and hauled them into place. Some stones weighed as much as a small car. Ramps helped people move them higher.",
      "The finished pyramid stood about 146 meters tall. For thousands of years it was the tallest building on Earth.",
      "Inside, narrow passages lead to burial rooms. Outside, the desert still holds the quiet shape of this giant triangle.",
    ],
    funFact:
      "About 2.3 million stones make up the Great Pyramid. If you stacked them end to end, the line would stretch for hundreds of miles.",
    quiz: [
      {
        question: "Who was the Great Pyramid built for?",
        choices: ["Pharaoh Khufu", "Queen Cleopatra", "King Tut", "Julius Caesar"],
        correctIndex: 0,
        explain: "It was the tomb project for Pharaoh Khufu.",
      },
      {
        question: "About how tall was the pyramid when finished?",
        choices: ["46 meters", "96 meters", "146 meters", "246 meters"],
        correctIndex: 2,
        explain: "It rose about 146 meters—taller than most city buildings of that time.",
      },
      {
        question: "What river flowed near the pyramid site?",
        choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctIndex: 1,
        explain: "Builders worked on a plateau near the Nile.",
      },
    ],
  },
  {
    slug: "first-olympics",
    title: "The First Olympic Games",
    shortTitle: "First Olympics",
    eraId: "classical",
    yearLabel: "776 BCE",
    yearSort: -776,
    minutes: 3,
    blurb: "Athletes raced and wrestled at Olympia to honor the gods.",
    heroGradient: "linear-gradient(145deg, #9fd0e8 0%, #2f6f8f 50%, #16384a 100%)",
    accent: "#2F6F8F",
    icon: "◎",
    paragraphs: [
      "In ancient Greece, people gathered at a place called Olympia. They came for sports, music, and shared respect for the gods.",
      "The first recorded games were in 776 BCE. At first, runners raced one short sprint called the stade.",
      "Later games added wrestling, boxing, chariot races, and the pentathlon. Winners earned olive wreaths and great pride for their city.",
      "Wars often paused so athletes and fans could travel safely. The Olympics became a meeting place for many Greek cities.",
    ],
    funFact:
      "Olympic winners did not get medals. They wore crowns made from wild olive branches.",
    quiz: [
      {
        question: "Where were the ancient Olympics held?",
        choices: ["Athens", "Rome", "Olympia", "Sparta"],
        correctIndex: 2,
        explain: "The festival took place at Olympia in Greece.",
      },
      {
        question: "What did winners receive?",
        choices: ["Gold medals", "Olive wreaths", "Silver coins", "Purple cloaks"],
        correctIndex: 1,
        explain: "Victors wore wreaths cut from olive trees.",
      },
      {
        question: "What was the first recorded Olympic event?",
        choices: ["A short footrace", "Swimming", "Soccer", "Archery"],
        correctIndex: 0,
        explain: "The earliest recorded contest was a short sprint.",
      },
    ],
  },
  {
    slug: "magna-carta",
    title: "Magna Carta: A Promise of Fair Rules",
    shortTitle: "Magna Carta",
    eraId: "medieval",
    yearLabel: "1215",
    yearSort: 1215,
    minutes: 3,
    blurb: "English leaders asked their king to follow written limits.",
    heroGradient: "linear-gradient(145deg, #cfe0d3 0%, #3f6b4a 48%, #1f3526 100%)",
    accent: "#3F6B4A",
    icon: "✎",
    paragraphs: [
      "In 1215, King John of England faced angry barons. They said he taxed too much and broke his own promises.",
      "At Runnymede meadow, the king sealed a charter called Magna Carta. It listed rules the king should follow.",
      "One big idea: leaders should not punish people without a fair process. Another: taxes needed agreement from important councils.",
      "The charter was rewritten over time. Its spirit still teaches that written laws can protect people from unfair power.",
    ],
    funFact:
      "Magna Carta means “Great Charter” in Latin. Copies were sent around England so people could hear the new rules.",
    quiz: [
      {
        question: "In what year was Magna Carta sealed?",
        choices: ["1066", "1215", "1492", "1776"],
        correctIndex: 1,
        explain: "King John sealed it in 1215.",
      },
      {
        question: "What is one idea from Magna Carta?",
        choices: [
          "Kings never make mistakes",
          "Leaders should follow fair rules",
          "Only knights may read books",
          "Castles must be painted green",
        ],
        correctIndex: 1,
        explain: "It limited some royal power and asked for fair treatment.",
      },
      {
        question: "Where was Magna Carta agreed?",
        choices: ["Runnymede", "Paris", "Cairo", "Beijing"],
        correctIndex: 0,
        explain: "The meeting happened at Runnymede in England.",
      },
    ],
  },
  {
    slug: "zheng-he",
    title: "Zheng He’s Giant Treasure Fleets",
    shortTitle: "Zheng He",
    eraId: "exploration",
    yearLabel: "1405–1433",
    yearSort: 1405,
    minutes: 3,
    blurb: "A Chinese admiral led huge ships across the Indian Ocean.",
    heroGradient: "linear-gradient(145deg, #9fe0d4 0%, #1f7a6c 50%, #0d3f38 100%)",
    accent: "#1F7A6C",
    icon: "≈",
    paragraphs: [
      "During China’s Ming dynasty, Admiral Zheng He led several ocean voyages. His fleets carried gifts, maps, and skilled sailors.",
      "Some ships were among the largest wooden vessels of their day. They sailed to ports in Southeast Asia, India, Arabia, and East Africa.",
      "The voyages showed friendship and power. Crews traded silk and porcelain and brought home animals, spices, and stories.",
      "After Zheng He, China paused these long trips. Still, his journeys prove that ocean exploration happened in many parts of the world.",
    ],
    funFact:
      "Zheng He’s fleets sometimes included more than 200 ships sailing together—like a floating city.",
    quiz: [
      {
        question: "Who was Zheng He?",
        choices: [
          "A Chinese admiral",
          "A Roman emperor",
          "An Egyptian pharaoh",
          "A Viking farmer",
        ],
        correctIndex: 0,
        explain: "He commanded Ming dynasty treasure fleets.",
      },
      {
        question: "Which ocean region did his fleets cross?",
        choices: ["Indian Ocean", "Arctic Ocean", "Great Lakes", "Dead Sea"],
        correctIndex: 0,
        explain: "They sailed across the Indian Ocean to many ports.",
      },
      {
        question: "What did the fleets often carry?",
        choices: ["Only weapons", "Gifts and trade goods", "Only dinosaurs", "Ice cream"],
        correctIndex: 1,
        explain: "They carried gifts, trade goods, maps, and skilled crews.",
      },
    ],
  },
  {
    slug: "moon-landing",
    title: "First Steps on the Moon",
    shortTitle: "Moon Landing",
    eraId: "space",
    yearLabel: "1969",
    yearSort: 1969,
    minutes: 3,
    blurb: "Apollo 11 carried people to the Moon—and back home safely.",
    heroGradient: "linear-gradient(145deg, #c9d7f5 0%, #3558a0 48%, #10182f 100%)",
    accent: "#3558A0",
    icon: "☾",
    paragraphs: [
      "On July 20, 1969, the Apollo 11 mission reached the Moon. Astronauts Neil Armstrong and Buzz Aldrin landed in a craft called Eagle.",
      "Armstrong stepped onto the dusty surface and spoke words heard around the world. Aldrin joined him soon after. Michael Collins orbited above in the command ship.",
      "They planted a flag, gathered rocks, and set up simple science tools. Then they blasted off the Moon to rejoin Collins.",
      "Splashdown in the Pacific Ocean ended the trip. The mission showed that careful teamwork can turn a huge dream into real footsteps.",
    ],
    funFact:
      "Moon dust sticks like fine powder. The astronauts’ boots left sharp prints that may last for a very long time.",
    quiz: [
      {
        question: "Which mission first landed people on the Moon?",
        choices: ["Apollo 11", "Apollo 1", "Gemini 7", "Voyager 2"],
        correctIndex: 0,
        explain: "Apollo 11 made the first crewed Moon landing in 1969.",
      },
      {
        question: "Who took the first step on the Moon?",
        choices: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Sally Ride"],
        correctIndex: 1,
        explain: "Neil Armstrong stepped out first.",
      },
      {
        question: "Where did Apollo 11 splash down?",
        choices: ["Pacific Ocean", "Sahara Desert", "Amazon River", "North Pole"],
        correctIndex: 0,
        explain: "The crew returned safely to the Pacific Ocean.",
      },
    ],
  },
  {
    slug: "liberty-bell",
    title: "The Liberty Bell and a New Nation",
    shortTitle: "Liberty Bell",
    eraId: "modern",
    yearLabel: "1752–1776",
    yearSort: 1752,
    minutes: 3,
    blurb: "A cracked bell became a symbol of freedom in the United States.",
    heroGradient: "linear-gradient(145deg, #efd2c0 0%, #8b4a2f 50%, #3d2114 100%)",
    accent: "#8B4A2F",
    icon: "♪",
    paragraphs: [
      "In 1752, a big bell arrived in Philadelphia for the State House. It cracked on an early test ring and had to be melted and cast again.",
      "The bell’s words come from the Bible: “Proclaim Liberty throughout all the Land.” People later linked it to the fight for American independence.",
      "In 1776, leaders in Philadelphia approved the Declaration of Independence. Bells around the city rang to share the news.",
      "The Liberty Bell cracked again over time. Today it still teaches that freedom needs care, courage, and fair laws.",
    ],
    funFact:
      "The famous crack is part of the bell’s story. Guides ask visitors to look for the thin split that stops a full, clear ring.",
    quiz: [
      {
        question: "In which city does the Liberty Bell stand?",
        choices: ["Boston", "Philadelphia", "New York", "Chicago"],
        correctIndex: 1,
        explain: "It belongs to Philadelphia’s history.",
      },
      {
        question: "What idea is linked to the Liberty Bell?",
        choices: ["Faster ships", "Liberty and freedom", "Space travel", "Pyramid building"],
        correctIndex: 1,
        explain: "Its message became a symbol of liberty.",
      },
      {
        question: "What important paper was approved in 1776 nearby?",
        choices: [
          "Magna Carta",
          "Declaration of Independence",
          "Olympic rulebook",
          "Moon map",
        ],
        correctIndex: 1,
        explain: "The Declaration of Independence was approved in Philadelphia in 1776.",
      },
    ],
  },
];

export function getEra(id: EraId): Era {
  const era = eras.find((e) => e.id === id);
  if (!era) throw new Error(`Unknown era: ${id}`);
  return era;
}

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function storiesByEra(eraId: EraId): Story[] {
  return stories
    .filter((s) => s.eraId === eraId)
    .sort((a, b) => a.yearSort - b.yearSort);
}

export function allStoriesChronological(): Story[] {
  return [...stories].sort((a, b) => a.yearSort - b.yearSort);
}
