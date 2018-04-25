# FCC League-For-Good

This is a free, open-source web application designed to help sports leagues track their player and team stats, and simplify the other day-to-day tasks involved with team management. It was designed to accommodate many popular sports.

## Join Us On Slack!

You can now join us on slack. [Get Invite Here](https://fcc-slack-invite.herokuapp.com/)

## Getting Started

### Prerequisites

- [NodeJS](https://nodejs.org)
- [MongoDB](https://www.mongodb.org)

In order for the authorization component of this app to work, it needs to be registered with Google. Here is a helpful walkthrough of that process: (https://developers.google.com/identity/sign-in/web/devconsole-project)

This includes enabling the "Google+ API" on the Google API Console Dashboard.

### Steps

- Fork and clone the repo
- Run `npm install`
- In the root directory, create a .env file and place the following: 
  - MONGO_URI = *Your database uri* 
  - GOOGLE_CLIENT_ID = *Client id assigned by Google* 
  - GOOGLE_CLIENT_SECRET = *Client secret assigned by Google*
  - SESSION_SECRET = *Any random string of characters*
  - GOOGLE_CALLBACK_URL = http://localhost:4000/auth/google/callback (*Use for the callback url in the Google API console*)
- Open a new terminal session and run `mongod` if mongodb is on the local machine
- Run `npm run dev`
- Navigate to `localhost:4000` in your browser

## Available Scripts

In the project directory, the following commands are available:

### `npm install`

Installs all the dependencies

### `npm run dev`

Builds the app for development. It is watched by webpack for any changes in the front end.

## How to Contribute
We warmly welcome contributions from anyone. Check out our [how to contribute](https://github.com/freeCodeCamp/league-for-good/blob/master/CONTRIBUTING.md) section to find out how you can do so.
