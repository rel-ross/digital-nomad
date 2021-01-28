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
      <div id="campsite-info-card" class= "campsite-info-card">
            <h1>${campsite.name}</h1>
            <p>Location: ${locationStyling(campsite)}</p>
            <p>Cell Phone Reception: ${campsite.cellPhoneReception}</p>
            <p>Showers: ${campsite.showers}</p>
            <p>Number of electrical hookups: ${campsite.electricalHookups}</p>
            <div id="reserve-text" class="reserve-text">Reserve</div>
            <div class="reserve-opacity"></div>
         </div>
         </a>  
         <div class="campsite-recommender">
            <h2>Get It Done</h2>
            <h2>rating</h2>
            <h1>${recommenderPercent(campsite)}%</h1>
         </div>
         <div class="reserve-opacity"><div class="reserve-text">Reserve</div></div>
      `

      return $campsiteInfo
      }).forEach($campsiteInfo => $campsiteSearchResult.append($campsiteInfo))
   })

function recommenderPercent(campsite) {
   let recommended=100;
   if (campsite.showers === "None") {
      recommended-= 30
   }
   if (campsite.cellPhoneReception === "No") {
      recommended -= 30
   }
   if (campsite.electricalHookups < 15) {
      recommended -= 10
   }
   if (campsite.electricalHookups < 5) {
      recommended -= 20
   }
   return recommended
}

function locationStyling(campsite) {
   return campsite.location.replace(/([A-Z])/g, ' $1').trim()
 
}