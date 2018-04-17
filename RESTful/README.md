# RESTful Routing

## Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

## Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

## Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

## Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

## SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

## Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

## DESTROYYYYYY
* Add Destroy Route
* Add Edit and Destroy Links

## Final Updates
* Sanitize blog body
* Style Index
* Update REST Table

````
Name   	 Path	      HTTP Verb	    Purpose	                                        Mongoose Method
===========================================================================================================
INDEX	 /dogs	         GET	 List all dogs	                                    Dog.find()
NEW	     /dogs/new	     GET	 Show new dog form	                                N/A
CREATE	 /dogs	         POST	 Create a new dog, then redirect somewhere	        Dog.create()
SHOW	 /dogs/:id	     GET	 Show info about one specific dog	                Dog.findById()
EDIT	 /dogs/:id/edit	 GET	 Show edit form for one dog	                        Dog.findById()
UPDATE	 /dogs/:id	     PUT	 Update particular dog, then redirect somewhere	    Dog.findByIdAndUpdate()
DESTROY	 /dogs/:id	     DELETE	 Delete a particular dog, then redirect somewhere   Dog.findByIdAndRemove()
````