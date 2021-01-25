const $campsitesList = document.querySelector("#campsites-list") 
fetch("https://developer.nps.gov/api/v1/campgrounds?stateCode=CO&api_key=bmY7DkU6cyIS3Y7U8SivP967Ip3dfoigu939Y48o")
    .then(response => response.json())
    .then(sites => {
        sites.data.map(site => {
            let $campsiteLI = document.createElement("li")
            $campsiteLI.innerHTML = `
            <h1>Campground Name: ${site.name}</h1>
            <h3>Cellphone reception? ${site.amenities.cellPhoneReception}</h3>
            `
            return $campsiteLI
        }).forEach($campsiteLI => $campsitesList.append($campsiteLI))
    })