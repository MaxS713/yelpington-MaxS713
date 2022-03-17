# PROJECT: Yelpington

In this project, you will create an online directory of restaraunts in the city that you live.

# Technologies

* React
* Node with Express
* Leaflet

# Stories

## Create your API data

**Given** You are in the top level of your project

**Then** You have a `api` folder that contains JSON data. This data can take whatever shape you desire, but it needs to contain the following key-value pairs:

* ID
* Name
* Cuisine
* Address
* Latitude and longitude
* Phone number
* Hours
* About

## Create your API routes

**Given** the server is running

**When** the user visits your API routes (e.g. `http://localhost:5000`)

**Then** they see your JSON data display.

## Home Page

**Given** the server is running

**When** the user visits the home page (e.g. `http://localhost:3000`)

**Then** a Leaflet map should be displayed, centered on your city.

**And** there should be pins for each restaurant in the database

**And** A list of all restaurants in a nav bar

**And** this page should be styled.

## Visit A Restaurant Page

**Given** the user is on the homepage.

**When** they click on a pin *or* the restaurant's name in the nav bar.

**Then** the user should be redirected to a dedicated restaurant page.

## Show Restaurant

**Given** a single restaurant (e.g. `joes-diner`)

**When** the user visits `http://localhost:3000/restaurant/joes-diner`

**Then** they should see all of the information about that restaraunt on the page

**Then** the information is styled in a layout.


## Show Restaurant Map

**Given** the id of a restaurant (e.g. `joes-diner`)

**When** the user sees the restaurant's page (e.g. `/restaurant/joes-diner`)

**Then** they see a Leaftlet map centered at that restaurant's location utilizing latitude and longitude.

## IceBox

* Use React Router to dynamically rerender your application.

* Enable a search feature so users can find restaraunts by different properties.

* Create a contact form to submit user comments to the restaurant page which will then be displayed on that page.

* Use a database or local storage to get the comments to persist across sessions.
