# Capacitor plugin demo
Demo Capacitor app with an Android and a iOS demo plugin.

Folder structure:
- `src` contains the webapp consisting of a single page (*Home.tsx*).
- `android` contains the Android project and the native Capacitor plugin *OneTrustPlugin.java*.
- `ios` contains the iOS project and the native Capacitor plugin *OneTrustPlugin.swift*.

## Commands

### Install Node.js
Install Node.js v12 (or v14) from https://nodejs.org/en/download/

### Install dependencies
`npm install`

### Run web app
`npm start`

### Build web app
`npm run build`

### Copy web app files to native projects
This needs to be done every time after building the web app.

`npx cap sync`

### Open Android project in Android Studio
`npx cap open android`

### Open iOS project in XCode
`npx cap open ios`

