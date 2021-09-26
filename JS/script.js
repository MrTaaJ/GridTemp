var f = function (){
  var eventHandler = function(event){
    var divElement = document.getElementsByClassName('first-section');
    var divElement2 = document.getElementsByClassName('first-section-1');
    var screentext = window.innerWidth;
    
    var i;
    for (i = 0; i < divElement.length; i++) {
      if (screentext >= 1701){        
        divElement2[i].classList.add('width-1600');
        divElement2[i].classList.remove('width-100-per');
        divElement[i].classList.add('width-100-per');
        divElement[i].classList.remove('pad-lr-sm');   
      }else if (screentext >= 1401 && screentext <= 1700){
        divElement2[i].classList.remove('width-1600');
        divElement[i].classList.add('width-100-per');
        divElement2[i].classList.add('width-100-per');
        // document.querySelector('#first-section').classList.add('pad-lr-med');
        divElement[i].classList.add('pad-lr-sm');
      }else if (screentext <= 1400){
        divElement2[i].classList.remove('width-1600');
        divElement[i].classList.add('width-100-per');
        divElement2[i].classList.add('width-100-per');
        divElement[i].classList.add('pad-lr-sm');
        // document.querySelector('#first-section').classList.remove('pad-lr-med');
      };
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    // if (screentext >= 1701){        
    //   document.querySelector('#first-section-1').classList.add('width-1600');
    //   document.querySelector('#first-section-1').classList.remove('width-100-per');
    //   document.querySelector('#first-section').classList.add('width-100-per');
    //   document.querySelector('#first-section').classList.remove('pad-lr-sm');   
    // }else if (screentext >= 1401 && screentext <= 1700){
    //   document.querySelector('#first-section-1').classList.remove('width-1600');
    //   document.querySelector('#first-section').classList.add('width-100-per');
    //   document.querySelector('#first-section-1').classList.add('width-100-per');
    //   // document.querySelector('#first-section').classList.add('pad-lr-med');
    //   document.querySelector('#first-section').classList.add('pad-lr-sm');
    // }else if (screentext <= 1400){
    //   document.querySelector('#first-section-1').classList.remove('width-1600');
    //   document.querySelector('#first-section').classList.add('width-100-per');
    //   document.querySelector('#first-section-1').classList.add('width-100-per');
    //   document.querySelector('#first-section').classList.add('pad-lr-sm');
    //   // document.querySelector('#first-section').classList.remove('pad-lr-med');
    // };
  };

  window.addEventListener('load', eventHandler);
  window.addEventListener('resize', eventHandler);
    
};

document.addEventListener('DOMContentLoaded', f);