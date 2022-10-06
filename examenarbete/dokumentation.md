#Dokumentation examensarbete webbutveckling  
## Vecka 1 (v.33)
Jag har bestämd mig för att skapa en fullstack webbsida för en RelaxSpa salong, som har bokning och shopping cart funktioner.  

Jag kombinerar alla tidigare kunskaper under utbildningen för att bygga
- Frontend i React
- Backend/API med NodeJS 
- Databas med MongoDB 

Med tester på frontend och backend samt använda TypeScript i denna projekt.

Jag började med att göra wireframe och sedan designskiss på hur sida ska se ut för desktop vyn. Denna projekt är tänkt att levereras till en massagesalong. Jag har diskuterat med salongsägaren på vilka funktioner, färger hon önskat har på sida. Sidans utseende och funktioner baserad kundens önskemål och mina kunskap på UI/UX design.

Denna vecka har mycket tid gått åt repetition på programmeringen.   

## Vecka 2 (v.34)
Efter samtal med handledare, gjorde jag en begränsning på mitt projekt. Jag skulle börja med att skapa en enklare sida dvs utan bokning och shopping funktion. Om det finns tid kan jag bygga på sedan.   
Jag har även bestämt att använda Bootstraps i mitt projekt.  
####Skapat under denna vecka
- App.tsx  
- navbar utan responsiv
- footer utan responsiv
## Vecka 3 (v.35)
Jag har inte varit aktiv, pga sjuk
## Vecka 4 (v.36)
Jag har inte arbetat med projektet pga jobb
## Vecka 5 (v.37)
Jag har använd "https://react-bootstrap.github.io/components/carousel/" som stöd.
####Skapat under denna vecka
- HomeView page med Carousel
- navbar och footer responsiv
- MassageView page som hämtar data från JSON fil till CARD.  
Jag hade problem med att hämta in bilder från JSON fil, förmodligen fel sökväg, jag har försökt hitta svaren men kunde ändå inte lösa. Vänta på handledning.  
## Vecka 6 (v.38)  
Jag löste problem med bilderna genom att lade in bildmapp i publik-mapp istället för i src-mapp som vi brukade göra.  
####Skapat under denna vecka
- MassageView page
- Behandling page. Eftersom denna sida ser snarlikt ut som MassageView Page, så jag har kopierat koderna från den. 
- Om mig page. Denna sida tillämpade jag ett annat node paket som heter VIVUS för att skapa animerat text.  
  Jag har även installerat ett annat paket som heter FRAMER MOTION, också för animeringen, men det slutade med att jag kraschade programmet, så jag tog bort det.
## Vecka 7 (v.39)  
 - Skapat OfferView med Köp-funktion. Denna sida är svårat i projektet.  
 Stöttade på ett problem som hade egentligen inte med själva funktion som jag skapade. Problemet var att "react-scripts" var av äldre version. Hittade lösning på problemet från https://stackoverflow.com/
 - Ändrat importen av data från JSON fil, från enskilda datafil för varje sida till en samlad datatil av alla behandlingar, sedan används ".filter" för att renderar ut det jag vill ha till respektiva sida.
## Vecka 8 (v.40)  
 - Skapat Sök-funktion och använd modal rendering av sökresultat. Flyttade ner Sök-ruta- form i modal, vilket gör att det blir lättare att skapa funktioner
 - ändrat variabel namn så att det visa vad den gör och ändrat från svenska till engelska 
 - finslipat alla filer, färdigställt dokumentation.


