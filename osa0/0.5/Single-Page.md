sequenceDiagram
    participant Browser
    participant Server

    Browser ->> Server: GET /exampleapp/spa
    activate Server
    Server -->> Browser: HTML document (initial SPA page)
    deactivate Server

    Browser ->> Server: GET /exampleapp/spa.js
    activate Server
    Server -->> Browser: JavaScript file (spa.js)
    deactivate Server

    Browser ->> Server: GET /exampleapp/data.json
    activate Server
    Server -->> Browser: JSON file (existing notes)
    deactivate Server

    Browser ->> Browser: Parse JSON and render notes dynamically (redrawNotes)