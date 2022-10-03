# Simple Raffle Draw Express application 
### Date: 3/10/2022

**Project requirement:** 

Make a simple Raffle draw application. you can buy a single lottery ticket and you can buy a multi or bulk lottery ticket. you can update your ticket such as username and price. if you get find your all ticket to your name that’s is passable or you can find your single ticket your ticket id . you can delete your buying ticket.

finally raffle draw is complete and result showing a single winner or not three winner.

**Agenda:**

- functional requirement analysis
- API routes
- Create A Basic SRS (****Software Requirements Specification****)
- technology selected
- project setup
- Git hub repository set up project

**Frontend Work:**

**Functional Requirement:**

future added: frontend work to full fill this section.

**Backend Api work:**

**Routes:**

- /tickets/t/:ticketId - GET - find a single ticket by ticketId
- /tickets/t/:ticketId - PATCH - update ticket by ticketId
- /tickets/t/:ticketId - DELETE - delete ticket by ticketId
- /tickets/u/:username - GET - find a all tickets by username
- /tickets/u/:username - PATCH - update ticket by username
- /tickets/u/:username - DELETE - DELETE ticket by username
- /tickets - GET - find all ticket
- /tickets/sell - POST - create a new ticket
- /tickets/bulk - POST - create multiply tickets
- /tickets/draw (or add → ) ?wc={number} - GET - raffle draw to all tickets and return result

**Technology install:**

**use library & framework & middleware**

- Express
- morgan  - logs our request method and status
- router
- cors
- dotenv
- shortId - id generator.

---

→

**Database:**

- Make A custom database
- MongoBD → **future added**

**Project setup:**

Project setup with Vs code

### Directory name: →

- app
- middleware
- routes
- public
- test
- service
- util
- bd
- error
- config
- controller
- logs

## File Name: →

- server.js
- .env
- default.env
- .gitignore

**GitHub set up:**

**make a Git hub repo and push all code:**

git command:

- git init
- git add . →all
- git commit -m “your commit”
- git branch -m main
- git remote add origin [git repo url]
- git push -u origin main