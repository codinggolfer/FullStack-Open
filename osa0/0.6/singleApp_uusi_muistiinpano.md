sequenceDiagram
    participant Browser
    participant Server

    Browser ->> Browser: Write and submit node
    Browser ->> Browser: Prevent default form submission (e.preventDefault()) - default would refresh
    Browser ->> Browser: Create new note object (note.content, note.date)
    Browser ->> Browser: Add new note to notes array (notes.push(note))
    Browser ->> Browser: Create new <ul> and <li> elements
    Browser ->> Browser: Update the #notes element with new <ul>
    Browser ->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with new note (sendToServer)
    Server -->> Browser: Response 201 (Created)
    Browser ->> Browser: Clear form input field (e.target.elements[0].value = "") 