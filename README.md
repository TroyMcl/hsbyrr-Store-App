# Health Scents by RR Store

> Single Page Application Store That Could Be Added To An Existing Website

## Table of Contents

1. [Description](#description)
1. [Front-end Design](#front-end_design)
1. [Technologies](#technologies)
1. [Development](#development)
1. [Schema and API's](#schema_and_api's)

## Description

The goal of this app was to create a SPA store that persisted data and would feel like interacting with multiple pages. For this project I chose React Router to have unique URLs for different parts of the store and products. This required combining React Router URLs with server view routes, along with React components that find their single source of truth in the database instead of relying solely on state.  The end result is a store front that can be refreshed, URLs can be copy pasted, and bookmarked and will render your current page.

Front-end state is handled with React Hooks and Context. Most state is localized as components make API calls for their data on render to handle persistence. The only state value that really needed to be accessible throughout the app is the shopping cart, so I created a context for it to remove props drilling. The UI was built with Material-UI. I chose it for its built in responsiveness, and theming convenience.

The server is built with Node/Express and focused on keeping functionality separated and easy to read, maintain and add to later. I chose to use Mongo Atlas to host the database for 2 reasons. First, using Atlas provided a deployed database at a low cost. Second, Atlas encrypts the data, providing extra protection for user data.


### Front-end Design

> Overall layout of products available

![](./gifs/storeItems.gif)

> Item detail page with accordions for description and reviews

![](./gifs/ItemPage.gif)

> User cart and checkout flow

![](./gifs/AddCart.gif)

![](./gifs/checkout.gif)

### Currently working on:

Authentication
* Build Authentication middleware for Order routes, User routes and specific Product routes
* Add JWT, and bcrypt. Hash user passwords to save in database
* Set up functionality to do password resets for locked out users
* Build login and out pages for front end
* Build admin page to make changes to products and orders


## Technologies
* Javascript
* Nodejs
* Express
* Mongoose
* Mongo Atlas
* React
* React Router
* Material-UI
* Webpack

## Schema and API's

![Models](./images/hsrrmodels.jpeg)

### API Table

![API's](./images/hsrrapi.jpeg)
