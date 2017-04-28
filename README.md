# FCC League-For-Good

This is a free, open-source web application designed to help sports leagues track their player and team stats, and simplify the other day-to-day tasks involved with team management. It was designed to accommodate many popular sports.

In order for the authorization component of this app to work, it needs to be registered with Google. Here is a helpful walkthrough of that process: (https://developers.google.com/identity/sign-in/web/devconsole-project)

In the root directory, create a .env file and place the following: 
- MONGO_URI = *Your database uri* 
- GOOGLE_CLIENT_ID = *Client id assigned by Google* 
- GOOGLE_CLIENT_SECRET = *Client secret assigned by Google*
- SESSION_SECRET = *Any random string of characters*
- GOOGLE_CALLBACK_URL = *The callback url you assigned to your app in the Google api console.*

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Builds the app for development. It is watched by webpack for any changes in the front end.