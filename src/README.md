## TL;DR

Hi everyone!

This README.md file is to describe the different folders within src, the purpose of each file, and all the different components. 

## Files in Src folder

- App.js: This file serves as the main entry point for the portfolio, handling the routing between different pages such as Home, About, Projects, and Resume. This also includes the global styles to structure the app layout and the behavior.

- App.test.js: This file is a test script using the React Testing Library to ensure the app renders correctly. 

- index.css: This file sets the global font style for the website, specifically using the "Raleway" font from Google Fonts. 

- index.js: This file renders the React application by importing the App component, global CSS styles, and a performance reporting function. It uses the ReactDOM.render function to mount the App components into the HTML element with the ID of "root". 

- reportWebVitals.js: This file defines the performance reporting function "reportWebVitals", which helps measure and log key web performance metrics. 

- style.css: This file defines the numerous styling classes used throughout each component of the website. Here, you can change and customize the styling of each component to your liking!

## Components Folder

### About

- About.js: This file organizes all the smaller sections of the about page of the website. It uses other "about" components like the AboutCard, TechStack, Toolstack, and Github.

![aboutpage](/src/ReadMeImages/AboutPage.PNG)

- AboutCard.js: This file is the main text of this mage, summarizing the person in a few short sentences. (shown in the image above)

- Github.js: This file imports the github calander straight from your github profile.

![github](/src/ReadMeImages/Github.PNG)

- Techstack.js: This file imports and displays all the icons of technologies you've worked with. This mainly includes languages and frameworks used.

![techstack](/src/ReadMeImages/Techstack.PNG)

- Toolstack.js: Similarly to Techstack.js, this file imports and displays all the icons of tools you've worked with. This includes compilers, operating systems, etc.

![toolstack](/src/ReadMeImages/Toolstack.PNG)

### Home

- Home.js: This file displays the welcome message and image in the home page. Additionally, it calls the Home2 component and Type component. 

![home](/src/ReadMeImages/Home.PNG)

- Home2.js: This file displays the introduction section of the home page. This is where you can write a few short sentences about yourself and include an image. This is also where you can include your socials. 

![home2](/src/ReadMeImages/Home2.PNG)

- Type.js: This file is where the text animation shown within the welcome message is defined. You can change the strings to your own titles. 

![type](/src/ReadMeImages/Type.PNG)

### Projects

![projects](/src/ReadMeImages/Projects.PNG)

- ProjectCards.js: This file creates Bootstrap cards for each project, containing info like an image, description, github link, and demo link. Additionally, if it's a blog it will render the card differently.

- Projects.js: This file defines the information of each project card. This is where you can identify the image path, title, description, github link, and demo link. 

### Resume

- ResumeNew.js: This file creates the resume page, where users can download and see the resume. 

### Other Components Files

- Footer.js: This file creates the footer that is displayed on the bottom of each page. It contains information about the original creator, the copyright tag, and socials. 

![footer](/src/ReadMeImages/Footer.PNG)

- Navbar.js: This file creates the navigation bar seen on the top of each page. This contains links to each different page, including about, home, projects, and resume. It additionally adds a link to the original repository of the portfolio. 

![navbar](/src/ReadMeImages/Navbar.PNG)

- Particle.js: This file defines the react particles shown on every page. It uses the react-tsparticles library to import the particles. Here you can customize the particles shown in the background. 

- Pre.js: This file defines how the page loads each component upon first opening the page. 

- ScrollToTop.js: This file defines the animation of scrolling to the top of the page every time a user changes tabs. 