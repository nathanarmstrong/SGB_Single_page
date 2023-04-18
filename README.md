# Silver Gold Bull Single Page Test

## Description of Deliverables

TODO:
• Single Page with React Calendly Control
• List of Test Cases that you did to test the page?
• List of possible things we can do to improve the page (if any?)

Description:
We have been asked by marketing to convert a landing page from instapage to be integrated into our application and allow clients to book a time to meet with us. Below you will find a screen capture of the page and I have attached a zip file containing the images and the font is Poppins https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2Citalic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&subset=latin%2Clatin-ext&display=swap,

Create the page and add a react based calendly calendar booking where the signup form is now. Do not reproduce the sub pages such as Registered Savings FAQ, privacy policy, terms & Conditions etc.

## Run Locally

### `npm install`

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## TEST CASES

Entered first name last name and email (fake email), selected the first possible date and time (today, but 5 hours a head of current time) - got message saying message wasn’t delivered because address cant be found. time was still booked, looks like you need to manually cancel those appointments, needs more research.

Remove name and emails just before booking. throws error saying those field are needed.

Using the email I used for calendly. books but only I am in the meeting.

## IMPROVEMENTS

Add Google Captcha to restrict bots from abusing the no valid email issues.

## Other Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
