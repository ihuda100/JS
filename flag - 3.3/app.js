import {countries} from "./list.js"

const listCountries = document.querySelector('#listCountries');

const addFlag =(flag)=>{
    listCountries.innerHTML = "";
    flag.forEach((country)=>{
        listCountries.innerHTML += `
        <li>
            <img src="${country.flags.png}" alt="${country.flags.alt}" height="160" width="100%">
            <h2>${country.name.common}</h2>
            <br>
            <h4>${country.name.official}</h4>
        </li>
        `
    })
}

const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');

// function sameWord(flag){
//   for(let i=0; i<searchInput.value.length; i++){
//     if(searchInput.value.charAt(i) != flag.name.common.charAt(i))
//       return false;
//   }
//   return true
// }

searchBtn.addEventListener('click',()=>{
  addFlag(countries.filter((flag)=> flag.name.common.toLowerCase().includes(searchInput.value.toLowerCase())))
  searchInput.value = "";
})

addFlag(countries);