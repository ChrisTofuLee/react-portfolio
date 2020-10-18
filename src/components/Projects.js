import lyricPicture from "../assets/lyric.png";
import aniTrackerPicture from "../assets/aniTracker.png";
import notePicture from "../assets/Notes.png";
import EmployeePicture from "../assets/employee.png";
import CLIPicture from "../assets/cli.png";
import quizPicture from "../assets/quiz.png";
import holidayPlanner from "../assets/holidayPlanner.png";
const Projects = [
  {
    title: "Holiday Planner",
    description:
      "The Holiday Planner app is a MERN full stack application that allows the user to search cities they're planning to visit to populate what there is to do there split out by activites, nightlife and food (which is populated through the Google Places API). The user will also be able to see more information about the places they find such as reviews, opening times, and direct to their current website, they can then add selected places to a plan they've created. The server side was deployed through Heroku which allows the user to perform CRUD operations on their plans, this was also where the calls to the GooglePlaces API were made and sorted to help reduce the loading within front end",
    tech: [
      { techName: "HTML", colour: "orange" },
      { techName: "MongoDB", colour: "volcano" },
      { techName: "JS", colour: "gold" },
      { techName: "Axios", colour: "green" },
      { techName: "Tailwind CSS", colour: "cyan" },
      { techName: "React", colour: "geekblue" },
      { techName: "React Springs", colour: "blue" },
      { techName: "NodeJS", colour: "purple" },
      { techName: "Express", colour: "grey" },
    ],
    link: "https://christofulee.github.io/holiday-planner-client/",
    image: holidayPlanner,
    repo: "https://github.com/ChrisTofuLee/holiday-planner-client",
  },
  {
    title: "LyricWorks",
    description:
      "The Lyricube app allows the user to search part of the lyrics that they remember to populate the most popular songs with the lyrics entered with a YouTube video for ease of use. The App uses the Genius API for the lyrics search functionality which then proceeds to call on the YouTube API for the relevant video to be attached alongside each search result.",
    tech: [
      { techName: "HTML", colour: "orange" },
      { techName: "Semantic-UI", colour: "volcano" },
      { techName: "JS", colour: "gold" },
      { techName: "Ajax", colour: "geekblue" },
    ],
    link: "https://christofulee.github.io/lyricworks/",
    image: lyricPicture,
    repo: "https://github.com/ChrisTofuLee/lyricworks",
  },
  {
    title: "Anime Tracker",
    description:
      "The Anime Tracker app allows the user to search for anime titles they wish to review/ add a watch list. Storing user entries using MySQL database, to track the titles that they have reviewed. The app routes to endpoints managed by handlebars using the Sequelize process. It uses the Kitsu API as an initial database for anime titles searched, and for the log in/sign up the Passport module to generate unique user profiles for each individual user.",
    tech: [
      { techName: "MySQL", colour: "magenta" },
      { techName: "Handlebars", colour: "red" },
      { techName: "HTML", colour: "orange" },
      { techName: "JS", colour: "gold" },
      { techName: "Axios", colour: "green" },
      { techName: "Tailwind CSS", colour: "geekblue" },
      { techName: "Sequelize", colour: "blue" },
      { techName: "NodeJS", colour: "purple" },
    ],
    link: "https://gentle-brook-74252.herokuapp.com/",
    image: aniTrackerPicture,
    repo: "https://github.com/ChrisTofuLee/Express-Anime-Tracker",
  },
  {
    title: "Express Note Taker",
    description: "A note taker web application using Express to set up a server hosted on Heroku. The application allows the user to type up notes with a title and contents as well as being able to delete individual notes selected. It makes use of GET, POST, and DELETE to allow the server script file to communicate between the front end note page with the database set up.",
    tech: [
      { techName: "HTML", colour: "orange" },
      { techName: "JS", colour: "gold" },
      { techName: "Ajax", colour: "geekblue" },
      { techName: "NodeJS", colour: "purple" },
      { techName: "Express", colour: "grey" },
    ],
    link: "https://stark-basin-90150.herokuapp.com/",
    image: notePicture,
    repo: "https://github.com/ChrisTofuLee/express-note-app",
  },
  {
    title: "Employee Directory",
    description:
      "The employee directory allows users to look up the list of employees and their contact information deployed through React using class components and axios to pull the employee list from an api. The directory allows the user to also filter out employee names an sort the table by name or email.",
    tech: [
      { techName: "HTML", colour: "orange" },
      { techName: "JS", colour: "gold" },
      { techName: "Bootstrap", colour: "purple" },
      { techName: "Axios", colour: "green" },
      { techName: "React", colour: "geekblue" },
      { techName: "NodeJS", colour: "purple" },
    ],
    link: "https://christofulee.github.io/react-employee-directory/",
    image: EmployeePicture,
    repo: "https://github.com/ChrisTofuLee/react-employee-directory",
  },
  {
    title: "CLI employee tracker",
    description:
      "This node command line interface (CLI) allows users to access a sql database to edit and bring up lists of employee and their information based on selected criteria, similar to a content management system (CMS). This is done through inquirer for the CMS interface with a connection through MySQL to perform CRUD functionalities (create, read, update, and delete)",
    tech: [
      { techName: "MySQL", colour: "magenta" },
      { techName: "JS", colour: "gold" },
      { techName: "Inquirer", colour: "geekblue" },
      { techName: "NodeJS", colour: "purple" },
    ],
    link: "",
    image: CLIPicture,
    repo: "https://github.com/ChrisTofuLee/cli-mysql-employee-tracker",
  },
  {
    title: "The Coding Quiz",
    description:
      "A timed quiz that the user can test themselves along with peers and compare their scores. Once the user starts the quiz, a countdown timer will start, when the user gets the answer right they will score points, when it's wrong there will be a time penalty. Once the quiz is finished or the time is up, the user will enter the final scores page where they can submit their name to enter the scoreboard.",
    tech: [
        { techName: "HTML", colour: "orange" },
        { techName: "JS", colour: "gold" },
        { techName: "Bootstrap", colour: "purple" },
    ],
    link: "https://christofulee.github.io/chris-homework-W4/",
    image: quizPicture,
    repo: "https://github.com/ChrisTofuLee/chris-homework-W4",
  }
];
export default Projects;
