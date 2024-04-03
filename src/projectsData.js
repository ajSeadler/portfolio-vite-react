import { FaReact, FaPython, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiHtml5, SiPostgresql } from "react-icons/si";

const iconStyle = {
  fontSize: "32px",
  marginRight: "15px",
};

if (window.innerWidth <= 768) {
  iconStyle.fontSize = "20px";
  iconStyle.marginRight = "3px";
}

const projectsData = [
  {
    id: 1,
    name: ["Fork It: ", { icon: FaJsSquare, color: "#F7DF1E" },
      { icon: SiPostgresql, color: "#336791" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" }],
    image: "/fork-it.png",
    description:
      "Fork It is a reviews web app where users can create an account to leave a review for a certain restaurant. Users can rate restaurants, review restaurants, and comment on other users reviews. The app also includes admin user roles, where an admin is able to create, edit, or delete any information in the database. Fork It is a collaborative project between myself and a few others. As a full stack developer, my role consisted of building database tables, building API routes, and building React components. Built with Postgres, Express.js, React.js, and Node.js",
    githubLink: "https://github.com/ajSeadler/Fork-it",
    videoDemoLink: "https://youtu.be/qOcs1PvMBGo",
  },
  {
    id: 2,
    name: ["Weather or Not: ", { icon: FaPython, color: "#3776AB" },
      { icon: SiHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" }],
    image: "/weather_app.png",
    description:
      "Weather or Not is a live weather forecasting app built with Python and Flask. The app features a current forecast, followed by a 5 day forecast - obtained from the Open Weather Map API. The users current location's forecast will display on the home page.",
    githubLink: "https://github.com/ajSeadler/Weather-or-Not",
    videoDemoLink: "https://youtu.be/T7IlewTZkws",
  },
  {
    id: 3,
    name: ["Disco Stranger: ", { icon: FaJsSquare, color: "#F7DF1E" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" }],
    image: "/bandsitenew.png",
    description:
      "Created a website for the rock band 'Disco Stranger' to enhance their online presence and engage with their audience. Built with React.js and Node.js. This was my first real website! It is a mobile responsive website that showcases the band's music, videos, and upcoming events.",
    githubLink: "https://github.com/ajSeadler/discoband",
    websiteLink: "https://discostrangermusic.com",
  },
  {
    id: 4,
    name: ["Solar Project:  ", { icon: FaJsSquare, color: "#F7DF1E" },
      { icon: SiHtml5, color: "#E34F26" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaCss3Alt, color: "#1572B6" }],
    image: "/solar.png",
    description:
      "Designed and developed a 3D planet viewing website. Users can view 3D models of planets in our solar system and explore their details. The project utilizes Three.js for 3D rendering, React.js, Node.js, Vite, and Material UI.",
    githubLink: "https://github.com/ajSeadler/SolarSystem",
    liveDemoLink: "https://solarsys1.netlify.app",
  },
  {
    id: 5,
    name: ["Stunning Realty: ", { icon: FaJsSquare, color: "#F7DF1E" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: SiPostgresql, color: "#336791" },
      { icon: SiHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" }],
    image: "/realty-min.png",
    description:
      "Stunning Realty is a demo project I created to enhance my PostgreSQL skills. The app features homes for sale or rent, each with a personal real estate agent. Users can favorite homes, view agent info, and even list their own property. Fake data is implemented with Faker.js to give a more realistic demo. Built with Postgres, Express.js, React.js, and Node.js",
    githubLink: "https://github.com/ajSeadler/realty",
  },
];

export default projectsData;
