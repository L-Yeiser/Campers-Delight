# Campers-Delight

A simple app to list and create campgrounds. The app includes a simple Node server, an Ember based web component, and React-Native mobile component.

# Campers-Delight
1. Clone Repository

To Start the Server:
1. `cd api`
2. `yarn yarn start`
3. The server should run on port `3000`. If it is not please momentarily update `process.env.PORT` to `3000`.

To Start the Ember Application:
1. `cd desktop`
2. `yarn`
3. `ember server`
4. `visit http://localhost:4200/`

To Start the Mobile Application:
1. `cd mobile_campground`
2. `yarn yarn start`
3. Open the application in a simultor with access to localhost. I used expo XDE. Make sure you are pointed at localhost. There is a catch to load hardcoaded data if the local connection fails but the application will error when a new campground is added.
