# Project 12 of the front end developer training of the OpenClassRooms training organization (SportSee)

Develop an analytics dashboard with React

# Dependencies

The use of Visual Studio Code is recommended

- React v18.0.0

- React-dom v18.0.0

- Recharts v2.1.9

- prop-types v15.8.1

# Installation instructions 

In order to run this project, please follow the steps below.

1. Clone the repository on your computer

2. Open the main folder (containing the two folders "frontend" and "backend") with VSCode

3. Open two terminals in Visual Studio Code, one for the backend folder, the other one for the frontend folder

    - On the first one, type the following commands :

        - "cd backend" to access the backend folder
        - "npm install" to install all of the backend dependencies
    - Do the same on the second terminal :

        - "cd ./frontend" to access the frontend folder
        - "npm install to" install all of the frontend dependencies
    - Once all of the dependencies are installed, type the following commands in the backend terminal : "npm start" and wait for the message "Magic happens on port 3000" to display

    -Then in the frontend terminal type : "npm start". A prompt saying "Another app is running on port 3000" will display. Type "Y" to accept.

4. The React app should display properly on a page claiming the user does not exist

5. There are two user ids : "12" and "18". To access a working user page the correct URLs are

    - http://localhost:3001/12
    - http://localhost:3001/18