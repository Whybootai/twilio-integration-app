
# Twilio Integration App

This app demonstrates how to integrate Twilio's messaging and voice services with a simple front-end interface. The application allows users to send SMS messages, make voice calls, and initiate video calls using Twilio's APIs. It is designed to be easy to set up and deploy, with clear steps and essential features for both front-end and back-end functionality.

## Features

- **Send SMS**: Allows users to send SMS messages to any phone number.
- **Make Voice Call**: Allows users to initiate a voice call using Twilio's API.
- **Video Call**: Allows users to start a video conversation.
- **TwiML Integration**: Uses Twilio's TwiML for responding to incoming calls.

## Prerequisites

- A [Twilio account](https://www.twilio.com/try-twilio) with the following details:
  - Account SID
  - Auth Token
  - Twilio phone number
- Node.js and npm installed on your system.
- A text editor like VSCode or Sublime Text to modify the files.

## Installation

1. Clone the repository or download the zip file.
2. Extract the files and navigate to the `server` directory.
3. Install the required dependencies using the following command:

```bash
npm install
```

4. Set up your Twilio credentials by editing the `.env` file.
5. Run the application:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## File Structure

```
/twilio-integration-app
│
├── /client                 # Frontend files
│   ├── /css                # Stylesheets
│   ├── /js                 # JavaScript files
│   └── index.html          # Main HTML file for the frontend
│
├── /server                 # Backend files
│   ├── server.js           # Main server file to handle API routes
│   ├── /controllers        # API controllers for different services
│   └── .env                # Environment variables for Twilio credentials
│
└── .gitignore              # Files to exclude from version control
```

## Usage

- To send an SMS, input the recipient's phone number and the message you want to send.
- To make a voice call, input the phone number to dial.
- To start a video call, click the "Start Video Call" button.

## License

MIT License. See `LICENSE` file for more details.

