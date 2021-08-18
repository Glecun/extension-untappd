
function component() {
   const imgUrl = "http://glecun.fr/glebeer/ressources/img/" + sessionStorage.getItem("imgBeerToShow");
   return {
      beers: [],
      imgBeer: imgUrl + ".jpg",
      imgBeerBack: imgUrl + "_back.jpg",
      getBeers() {
         fetch('https://glecun.fr/glebeer/donnees/get_data.php?q=&checkedfiltres=')
            .then(response => response.json())
            .then(data => this.beers = data)
      },
      searchBeer(beer) {
         sessionStorage.setItem("imgBeerToShow", beer.photo);
         document.querySelector('.search_box .aa-input').value = beer.nom
         document.querySelector('.search_box').submit()
      }
   }
}

(function autoClickWhenOneBeer() {
   if(document.querySelectorAll('.beer-item').length === 1) {
      document.querySelector('.beer-item .name a').click()
   }
})();


