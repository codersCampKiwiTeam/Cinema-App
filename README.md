# Kiwi Cinema Website

### Cinema website created by Kiwi Team with possibility to book a tickets for broadcast movies in Cinema.

 Our website is a simple simulation of the cinema page. It retrieves the currently available in cinemas movies (data from IMDB database). On the homepage you can see the movies and you can click below the poster of one of them on "reserve tickets" button to book a ticket for it. Once it's clicked you'll be redirected to the page with the view of cinema hall with seat area and seats (available places are highlighted with red, unavailable with grey). When you click on the chosen seat then the screen with additional questions will appear. It will ask you for exact seance date, hour, number of tickets and suitable discount: if you are senior or student. The last step is just to click the button Next. Once it's clicked the ticket will be booked and you'll be notified about it by the message with the confirmation number.
Website is fully responsive and may be used on mobile devices as well.

### Technical overview
On the client side of this project React.js have been used. On the backend side: Node.js, MongoDB Atlas as a database which is hosted in a cloud and Express.js to create a sever and manage GET, POST, PUT, DELETE HTTP requests.

#### npm packages used in project (with versions):

 - react: 16.9.0
 - react-dom: 16.9.0
- react-router-dom 5.1.1
- react-scripts 3.1.2
- @fortawesome/react-fontawesome 0.1.5
- express 4.17.1
- mongoose 5.7.3
- jsonwebtoken 8.5.1
 - axios 0.19.0
 - config 3.2.3
 - cors: 2.8.5
 - gh-pages 2.1.1


## Screenshots

### Homepage
![homepage](https://github.com/codersCampKiwiTeam/Cinema-App/blob/master/screenshots/1%20homepage.png?raw=true)

### Homepage mobile version
![homepage mobile](https://github.com/codersCampKiwiTeam/Cinema-App/blob/master/screenshots/1%20homepage%20mobile.png?raw=true)
 
### Cinema Hall View
  ![Cinema Hall view](https://github.com/codersCampKiwiTeam/Cinema-App/blob/master/screenshots/2%20cinema%20hall%20page.png?raw=true)

### Additional questions window

![additional questions window](https://github.com/codersCampKiwiTeam/Cinema-App/blob/master/screenshots/3%20additional%20questions%20window.png?raw=true)

### Confirmation window

![Confirmation window](https://github.com/codersCampKiwiTeam/Cinema-App/blob/master/screenshots/4%20confirmation%20window.png?raw=true)
### Authors:  
Jakub Bednarz - main layout & React.js  
Mateusz Hadrian - React.js  
Kinga Mielcarska - backend side & layout styling
