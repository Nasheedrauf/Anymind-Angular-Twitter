# Anymindtest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0-next.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#Goals

Show an example of a sprawling & simple Angular application, consist of just two screens but,design in a way to handle complexity, size with scale (horizontly & vertically).
Initially use Angular CLI
Later, Bazel. (todo)

#Contents so far
two screens absorbing two different API's through observables & different search criteria for filtering but using same pipe & sharing same component to enhance reuseability


#Technologies used
Angular 8
Angular CLI
RxJS
REST

The example application reuse blocks of functionality, so they show the value of this multi-package approach.


#How it works

We're currently working on some docs for the codebase (explaining where functionality is located, how it works, etc) but the codebase should be straightforward to follow as is. We will also released a step-by-step tutorial w/ screencasts that teaches you how to recreate the codebase from scratch.

#Making requests to the backend API

For convenience, we - use a live API server https://am-twitter-scrape.herokuapp.com/ for API end-points (it runs on Heroku as free dyno so it may not be accessible sometime). for the application to make requests against. You can view the API spec here (https://github.com/artenepo/twitter_scrape) which contains all routes & responses for the server.The source code for the backend server is also available on given specs 



#Getting started
Make sure you have the Angular CLI installed globally. We use npm  to manage the dependencies, so we strongly recommend you to use it. you can install it from Here, then run npm install to resolve all dependencies (might take a minute).

Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

#Building the project
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.


#General functionality:


GET and display paginated lists of tweets
Search by hashtag
Search by Users
#The general page breakdown looks like this:

Home page (URL: /#/ )
List of Tweets
List of Tweets pulled from either by user or by Tag
Pagination for list of tweets

#Running
In one window:

npm i
ng build 
ng build --prod  //for production
ng serve --o //Browser will open automatically on  `http://localhost:4200/`



##Please use this Chrome add-ons to

allow CORS while testing with the API. https://waa.ai/aCw4

#Sample Json

Sample json response file is also include on the path '/assets/sample.json'


#"Get tweets by a hashtag" API usage
curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET

https://am-twitter-scrape.herokuapp.com/hashtags/Python?pages_limit=3&wait=0

#“Search tweet by User” API usage

curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET

http://am-twitter-scrape.herokuapp.com/users/Twitter?pages_limit=3&wait=0




 