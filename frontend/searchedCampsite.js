const searchParams = new URLSearchParams(window.location.search)
const search_term = searchParams.get("search_term")

const $campsiteSearchResult = document.querySelector(".campsite-search-result")
fetch(`http://localhost:3000/campsites?search_term=${search_term}`)
   .then(response => response.json())
   .then(campsites => {
      campsites.map(campsite =>{
      let $campsiteInfo = document.createElement("div")
      imageArray = JSON.parse(campsite.image)
      if (imageArray.length > 0) {
      $campsiteInfo.style.backgroundImage = `url(${imageArray[0]})`
      }
      else {
         $campsiteInfo.style.backgroundImage = `url("https://www.nps.gov/common/uploads/structured_data/94F1598C-9D30-83AC-320C2F832718EFFE.jpg")`
      }
      if (campsite.cellPhoneReception.length > 0) {
         $campsiteInfo.innerHTML = `
         <div id="campsite-info-card" class= "campsite-info-card">
               <h1>${campsite.name}</h1>
               <p>Location: ${locationStyling(campsite)}</p>
               <p>Cell Phone Reception: ${campsite.cellPhoneReception}</p>
               <p>Showers: ${campsite.showers}</p>
               <p>Number of electrical hookups: ${campsite.electricalHookups}</p>
               <a href="${campsite.url}" id= "campsite-url"><div id="reserve-text" class="reserve-text">Reserve</div></a>
               <div class="reserve-opacity"></div>
            </div>
            <div class="campsite-recommender">
               <h2>Get It Done</h2>
               <h2>Rating</h2>
               <h1>${recommenderPercent(campsite)}%</h1>
            </div>
         `
      }
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