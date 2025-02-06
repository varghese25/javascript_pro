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
const button = document.querySelector('button') // drictly we give button

// ---------------image4 fixed her in between button oly once the result will display----------------------------

let resultdiv = document.createElement('div') // created div element in resultdiv
    resultdiv.id = 'result' // css we can see this #result to work this style
// ------------------------------------------------------------------------------------
    /* in HTML were excatly it should place in <div id="wrapper"> in the last result div */ 

    /*<div id = 'Wrapper'> going to make resultdiv as a child*/
    document.getElementById('wrapper').appendChild(resultdiv) // wrapper child the resultdiv which we create to display output  




// event listener
button.addEventListener('click', displayStats) // element is button we add eventLisenter. event is 'click'. if click event takes place call the displayStats function
function displayStats() { // defining the displayStats function. when click event triggers this displayStats function called and what all Jobs to done going to write here. 

    //  console.log('clicked') /*just to check function is working when button clicked  in google inspect console*/
    const input = document.getElementById("input")  // drop down input html
    const city = input.options[input.selectedIndex].value // city is variable information stored
    /*checking city wheather choosen city displaying inforamtion*/
    // console.log(city) // Yet 2 continue

    let population = 0, literacyRate = 0, language = ''

    switch (city) {
        case 'Bengalur':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break

        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break

        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break

        case 'Delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
    // console.log(text)

    /* Going to create result div Using createElement  */ 
        document.getElementById('result').innerHTML= text

}

