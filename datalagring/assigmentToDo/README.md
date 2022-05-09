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

Många saker känner jag igen från det förra TODOs uppgiften. Nya saker i uppgiften är att koppla upp till extern databas, Model, Logger och Statuskoder.   
Det svåra med detta var att komma på själv hur koden skall skrivas, så mina koder tog jag från lektioner, däremot kan jag läsa och förstå vad koden gör.  

I Fronted tycker jag är mycket lättare eftersom jag återanvända koder från det gamla TODOs, men behövde ändra i metoder som skrivs ut data i några av funktioner. 
Så min gamla TODOs och nya TODOs ser ganska identisk ut i fronted.  
Ett problem som jag fick i frontend var att det inte kunde ansluta till server, det tog mig många timmar att lösa det problemet. Det löste jag genom att titta på inspelningar igen, problemet var att jag hade skapat .env fil efter att starta servern. 

Det svåraste med uppgift var UpdateDone för det kunde jag inte lösa med det gamla koden, och det funktion fick jag hjälp av Ursula och Lars.