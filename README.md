# FernandaOchoaFineArt - Server side

This project serve to the frontend the images URI, title and other properties.

It uses Express in order to define a REST API where the client just need to do a GET request to /api/draws URI.

# Deploy server

In order to run the server in a production environment just execute `npm start`. Internally will execute the code inside `index.js`. The server will be deployed on `http://localhost:3000/` who use by default port 3000 or the `process.env.PORT` property if was previously setted.