import App from "../../App";
// ************************************************************#########*************************************************************************
// ************************************************************#########*************************************************************************
const cultural = [
  {
    name: "Let's Nacho",
    details:
      " A Dance competition to show the colors and energy of the youth through dance.Bring along any theme, any song but the goal remains the same, you have to capture the crowd with your performances",
    image: "./Images/Event/Cultural/dance.png",
    event_poster: "../Images/Event/subevents/cultural/battle of dancers@4x.png",
    rulebook: "",
    registration_link: [
      "https://unstop.com/creative-cultural-event/lets-nacho-group-technovate-2022-international-institute-of-information-technology-iiit-naya-rai-440203",
      "https://unstop.com/creative-cultural-event/lets-nacho-solo-technovate-2022-international-institute-of-information-technology-iiit-naya-raip-440200",
    ],
    event_heads: ["Sontu Akshath Rishi", "Akriti Dhurandher"],
    volunteer_heads: [
      "Jitendra Kumar",
      "Sahil Dewangan",
      "Jyoti sahu",
      "Vishal Raj Bais",
    ],
  },
  {
    name: "The New Vogue",
    details:
      'Brace yourselves for a wide variety of dressing styles, with sassy attires, a touch of makeup, and a body filled with confidence and enthusiasm, and bring out the best of fashion sense that you have. Let us bring together all the fashion enthusiasts and launch "The New Vogue" ',
    image: "./Images/Event/Cultural/crown.png",
    event_poster: "../Images/Event/subevents/cultural/The New Vogue-1.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/the-new-vogue-technovate-2022-440472?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
    event_heads: ["Sanjam Bedi", "Shristi Tiwari"],
    volunteer_heads: [],
  },
  {
    name: "Rangotsav (In A Flash)",
    details:
      " Rangotsav is an open call to all artists out there, to go beyond the ordinary and present their unique perspective to the world out there. ",
    image: "./Images/Event/Cultural/photography.png",
    event_poster: "../Images/Event/subevents/cultural/IN_aFlash.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/rangotsav-in-a-flash-technovate-2022-international-institute-of-information-technology-iiit-naya-443729",
    event_heads: ["Sahil", "Riya D"],
    volunteer_heads: ["Akaash Trivedi", "Esha Markam"],
  },
  {
    name: "Canvas Carnival",
    details:
      " Rangotsav is an open call to all artists out there, to go beyond the ordinary and present their unique perspective to the world out there. ",
    image: "./Images/Event/Cultural/rangotsav.png",
    event_poster: "../Images/Event/subevents/cultural/Canvas Carnival.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/rangotsav-canvas-carnival-technovate-2022-international-institute-of-information-technology-iiit-447522",
    event_heads: ["Sahil", "Riya D"],
    volunteer_heads: ["Akaash Trivedi", "Esha Markam"],
  },
  {
    name: "Raag Raatri",
    details:
      "An electrifying musical competition to show the creativity and energy of the masses expressed via their musical passion, in their mother tongue. Musicality and command over vocals and instruments remains the biggest criteria",
    image: "./Images/Event/Cultural/raagraatri.png",
    event_poster: "../Images/Event/subevents/cultural/Raag Raatri@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/raag-raatri-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-442714?lb=krS2uTq",
    event_heads: ["Shreedhar Tiwari", "Sonali Tudu"],
    volunteer_heads: [
      "Akash Trivedi",
      "Sahil Dewangan",
      "Jaydeep",
      "Nidhi Vaishnav",
      "Jyoti Khute",
      "Rahul Meshram",
      "Nikhil Kumar kurrey",
    ],
  },
  {
    name: "Battle of Bands",
    details:
      "An electrifying musical competition to show the creativity and energy of the masses expressed via their musical passion.Bring along any theme, any song but the goal remains the same, you have to capture the crowd with your performances, and impress the judges. ",
    image: "./Images/Event/Cultural/bands.png",
    event_poster: "../Images/Event/subevents/cultural/battle of bands@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/battle-of-bands-technovate-2022-international-institute-of-information-technology-iiit-naya-raip-440616?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
    event_heads: ["Gautam Gupta", "Aarsh Vaidya"],
    volunteer_heads: ["Nikhil Kumar kurrey", "Chirag Matta", "Ajay Kumar"],
  },
  {
    name: "Gamer's Crusade",
    details:
      " An Esports tournament by Technovate IIIT-NR consisting of Mobile and PC games open for all Esports players across the country. The tournament consists of  3 games namely:- BGMI, Valorant, CS:GO. Players can participate in the event and win a prize pool worth thousands in each game. ",
    image: "./Images/Event/Cultural/gamers.png",
    event_poster: "../Images/Event/subevents/cultural/GC_valo@4x.png",
    rulebook: "",
    registration_link: "",
    event_heads: ["Parth Bhandakkar", "Shresht Mishra"],
    volunteer_heads: [
      "Akshay Pandey",
      "Chirag Jain",
      "Aarsh Vaidya",
      "Srijan Ratrey",
      "Ramesh Chandra Bhanu",
    ],
  },
  {
    name: "Awaaz",
    details:
      "Awaaz is a form of street play to create awareness or strengthen social emotions. The less seen, the more heard. The eye is the enemy of the ear in real drama.",
    image: "./Images/Event/Cultural/stage.png",
    event_poster: "../Images/Event/subevents/cultural/Awaaz.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/creative-cultural-event/awaaz-technovate-2022-440499",
    event_heads: ["Aadi juvekar", "Parth Jhunjhunwala", " Aaditya Tripathi"],
    volunteer_heads: ["Aaditya Kumar", "Vinod chandravanshi"],
  },
];
// ************************************************************#########*************************************************************************
// ************************************************************#########*************************************************************************
const informal = [
  {
    name: "Futsal",
    details:
      " Futsal is the FIFA-recognised form of small-sided indoor football (the word is a contraction of the Spanish 'fútbol sala'). It will be played between two teams who each have three players on the pitch at any one time, with rolling substitutes and a smaller ball than soccer that is harder and less bouncy. This game is much more than just scoring goals, it is about coordination among players , the art of footwork and not speed but accuracy. Futsal is not about just hitting the ball using your foot into a goal, it's about how smoothly the ball moves when it comes to handling by your foot, how it fools someone else’s eyes. It's all about your “Foot-Soul” ",
    image: "./Images/Event/Informal/futsal.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["M.V. Chirag", "Aarsh Vaidya"],
    volunteer_heads: [
      "Abhay Kumar",
      "Aman Kumar",
      "Jyoti Sahu",
      "Vinod Chandravanshi",
    ],
  },
  {
    name: "Foosball",
    details:
      "A tabletop version of soccer in which players turn rods fixed on top of a playing box and attached to miniature figures of players, in order to flick the ball and strike it toward the goal.",
    image: "./Images/Event/Informal/foosball.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["M.V. Chirag", "Ojas Dubey", "Anshul Gupta"],
    volunteer_heads: [
      "Tanu Patel",
      "Nidhi Vaishnav",
      "Akash Dewangan",
      "Suyash Gupta",
    ],
  },
  {
    name: "Gamer's Crusade",
    details:
      "It is an online gaming event in which teams will participate in different games and compete against each other",
    image: "./Images/Event/Informal/team.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["Parth Bhandakkar", "Shresht Mishra"],
    volunteer_heads: [
      "Adnan Akhtar",
      "Harsh Patel",
      "Jyoti Sahu",
      "Sahil Dewangan",
    ],
  },
  {
    name: "Escape the Room",
    details:
      "A room in which people are locked in order to play a game requiring them to solve a series of puzzles within a certain amount of time to accomplish a goal, typically finding the key to unlock the room. In this case, it would be the code to unlock a buzzer. The soom has a typical setting and is based on a particular storyline",
    image: "./Images/Event/Informal/escape.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["Jay Deep Singh", "Parth Jhunjhunwala"],
    volunteer_heads: [
      "Priyanshi Xess",
      "Nidhi Vaishnav",
      "Vinod Chandravanshi",
      "Akash Dewangan",
    ],
  },
  {
    name: "Smash Hitz (Net Cricket)",
    details:
      "A player is given a challenge to score certain runs in defined number of deliveries with the target being displayed after every delivery making the game more exciting and also gives a nail biting experience to the viewers watching the play.",
    image: "./Images/Event/Informal/cricket.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["Jay Deep Singh", "Deependra Singh Bhow"],
    volunteer_heads: [
      "Abhay Kumar",
      "Jyoti Sahu",
      "Tanu Patel",
      "Suyash Gupta",
    ],
  },
  {
    name: "Casino Royale",
    details:
      "Roulette is a casino game in which a player may choose to place a bet on a single number, various groupings of numbers, the color red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18). Each player can bet only in the range of 1 token to 5 tokens.",
    image: "./Images/Event/Informal/roulette.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["Ayushman Tripathi", "Aarsh Vaidya", "Anshul Gupta"],
    volunteer_heads: [
      "Adnan Akhtar",
      "Sahil Dewangan",
      "Priyanshi Xess",
      "Nidhi Vaishnav",
    ],
  },
  {
    name: "VR Gaming",
    details:
      "Different games will be played in the AR/VR format. The exact types of the games will depend upon the sponsors.",
    image: "./Images/Event/Informal/vr.png",
    event_poster: "",
    rulebook: "",
    event_heads: ["Ayushman Tripathi", "Navneet Kumar Chaubey"],
    volunteer_heads: [
      "Aman Kumar",
      "Harsh Patel",
      "Tanu Patel",
      "Akash Dewangan",
    ],
  },
];

// ************************************************************#########*************************************************************************
// ************************************************************#########*************************************************************************
const technical = [
  {
    name: "Codewars",
    details:
      " CodeWars is the core coding competition of Technovate 2022. The participants will compete to solve the highest number of questions correctly in the allotted time, where wrong submissions will include penalties. These questions will test the contestant’s basic programming skills, along with their logical and mathematical reasoning abilities. It will be in the ICPC format. There will be two rounds \n which are Preliminary round Final round ",
    image: "./Images/Event/Technical/codewars.png",
    event_poster: "../Images/Event/subevents/technical/codewar@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/hackathon/code-wars-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-436660",
    event_heads: ["Kapil Soni", "Vedica Mishra"],
    volunteer_heads: ["Aryan Gadroo", "Sanskriti Patel"],
  },
  {
    name: "Its Data Time",
    details: "Kaggle competition followed by solution presentation",
    image: "./Images/Event/Technical/itsdatatime.png",
    event_poster: "../Images/Event/subevents/technical/itsdatatime@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/competition/its-data-time-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439997",
    event_heads: ["Sainath Reddy", "Supriya"],
    volunteer_heads: ["Paul Akash"],
  },
  {
    name: "Hacknovate",
    details:
      "Hackathon where participating teams will be developing applications that are viable solutions for problem statements.",
    image: "./Images/Event/Technical/hackathon.png",
    event_poster: "../Images/Event/subevents/technical/hacknovate@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/hackathon/hacknovate-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440060",
    event_heads: ["Vinayak", "Sankalp"],
    volunteer_heads: ["Gaurish", "Vandit Tyagi"],
  },
  {
    name: "Robolution",
    details:
      "A competition to test the robot-making skills of the youth through various challenges. Bring along your robot with the specification mentioned and test how your robot performs in our arena and defeat other opponents to conquer the prize",
    image: "./Images/Event/Technical/robolution.png",
    event_poster: "../Images/Event/subevents/technical/robolution@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/competition/robolution-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440053",
    event_heads: ["Vikalp", "Anmol Agrawal"],
    volunteer_heads: ["Sanskar Singh Bhardwaj", "Priyanshu Sidar"],
  },
  {
    name: "ElectroBlitz",
    details:
      "ElectroBlitz, the electronics event of Technovate 2022, will be a closed theme sensor-based project development and presentation competition.It will be conducted in two rounds, the Preliminary round will be ONLINE on Unstop and the Final round will be OFFLINE at IIIT Naya Raipur",
    image: "./Images/Event/Technical/electroblitz.png",
    event_poster: "../Images/Event/subevents/technical/electroblitz@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/competition/electroblitz-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440056",
    event_heads: ["Vasanth Murukuri", "Tushar Rusia"],
    volunteer_heads: ["Aditya Saxena", "Vedanshu Dewangan", "Ajeet Ram Varma"],
  },
  {
    name: "Buzzreign",
    details:
      "A fantastic opportunity to test the drone maneuvering skills of the participants via two very fun events to test the capabilities of the participants. These include an obstacle course and a race to determine the best drone pilots in the event who will be awarded for their excellence.",
    image: "./Images/Event/Technical/buzzreign.png",
    event_poster: "../Images/Event/subevents/technical/buzzreign@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/competition/buzzreign-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-440433?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=opportunity-approved",
    event_heads: ["Aayushman", "Aadi Juvekar"],
    volunteer_heads: ["Anshul Gupta", "Firoz Ahmed", "Nanditha"],
  },
  {
    name: "Bug Bash",
    details:
      "A great opportunity to improve debugging, analytical and logical skills by identifying and fixing bugs in various competitive programming problems",
    image: "./Images/Event/Technical/bugfixing.png",
    event_poster: "../Images/Event/subevents/technical/bug bash@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/hackathon/bug-bash-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439868",
    event_heads: ["Kondury Rishab", "Shivaibhav"],
    volunteer_heads: ["Pratyush Parashar", "Ravil Patel"],
  },
  {
    name: "Hack Crypto",
    details: "Hack crypto is a ethereum smart contract hacking game.",
    image: "./Images/Event/Technical/hackcrypto.png",
    event_poster: "../Images/Event/subevents/technical/hackcrypto@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/hackathon/hack-crypto-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439912",
    event_heads: ["Ashutosh", "Aditya Kaul"],
    volunteer_heads: ["Adnan Akhtar", "Gautam Sarawagi"],
  },
  {
    name: "Unlock the Technoverse",
    details:
      "The event challenges will be divided into different categories based on difficulty level. Each challenge will differ in points based on the difficulty level. The team with the maximum scored points will be considered the winner, and a subsequent hierarchy will be maintained based on points scored by the teams",
    image: "./Images/Event/Technical/technoverse.png",
    event_poster:
      "../Images/Event/subevents/technical/unlockthetechnoverse@4x.png",
    rulebook: "",
    registration_link: "",
    event_heads: ["Aditya Goel", "Aman Sahu"],
    volunteer_heads: ["Sanskar Singh", "Priykrit Varma"],
  },
  {
    name: "Conquer The Space",
    details:
      "24 individuals will qualify for Prelims. 12 Teams will be formed by chit-draw. In the end, three teams will be winning positions through various levels.",
    image: "./Images/Event/Technical/conquerspace.png",
    event_poster:
      "../Images/Event/subevents/technical/conquer the space@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/quiz/conquer-the-space-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439924",
    event_heads: ["Shivam Kushwaha", "Siri Arelli"],
    volunteer_heads: ["Anirudh", "Rigved"],
  },
  {
    name: "Infinity Perlpex",
    details:
      "A fantastic opportunity to explore the analytical and logical skills of the individual and gain deeper insights from coding by implementing it in the given scenarios",
    image: "./Images/Event/Technical/infinity.png",
    event_poster: "../Images/Event/subevents/technical/infinity perplex@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/hackathon/infinity-perplex-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439935",
    event_heads: ["Yash Ghodekar"],
    volunteer_heads: ["Swarup Yeole"],
  },
  {
    name: "Investomania",
    details:
      "The event requires solo participation. Event will be hosted in Stockgro using the basic trading knowledge all the participants will be provided with some lumpsum virtual money which they would use to trade for stocks . The player with the maximum portfolio value at the end of event will be the winner .",
    image: "./Images/Event/Technical/investomania.png",
    event_poster: "../Images/Event/subevents/technical/investomania@4x.png",
    rulebook: "",
    registration_link:
      "https://unstop.com/competition/investomania-technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-439867",
    event_heads: ["Harsh Pandey", "Shubhanshu Arya"],
    volunteer_heads: ["Tushar Singh"],
  },
];
// ************************************************************#########*************************************************************************
// ************************************************************#########*************************************************************************
export const Data = () => {
  return (
    <App
      culturalData={cultural}
      technicalData={technical}
      informalData={informal}
    />
  );
};
// ************************************************************#########*************************************************************************
// ************************************************************#########*************************************************************************