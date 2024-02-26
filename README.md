# Lecture # 6 - PATCH & DELETE
## SWBAT
- [ ] Send a PATCH & DELETE request
- [ ] Review changing parent state

## Setup
Please make sure that you are inside the folder for this repository which contains the `package.json` file before following these instructions for setup:

1. Run `npm install` in your terminal to install the dependencies from the `package.json` file.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Deliverables

We've been asked to build a website for a new pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center.

Today we will make a PATCH request in our React app to update our pet data in the JSON Server database and make a DELETE request to delete pets from the JSON Server database, so that we can persist updates and deletions in our React app / website.

1. In the `Pet` component in `Pet.js`, create a state that includes a stateful variable named `displayForm` and a setter function called `setDisplayForm`. The initial value for the state should be `false`. Conditionally render either the "button-div" `<div>` element if `displayForm` is `false` or the "edit-pet" `<form>` element is `displayForm` is `true`.
2. Click on the `Update Pet` `<button>` in the `Pet` component and see the "edit-pet" `<form>` element in place of the "button-div" `<div>` element. If I `submit` the `<form>` by clicking on the `Save Changes` `<button>` inside of the "edit-pet" `<form>`, the "edit-pet" `<form>` element should be replaced with the "button-div" `<div>` element.