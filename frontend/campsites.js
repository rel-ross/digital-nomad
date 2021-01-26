console.log('loaded');
const siteContainer = document.querySelector('.site-container')

fetch("http://localhost:3000/campsites")
   .then( response => response.json())
   .then( sites => renderSites(sites));

   function renderSites(sites) {
      sites.forEach(site => showsite(site))
   };

   function showsite(site) {
      const siteCard = document.createElement('div')
      siteCard.classList.add('site_card');
      const siteName = document.createElement('h2');
      siteName.innerHTML = `<a href="campsiteShow.html?site_id=${site.id}">${site.name}</a>`;

      siteCard.append(siteName);
      siteContainer.append(siteCard);
   }