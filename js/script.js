(()=>{
  const tvShowsItem = document.querySelector('.tv-shows__list');
 

  const  backDropImage = e => {

    let element;
    
    if (e.target.closest('.tv-card')){
      element = e.target.closest('.tv-card');

    } else if (e.target.previousSibling.parentElement.closest('.tv-card')){

      element = e.target.previousSibling.parentElement.closest('.tv-card');
    }
     

    if (element){

      let image = element.querySelector('.tv-card__img');
      

      if (image) {
        let backdrop =  image.dataset.backdrop;
        image.dataset.backdrop = image.src;
        image.src = backdrop;
      }

    } 
    
  }

  tvShowsItem.addEventListener('mouseover', backDropImage);
  tvShowsItem.addEventListener('mouseout', backDropImage);
  
})();