import music1 from "../images/music-1.jpg";
import techeno from "../images/tech-1.jpg";
import food1 from "../images/food.jpg";
import photo from "../images/photo.jpg";
import Startup from "../images/startup-1.jpg";
import aiimage from "../images/ai-1.jpg";
import productlaunch from "../images/product-launch.jpg";
import startup2 from "../images/startup-2.png";
import tech3 from "../images/tech-3.jpg";
import music3 from "../images/music-3.jpg";
import music4 from "../images/music-4.jpg";
import music5 from "../images/music-5.jpg";
import music6 from "../images/music-6.jpg";
import music7 from "../images/music-7.jpg";
import cloudcom from "../images/cloudcom.jpg";
import webbootcamp from "../images/boostcamp.jpg";
import coffeeexpo from "../images/coffeeexpo.jpg";
import bakeryexpo from "../images/bakeryexpo.jpg";
import organicexpo from "../images/organicexpo.jpg";
import southindianexpo from "../images/southindianexpo.jpg";
import uiuxcamp from "../images/uiuxbootcamp.jpg";
import publicspeaking from "../images/publicspeaking.png";
import writingcamp from "../images/writingbootcamp.jpg";
import startuppitch from "../images/startuppitch.png";
import roundtable from "../images/roundtable.jpg";
import traditionalart from "../images/traditionalart.jpg";
import temporaryart from "../images/temporaryart.jpg";
import illusionart from "../images/illusionart.jpg";
import emergingart from "../images/emergingart.jpg";
import artwalk from "../images/artwalk.jpg";

const events = [
  {
    id: 1,
    title: "Chennai Indie Music Festival",
    category: "Music",
    date: "Oct 18, 2026",
    time: "7:00 PM",
    location: "Chennai, Tamil Nadu",
    price: 499,
    image: music1,
    description:
      "Experience an energetic evening featuring independent singers, bands and emerging musical talents from across Tamil Nadu.",
    organizer: "Rhythm Works",
    attendees: 180,
  },
  {
    id: 2,
    title: "Future Tech Developers Meetup",
    category: "Technology",
    date: "Oct 20, 2026",
    time: "10:00 AM",
    location: "Coimbatore, Tamil Nadu",
    price: 299,
    image: techeno,
    description:
      "Join developers and technology enthusiasts to discuss modern software development, cloud computing and emerging technologies.",
    organizer: "CodeCircle Tamil Nadu",
    attendees: 95,
  },
  {
    id: 3,
    title: "Tamil Nadu Street Food Carnival",
    category: "Food",
    date: "Oct 22, 2026",
    time: "5:00 PM",
    location: "Madurai, Tamil Nadu",
    price: 199,
    image: food1,
    description:
      "Discover popular street foods, traditional dishes and exciting new flavours prepared by talented local food vendors.",
    organizer: "Taste Trails",
    attendees: 320,
  },
  {
    id: 4,
    title: "Mastering Mobile Photography",
    category: "Workshop",
    date: "Oct 24, 2026",
    time: "9:00 AM",
    location: "Chennai, Tamil Nadu",
    price: 599,
    image: photo,
    description:
      "Learn practical photography techniques including framing, lighting, composition and mobile photo editing.",
    organizer: "LensCraft Academy",
    attendees: 55,
  },
  {
    id: 5,
    title: "Entrepreneurs Connect 2026",
    category: "Business",
    date: "Oct 26, 2026",
    time: "6:30 PM",
    location: "Bangalore, Karnataka",
    price: 399,
    image: Startup,
    description:
      "Meet startup founders, business professionals and aspiring entrepreneurs while building valuable professional connections.",
    organizer: "Founder Network India",
    attendees: 210,
  },
  {
    id: 6,
    title: "Contemporary Art Showcase",
    category: "Art",
    date: "Oct 28, 2026",
    time: "11:00 AM",
    location: "Chennai, Tamil Nadu",
    price: 150,
    image: temporaryart,
    description:
      "Explore paintings, illustrations and contemporary artwork created by talented emerging artists.",
    organizer: "Canvas Collective",
    attendees: 110,
  },
  {
    id: 7,
    title: "Carnatic Classical Evening",
    category: "Music",
    date: "Oct 30, 2026",
    time: "7:30 PM",
    location: "Coimbatore, Tamil Nadu",
    price: 999,
    image: music3,
    description:
      "Enjoy an enchanting evening of Carnatic music featuring traditional keerthanai and classical performances.",
    organizer: "Swaralaya Sabha",
    attendees: 140,
  },
  {
    id: 8,
    title: "Digital Illustration Gallery",
    category: "Art",
    date: "Nov 1, 2026",
    time: "10:30 AM",
    location: "Pondicherry, Tamil Nadu",
    price: 250,
    image: illusionart,
    description:
      "Discover imaginative digital illustrations and creative artwork from independent artists and designers.",
    organizer: "Pixel Art Society",
    attendees: 90,
  },
  {
    id: 9,
    title: "Acoustic Unplugged Night",
    category: "Music",
    date: "Nov 3, 2026",
    time: "6:45 PM",
    location: "Chennai, Tamil Nadu",
    price: 449,
    image: music4,
    description:
      "Relax with intimate acoustic performances featuring talented singers and musicians in a cozy atmosphere.",
    organizer: "Unplugged Chennai",
    attendees: 130,
  },
  {
    id: 10,
    title: "AI & Machine Learning Summit",
    category: "Technology",
    date: "Nov 5, 2026",
    time: "9:30 AM",
    location: "Chennai, Tamil Nadu",
    price: 799,
    image: tech3,
    description:
      "Explore artificial intelligence, machine learning applications and the latest innovations shaping the technology industry.",
    organizer: "AI Tamil Network",
    attendees: 275,
  },
  {
    id: 11,
    title: "Startup Growth Strategies",
    category: "Business",
    date: "Nov 7, 2026",
    time: "2:00 PM",
    location: "Bangalore, Karnataka",
    price: 649,
    image: startup2,
    description:
      "Learn practical strategies for customer acquisition, fundraising, team building and sustainable startup growth.",
    organizer: "ScaleUp Founders",
    attendees: 160,
  },
  {
    id: 12,
    title: "Product Launch Masterclass",
    category: "Workshop",
    date: "Nov 9, 2026",
    time: "10:00 AM",
    location: "Chennai, Tamil Nadu",
    price: 699,
    image: productlaunch,
    description:
      "Learn how to plan, position and successfully launch a digital or physical product in a competitive market.",
    organizer: "LaunchLab India",
    attendees: 70,
  },
  {
    id: 13,
    title: "Creative Writing Bootcamp",
    category: "Workshop",
    date: "Nov 11, 2026",
    time: "9:30 AM",
    location: "Madurai, Tamil Nadu",
    price: 499,
    image: writingcamp,
    description:
      "Develop storytelling skills, character building techniques and creative writing habits through practical exercises.",
    organizer: "WordCraft Studio",
    attendees: 48,
  },
  {
    id: 14,
    title: "Emerging Artists Biennale",
    category: "Art",
    date: "Nov 13, 2026",
    time: "4:00 PM",
    location: "Chennai, Tamil Nadu",
    price: 299,
    image: emergingart,
    description:
      "Visit a curated exhibition featuring experimental paintings, sculptures and mixed-media creations by new artists.",
    organizer: "ArtSpace Chennai",
    attendees: 185,
  },
  {
    id: 15,
    title: "Cloud Computing Conference",
    category: "Technology",
    date: "Nov 15, 2026",
    time: "9:00 AM",
    location: "Coimbatore, Tamil Nadu",
    price: 899,
    image: cloudcom,
    description:
      "Learn about cloud infrastructure, DevOps, scalable applications and modern cloud architecture from industry experts.",
    organizer: "CloudTech Community",
    attendees: 230,
  },
  {
    id: 16,
    title: "Web Development Bootcamp",
    category: "Technology",
    date: "Nov 17, 2026",
    time: "10:00 AM",
    location: "Trichy, Tamil Nadu",
    price: 749,
    image: webbootcamp,
    description:
      "Build modern web applications while learning frontend development, responsive design and practical development workflows.",
    organizer: "WebMakers Hub",
    attendees: 85,
  },
  {
    id: 17,
    title: "Business Leaders Roundtable",
    category: "Business",
    date: "Nov 19, 2026",
    time: "5:30 PM",
    location: "Salem, Tamil Nadu",
    price: 549,
    image: roundtable,
    description:
      "A focused networking session for business owners and professionals to exchange ideas and discuss industry challenges.",
    organizer: "Tamil Business Forum",
    attendees: 125,
  },
  {
    id: 18,
    title: "Modern Art Walk",
    category: "Art",
    date: "Nov 21, 2026",
    time: "3:00 PM",
    location: "Pondicherry, Tamil Nadu",
    price: 199,
    image: artwalk,
    description:
      "Take a guided journey through modern artworks while learning about creative techniques and artistic perspectives.",
    organizer: "ArtWalk Collective",
    attendees: 65,
  },
  {
    id: 19,
    title: "UI/UX Design Workshop",
    category: "Workshop",
    date: "Nov 23, 2026",
    time: "10:30 AM",
    location: "Chennai, Tamil Nadu",
    price: 599,
    image: uiuxcamp,
    description:
      "Learn user research, wireframing, prototyping and interface design through hands-on UI/UX activities.",
    organizer: "DesignCraft India",
    attendees: 72,
  },
  {
    id: 20,
    title: "Fusion Beats Live",
    category: "Music",
    date: "Nov 25, 2026",
    time: "7:00 PM",
    location: "Madurai, Tamil Nadu",
    price: 549,
    image: music5,
    description:
      "Enjoy a vibrant musical experience combining Indian classical sounds with contemporary fusion and modern beats.",
    organizer: "Fusion Stage",
    attendees: 205,
  },
  {
    id: 21,
    title: "Traditional Art & Heritage Fair",
    category: "Art",
    date: "Nov 27, 2026",
    time: "10:00 AM",
    location: "Thanjavur, Tamil Nadu",
    price: 175,
    image: traditionalart,
    description:
      "Explore traditional paintings, crafts and heritage-inspired artwork created by skilled regional artists.",
    organizer: "Heritage Arts Foundation",
    attendees: 145,
  },
  {
    id: 22,
    title: "Artificial Intelligence Expo",
    category: "Technology",
    date: "Nov 29, 2026",
    time: "11:00 AM",
    location: "Chennai, Tamil Nadu",
    price: 999,
    image: aiimage,
    description:
      "Explore practical AI applications, intelligent products and emerging technologies transforming businesses and industries.",
    organizer: "FutureAI Labs",
    attendees: 360,
  },
  {
    id: 23,
    title: "Public Speaking Masterclass",
    category: "Workshop",
    date: "Dec 1, 2026",
    time: "9:00 AM",
    location: "Coimbatore, Tamil Nadu",
    price: 449,
    image: publicspeaking,
    description:
      "Improve confidence, presentation skills, storytelling and professional communication through guided practice.",
    organizer: "SpeakSmart Academy",
    attendees: 60,
  },
  {
    id: 24,
    title: "South Indian Food Heritage Festival",
    category: "Food",
    date: "Dec 3, 2026",
    time: "12:00 PM",
    location: "Thanjavur, Tamil Nadu",
    price: 299,
    image: southindianexpo,
    description:
      "Celebrate the rich culinary traditions of South India with regional dishes, traditional recipes and local chefs.",
    organizer: "Heritage Food Club",
    attendees: 410,
  },
  {
    id: 25,
    title: "Dessert & Bakery Expo",
    category: "Food",
    date: "Dec 5, 2026",
    time: "4:30 PM",
    location: "Chennai, Tamil Nadu",
    price: 249,
    image: bakeryexpo,
    description:
      "Taste handcrafted desserts, pastries and creative bakery products while meeting talented pastry makers.",
    organizer: "SweetSpot Events",
    attendees: 275,
  },
  {
    id: 26,
    title: "Startup Pitch Night",
    category: "Business",
    date: "Dec 7, 2026",
    time: "6:00 PM",
    location: "Bangalore, Karnataka",
    price: 499,
    image: startuppitch,
    description:
      "Watch promising founders pitch their business ideas and connect with entrepreneurs, mentors and investors.",
    organizer: "Startup Arena",
    attendees: 240,
  },
  {
    id: 27,
    title: "Tamil Folk Music Festival",
    category: "Music",
    date: "Dec 9, 2026",
    time: "6:30 PM",
    location: "Salem, Tamil Nadu",
    price: 349,
    image: music7,
    description:
      "Experience traditional Tamil folk music and performances celebrating the cultural heritage of the region.",
    organizer: "Namma Isai Foundation",
    attendees: 290,
  },
  {
    id: 28,
    title: "Organic Food & Farmers Market",
    category: "Food",
    date: "Dec 11, 2026",
    time: "8:00 AM",
    location: "Coimbatore, Tamil Nadu",
    price: 99,
    image: organicexpo,
    description:
      "Meet local farmers and explore fresh organic produce, homemade products and healthy regional foods.",
    organizer: "Green Harvest Collective",
    attendees: 350,
  },
  {
    id: 29,
    title: "Coffee & Culinary Experience",
    category: "Food",
    date: "Dec 13, 2026",
    time: "10:00 AM",
    location: "Bangalore, Karnataka",
    price: 399,
    image: coffeeexpo,
    description:
      "Discover specialty coffee, artisanal snacks and unique culinary creations through tastings and demonstrations.",
    organizer: "Brew & Bite Society",
    attendees: 165,
  },
  {
    id: 30,
    title: "Live Jazz & Blues Evening",
    category: "Music",
    date: "Dec 15, 2026",
    time: "8:00 PM",
    location: "Chennai, Tamil Nadu",
    price: 699,
    image: music6,
    description:
      "Spend an unforgettable evening listening to live jazz and blues performances by talented contemporary musicians.",
    organizer: "BlueNote Chennai",
    attendees: 190,
  },
];

export default events;
