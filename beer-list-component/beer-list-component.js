function component() {
   const currentBeer = JSON.parse(sessionStorage.getItem("currentBeer"))
   autoClickWhenOneBeer();
   fillCheckInForm(currentBeer)
   return {
      beers: [],
      imgBeer: "https://glecun.fr/glebeer/ressources/img/" + currentBeer?.photo + ".jpg",
      imgBeerBack: "https://glecun.fr/glebeer/ressources/img/" + currentBeer?.photo + "_back.jpg",
      getBeers() {
         fetch('https://glecun.fr/glebeer/donnees/get_data.php?q=&checkedfiltres=')
            .then(response => response.json())
            .then(data => this.beers = data)
      },
      searchBeer(beer) {
         sessionStorage.setItem("currentBeer", JSON.stringify(beer));
         document.querySelector('.search_box .aa-input').value = beer.nom
         document.querySelector('.search_box').submit()
      },
      download(url) {
         const a = document.createElement('a')
         a.href = url
         a.download = url.split('/').pop()
         document.body.appendChild(a)
         a.click()
         document.body.removeChild(a)
      }
   }
}

fillCheckInForm = (currentBeer) => {
   document.querySelector('.actions.desktop .open-checkin-btn')?.addEventListener('click', () => {
      document.querySelector('#checkin-form textarea.shout').innerHTML = currentBeer.description
      document.querySelector('#foursquare_id').value = "5e7b4d99c91df60008e8b168"
   }, false)
}

autoClickWhenOneBeer = () => {
   if(document.querySelectorAll('.beer-item').length === 1) {
      document.querySelector('.beer-item .name a').click()
   }
}

