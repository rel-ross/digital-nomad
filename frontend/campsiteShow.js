const $campsiteSearchResult = document.querySelector(".campsite-search-result")
fetch("http://localhost:3000/campsites")
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