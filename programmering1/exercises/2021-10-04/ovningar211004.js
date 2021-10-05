//1 Skriv ett program som skriver ut ditt namn och en valfri hälsning på skärmen.
let name ='samantha'
console.log(name)

//2. Skriv ett program som visar vad klockan är just nu (hh:mm:ss).
const hour = new Date()
hourNow = hour.getHours()
minuteNow = hour.getMinutes()
secondNow = hour.getSeconds()
console.log(hourNow,':', minuteNow,':',secondNow)

//3.1 Skriv ett program som skriver ut dagens datum:mm-dd-yyyy
let date = new Date()
todaydate = date.getDate()
console.log(todaydate)

//3.2 Skriv ett program som skriver ut dagens datum:mm/dd/yyyy
//3.3 Skriv ett program som skriver ut dagens datum:dd-mm-yyyy
//3.4 Skriv ett program som skriver ut dagens datum:dd/mm/yyyy
//3.5 Skriv ett program som skriver ut dagens datum:yyyy-mm-dd
//3.6 Skriv ett program som skriver ut dagens datum:yyyy/mm/dd




//4.1 Skriv ett program som skriver ut dagens datum och klockan just nu:mm-dd-yyyy hh PM : mm : ss
//4.2 Skriv ett program som skriver ut dagens datum och klockan just nu:mm/dd/yyyy hh PM : mm : ss
//4.3 Skriv ett program som skriver ut dagens datum och klockan just nu:dd-mm-yyyy hh PM : mm : ss
//4.4 Skriv ett program som skriver ut dagens datum och klockan just nu:dd/mm/yyyy hh PM : mm : ss
//4.5 Skriv ett program som skriver ut dagens datum och klockan just nu:yyyy-mm-dd hh:mm:ss
//4.6 Skriv ett program som skriver ut dagens datum och klockan just nu:yyyy/mm/dd hh:mm:ss

console.log(todaydate, hourNow)

//5.1 Skriv ett program som räknar ut en rektangels: area
function rectangleArea(width, height){
let Area = width*height
return Area
}
console.log(rectangleArea())

//5.2 Skriv ett program som räknar ut en rektangels: omkrets
function getPerimeter(width, height){
let perimeter = 2*(width+height)
return perimeter
}
console.log(getPerimeter())

//6.1 Skriv ett program som räknar ut en triangels: area
function triangleArea(width, height){
    let area = (width*height)/2
    return area
    }
    console.log(triangleArea())
    
//6.2 Skriv ett program som räknar ut en triangels:omkrets
function trianglePerimeter(side1, side2, side3){
    let perimeter = side1+side2+side3
    return perimeter
    }
    console.log(trianglePerimeter())

//7. Skriv ett program som räknar ut om ett givet år är ett skottår eller inte.

//8. Skriv ett program som räknar ut hur många dagar det är kvar till nyårsafton.
//9. Skriv ett program som räknar ut hur många dagar det är kvar till nyårsafton 2025.




