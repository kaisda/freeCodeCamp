- Step 1: declare teamName with value by using .getElementById("team") method
- Step 2: declare typeOfSport & worldCupYear with value by using .getElementById("sport") & .getElementById("year") method
- Step 3: declare headCoach &  playerCards with value by using .getElementById("head-coach") & .getElementById(" playerCards") method
- Step 4: declare playersDropdownList with value by using .getElementById("players") method
- Step 5: declare myFavoriteFootballTeam as empty object ( {} ) preparing for data structure build out to hold all information
- Step 6: add 'team' property with value "Argentina" into object in Step 5
- Step 7: add 'sport' 'year' 'isWorldCupWinner' 'headcoach' property with value "Football" "1986" "true" "{}"(object) into object in Step 5
- Step 8: add 'coachName' 'matches' property with value "Carlos Bilardo" "7" in headcoach object in Step 7
- Step 9: add 'players' property with value "[]"(array) into object in Step 5
- Step 10-12 : add objects in player[] & prevent this object to be modified by using Object.freeze() method
- Step 13: declare sport & assign value using call sport from myFavoriteFootballTeam
- Step 14: declare team & assign value using call team from myFavoriteFootballTeam
- Step 15-16 : change Step 13-14 to object destructuring syntax & add year, players
- Step 17 : declare coachName & assign value using call coachName from myFavoriteFootballTeam.headCoach
- Step 18-20 : assign sport to typeOfSport.textContent, team to teamName.textContent, year to worldCupYear.textContent, coachName to headCoach.textContent then all 4 data will display on the page
- Step 21-22 : declare setPlayerCards as an arrow function with parameter as arr & assign it as player declared in Step 16
- Step 23 : inside setPlayerCards() add map() method for arr with callback function as parament to get a new array & assign it with += to playerCards.innerHTML
- Step 24: inside callback function in Step 23 unpack all 5 object properties ( name, position, number, isCaptain, nickname ) in arr using object destructuring for function part
- Step 25: inside callback function in Step 23 add return statement using a template literal with adding an empty div element with class of player-card
- Step 26: inside empty div element add h2 element with name using embedded expression
- Step 27: before ${name}(with a space) add new embedded expression with ternary operator to check isCaptain is true or false to return (Captain) or empty string 
- Step 28: below h2 element in Step 26 add p element with text Position: & embedded expression that contain position
- Step 29: use same way to add Number: / ${number}
- Step 30-31: use same way to add Nickname: ${nickname ? nickname : "N/A"} to check nickname is or not null to return nickname or N/A
- Step 32: chain .join("") to remove the commas between each player-card created by .map()
- Step 33-34: .addEventListener() method on playersDropdownList. Inside the event listener, pass in a "change" event type and an empty callback function use e as parameter for event
- Step 35: inside callback function in Step 33 add console.log with the value of e.target.value for testing
- Step 36: remove console.log & access for innerHTML property of playerCards with empty string as value assigned
- Step 37: add switch statement to check for user selection from dropdown menu
with e.target.value as expression
- Step 38-40: add case "nickname" & call setPlayerCards() with an argument of players.filter() & inside filter() add callback function with parameter player & implicitly return player.nickname is not null & add break at the end
- Step 41: add new case "forward" using the same way as Step 38-40 with player.position === "forward"
- Step 42: add new case same way as Step 41 with player.position === "midfielder"
- Step 43: add new case same way as Step 41 with player.position === "defender"
- Step 44: add new case same way as Step 41 with player.position === "goalkeeper"
- Step 45: add default case just call setPlayerCards without argument




