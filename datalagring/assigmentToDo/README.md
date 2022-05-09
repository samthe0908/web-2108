# ToDo med koppling till databas med MONGO_DB
I detta projektet ska vi göra en enkel backend med ett RESTapi som kopplas till en databas.
API ska hantera TODOs där vi ska kunna skapa, läsa ut, redigera samt radera TODOs enligt CRUD principen.

## Funktioner som finns
### CRUD metoder
* Skapa nya TODOs
* Visa alla TODOs från databasen
* Visa en enskild TODO från databasen
* Uppdatera en TODO i databasen
* Uppdatera texten
* Uppdatera om en todo är klar eller inte
* Radera TODOs från er TODO databas

### Installerade paket
* BACKEND:
  * npm init --y
  * npm i cors express dotenv
  * npm i -D nodemon
  * npm i helmet morgan
  * npm i mongoose
  * npm i winston
  * npm i -D mocha chai chai-http
* FRONTEND:
  * npm i axios
  
För att lösa uppgiften fick jag gå igenom Arastos inspelningar, där fick jag lära mig om MONGO_DB,
och inspelningar vi hade med Lars på lektioner om Typescript, där lärde mig att koppla Backend till Frontend.  

Många saker känner jag igen från det förra TODOs uppgiften. Nya saker i uppgiften är att koppla upp till extern databas, Logger och Statuskoder. 