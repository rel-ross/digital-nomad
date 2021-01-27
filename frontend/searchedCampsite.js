const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

console.log(search_term)

const $campsiteSearchResult = document.querySelector(".campsite-search-result")
fetch(`http://localhost:3000/campsites?search_term=${search_term}`)
   .then(response => response.json())
   .then(campsites => {
      campsites.map(campsite =>{
      let $campsiteInfo = document.createElement("div")
      imageArray = JSON.parse(campsite.image)
      $campsiteInfo.style.backgroundImage = `url(${imageArray[0]})`
      $campsiteInfo.innerHTML = `
      <a id= "campsite-url" href="${campsite.url}"> 
      <div class= "campsite-info-card">
            <h1>${campsite.name}</h1>
            <p>Location: ${campsite.location}</p>
            <p>Cell Phone Reception: ${campsite.cellPhoneReception}</p>
            <p>Showers: ${campsite.showers}</p>
            <p>Number of electrical hookups: ${campsite.electricalHookups}</p>
            <div class="reserve-opacity"><div class="reserve-text">Reserve</div></div>
         </div>
         </a>  
         <div class="campsite-recommender"><h2>Digital Nomad's "Get Shit Done" rating</h2></div>
         
      `

      return $campsiteInfo
      }).forEach($campsiteInfo => $campsiteSearchResult.append($campsiteInfo))
   })

