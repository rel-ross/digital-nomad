fetch("http://localhost:3000/campsites")
   .then(response => response.json())
   .then(sites => {
      const siteInfo = document.createElement('h2');

      siteInfo.innerHTML = `
         <h3>Your campsite is ${site.name}</h3>`
      
      document.querySelector('body').append(siteInfo);
   })