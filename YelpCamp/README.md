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

## Users + Canmpgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

