var state = []
//const displayCountryName = document.querySelector('#displayContainer')
//const displayFlag = document.querySelector('#flag');


async function search() {
    const countryName= document.querySelector('#name').value

    try {
        const serverData = await fetch(`https://restcountries.com/v3.1/name/` + countryName)
        state = await serverData.json();

        document.querySelector('#countryName').innerHTML = state[0].name.common
        document.querySelector('#postalCode').innerHTML = state[0].postalcode.format
        document.querySelector('#region').innerHTML = state[0].region
        document.querySelector('#flag').innerHTML = `<img src="${state[0].flags.png}" alt="flag"></img>`
    } 
    catch (error) {
        console.log(error)
    }
}

