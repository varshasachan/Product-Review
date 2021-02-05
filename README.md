# ProdList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

# How to Run Project:-
1). Git clone from Given Repo.
2). Do npm install.
3). Since It was givig CORS error so used CORS unblock plugin for Chrome Browser.
5). Download Jquery-3.5.1 and copy it to node_modules/bootstrap/dist/js.
6). Do ng serve

# Functionalities Cover in the Project:- 

1).It is an Angular Applicaion which shows review of Particular Product as per the product_id and Viewer_id option selected by user.
2).It Provides list of Reviews as per the product_id and viewer_id.
3).It provides pagination functionality (Maximum 3 reviews in one page).
4).By Default only overall rating,title, comment, usefulness, reviewer name (only if friend = true)should be displayed in review details but there is one button of Show all details which displays all the ratings
5).Ratings are diplayed in star format.
6).Loader is present which is displayed everytime when user fetches records as per product_id and viewer_id
7).Sort By functinality is present. We can sort the reviews on the basis of Ratings, Usefulness & Connection_level (didn't used any plugin)




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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
