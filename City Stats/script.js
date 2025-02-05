/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/


// button we dint give class id with it going to achive this 
const button =  document.querySelector('button') // drictly we give button

// event listener
button.addEventListener('click',displayStats) // element is button we add eventLisenter. event is 'click'. if click event takes place call the displayStats function
function displayStats() { // defining the displayStats function. when click event triggers this displayStats function called and what all Jobs to done going to write here. 
    
    //  console.log('clicked') /*just to check function is working when button clicked  in google inspect console*/
    const input = document.getElementById("input")  // drop down input html
    const city = input.options[input.selectedIndex].value // city is variable

    /*checking city wheather choosen city displaying inforamtion*/
    console.log(city) // Yet 2 continue
}

