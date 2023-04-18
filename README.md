<!DOCTYPE html>
<html>
<body>
<h1>Full Stack MEAN Project by slate2b</h1>
<h3>
  PROJECT OVERVIEW
</h3>
<p>
This project is still a work in progress.
</p>
<p>
This MEAN full stack application started as a project for one of my classes at SNHU with a static HTML website made with Node.js and Express based off a free static website template from http://www.freewebsitetemplates.com. Then I moved toward an MVC architecture Handlebars (hbs) views, created data models with Mongoose and created a MongoDB database, and created a RESTful API.  Then I built an Angular Single Page Application (SPA) on top of Node.js / Express MongoDB backend, using the RESTful API, and built authenticated and authorization into the backend and the frontend using express-jwt.  
</p>
<h3>Angular SPA - Home Page</h3>
<img src=https://user-images.githubusercontent.com/88697660/232636711-42fc0f4b-28b3-4fa4-9909-0d922377cc2a.png>
<p>
The site is made for a fictional client called Bhaccasyoniztas Travel which offers travel packages.  The SPA allows users to view available trips without an authenticated login.  Authenticated users, however, have full CRUD functionality to view, add, edit, and delete trip packages directly through the SPA.  All changes made through the SPA are persisted in MongoDB.  Authentication is driven by express-jwt, and Authorization is handled on the front-end through Angular conditionals and handled on the backend through the API controllers.  
</p>
<h3>Angular SPA - Trips Page - Authenticated User</h3>
<img src=https://user-images.githubusercontent.com/88697660/232621091-0b48fbac-e47b-444e-9f82-24d9f8b7a5a1.png>
<p>
This Full Stack MEAN application utilizes the following tools, libraries, modules, etc:
  <ul>
    <li>MongoDB</li>							
    <li>Express</li>
    <li>Angular</li>
    <li>Node.js</li>	
    <li>Handlebars (HBS)</li>
    <li>Mongoose</li>
    <li>Seedgoose</li>
    <li>Express-JWT</li>
  </ul>
</p>  
<h3>
PROJECT BRANCH 1 - static_html
</h3>
<p>
The first branch of this project started with static HTML pages, basic CSS, and images from <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and then encorporated them into a basic website using Node.js and Express.
</p>
<h3>
PROJECT BRANCH 2 - rough_mvc
</h3>
<p>
Laid the groundwork for an MVC framework and then integrated Handlebars (hbs) partials for the headers and footers which were used for every page.
</p>
<h3>
PROJECT BRANCH 3 - json_mvc
</h3>
<p>
Added some additional templating with Handlebars (HBS) as well as working with routes and views to transition from static HTML to dynamic JSON data.
</p>
<h3>Travel Page on the Express Site:</h3>
<img src=https://user-images.githubusercontent.com/88697660/230689936-429f6088-1727-493e-8196-8f62d32f59a1.png>
<h3>
PROJECT BRANCH 4 - mongodb_rough_schema
</h3>
<p>
Worked in MongoDB and Mongoose to create a database in MongoDB and schema for the travel, meals, and rooms pages.  I used Seedgoose to populate collections for each of those pages with sample data.
</p>
<h3>
PROJECT BRANCH 5 - rest_api
</h3>
<p>
Created a Node.js MongoDB RESTful API with routes and endpoints to access the data in the trips collection in MongoDB. Tested API endpoints using Postman.
</p>
<h3>Testing API Endpoints through Postman:</h3>
<img src=https://user-images.githubusercontent.com/88697660/232626473-d1d64376-a171-4391-b910-1365e1244c63.png>
<h3>
PROJECT BRANCH 6 - angular_spa
</h3>
<p>
Created an Angular SPA for admin activities, including adding a new trip and editing existing trips.  The admin SPA is tied to the same MongoDB DB as the customer-facing site through the RESTful API.  
</p>
<h3>
PROJECT BRANCH 7 - delete_component
</h3>
<p>
Added delete functionality to the Angular SPA for administrators.  
</p>
<h3>
PROJECT BRANCH 8 - backend_authentication
</h3>
<p>
Added authentication to the express backend.  Added api endpoints for registering a new user and logging in, implemented authentication with express-jwt, and then wrapped the addTrip, updateTrip, and deleteTrip API endpoints with the jwt auth.  
</p>
<h3>
PROJECT BRANCH 9 - frontend_authentication
</h3>
<p>
Added authentication to the angular frontend.  Created login, home, and navbar components. Created authresponse and user classes as well as an authentication service. Set up the routes and compoments so that add-trip, edit-trip, and delete-trip components are only available to authenticated users.  Created alerts for invalid data or blank fields in the add-trip and edit-trip components.  Created alerts for successful adds, edits, and deletes as well.  Also worked on CSS styles and HTML structure for multiple components of the SPA. Tested several adds, edits, and deletes through the SPA with various input values.
</p>
<h3>Angular SPA - Add Trip</h3>
<img src=https://user-images.githubusercontent.com/88697660/232628406-39af58c9-2f1e-4f42-8b82-a611600a6985.png>
<h3>Angular SPA - Trip Added through the SPA</h3>
<img src=https://user-images.githubusercontent.com/88697660/232628454-bdc1c0a5-fec4-417a-bc9b-c7cfcabab1af.png>
</body>
