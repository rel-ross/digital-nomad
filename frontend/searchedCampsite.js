const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

console.log(search_term)

const $campsiteSearchResult = document.querySelector(".campsite-search-result")
fetch(`http://localhost:3000/campsites?search_term=${search_term}`)
   .then(response => response.json())
   .then(campsites => {
      campsites.map(campsite =>{
      let $campsiteInfo = document.createElement("div")
      $campsiteInfo.innerHTML = `
      <h1>${campsite.name}</h1>
      <p>Location: ${campsite.location}</p>
      <p>Cell Phone Reception: ${campsite.cellPhoneReception}</p>
      <p>Showers: ${campsite.showers}</p>
      <p>Number of electrical hookups: ${campsite.electricalHookups}</p>
      `
      return $campsiteInfo
      }).forEach($campsiteInfo => $campsiteSearchResult.append($campsiteInfo))
   })