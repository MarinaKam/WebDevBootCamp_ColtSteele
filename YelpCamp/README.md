# YelpCamp

## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

#### Each Campgrounds has: 
* Name
* Image


## Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show rout/template

````
RESTFUL ROUTES:
name       url      verb       desc.
========================================================
INDEX    /dogs      GET        Display a list of all dog
NEW      /dogs/new  GET        Display form to make a new dog
CREATE   /dogs      POST       Add new dog to DB
SHOW     /dogs/:id  GET        Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments      POST

````

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

## Add seeds file
* Add a seeds.js file
* Run the seeds.js file every time the server starts

## Add the Comment model
* Make our errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routs
* Add the new comment form

## Auth pt.-1 Add User models
* Install all packages needed for auth
* Define User model

## Auth pt.-2 Register
* Configure Passport
* Add register form
* Add register template

## Auth pt.-3 LogIn
* Add LogIn form
* Add LogIn template

## Auth pt.-4 LogOut/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Refactor The Routes
* Use Express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

## Editing Campgrounds
* Add Method-Override
* Add Edit route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

## Deleting Campground
* Add Destroy Route
* Add Delete Button

## Authorization Pt.-1
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/show edit and delete buttons

## Editing Comments
* Add Edit route for Comments
* Add Edit Button
* Add Update Route

Campground edit route /campgrounds/:id/edit
Comment edit route /campgrounds/:id/comments/:comment_id/edit

## Deleting Comments -v10
* Add Destroy Route
* Add Delete Button

## Authorization Pt.-2: Comments -v10
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/show edit and delete buttons
* Refactor Middleware

## Adding in Flash -v11
* Demo working version
* Install and configure connect-flash
* Add alerts to header

## Adding a location feature to our application, using the Google Maps API -v11
slides.com - [http://slides.com/nax3t/yelpcamp-refactor-google-maps#/19]
* Sign up for a google developer account
* Get Google Maps API Key
* Add key to application as ENV variable
* Add Google Maps scripts to your application
* Display the campground location in show.ejs
* Update Campground Model
* Update campground routes with node-geocode

## Adding a "time since.." feature to our application, using Moment JS -v11Final
* Install moment js
* Require moment and add it to app.locals
* Update campground and comment models
* Use moment in your show.ejs file
