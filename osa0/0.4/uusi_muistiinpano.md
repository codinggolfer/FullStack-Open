sequenceDiagram
    participant browser
    participant server

    browser -->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server -->> browser: HTML document
    deactivate server

    browser -->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server -->> browser: HTML document (Initial page for notes)
    deactivate server

    browser -->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server -->> browser: text/css file (styles)
    deactivate server

    browser -->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server -->> browser: JavaScript file (main with functions to upload and render new note)
    deactivate server

    browser -->> main.js: executing JS-code

    main.js -->> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -->> main.js: JSON. file
    deactivate server

    main.js -->> browser: updates the notes on the browser

