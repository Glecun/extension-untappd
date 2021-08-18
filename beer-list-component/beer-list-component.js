function component() {
   const currentBeer = JSON.parse(sessionStorage.getItem("currentBeer"))
   autoClickWhenOneBeer();
   fillCheckInForm(currentBeer)
   return {
      beers: [],
      imgBeer: "https://glecun.fr/glebeer/ressources/img/get_img.php?img=" + encodeURIComponent(currentBeer?.photo),
      imgBeerBack: "https://glecun.fr/glebeer/ressources/img/get_img.php?img=" + encodeURIComponent(currentBeer?.photo) + "_back",
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
      isCurrent(beer) {
         const generateId = (beer) => beer.nom+beer.couleur+beer.variete;
         return generateId(beer) === generateId(currentBeer)
      }
   }

}

fillCheckInForm = (currentBeer) => {
   document.querySelector('.actions.desktop .open-checkin-btn')?.addEventListener('click', () => {
      forceDownload("https://glecun.fr/glebeer/ressources/img/get_img.php?img="+encodeURIComponent(currentBeer.photo), currentBeer.photo);
      document.querySelector('.modal-overlay').hidden = true
      document.querySelector('#checkin-form textarea.shout').innerHTML = currentBeer.description
      document.querySelector('#foursquare_id').value = "5e7b4d99c91df60008e8b168"
   }, false)
}

autoClickWhenOneBeer = () => {
   if(document.querySelectorAll('.beer-item').length === 1) {
      document.querySelector('.beer-item .name a').click()
   }
}

forceDownload = (blob, filename) => {
   var a = document.createElement('a');
   a.download = filename;
   a.href = blob;
   document.body.appendChild(a);
   a.click();
   a.remove();
}

