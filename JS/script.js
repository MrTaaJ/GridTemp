var f = function (){
  var eventHandler = function(event){
    var divElement = document.getElementsByClassName('first-section');
    var divElement2 = document.getElementsByClassName('first-section-1');
    var divElement3 = document.getElementsByClassName('card');
    var divElement4 = document.getElementsByClassName('card-image');
    var divElement5 = document.getElementsByClassName('card-text');
    var divElement6 = document.getElementsByClassName('card-contain');
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
        divElement[i].classList.add('pad-lr-sm');
      }else if (screentext <= 1400 && screentext >= 1081){
        divElement2[i].classList.remove('width-1600');
        divElement[i].classList.add('width-100-per');
        divElement2[i].classList.add('width-100-per');
        divElement[i].classList.add('pad-lr-sm');
      }; 

    };
    var j;
    for (j = 0; j < divElement6.length; j++) {
      if (screentext <= 1080){        
        divElement6[j].classList.remove('height-400');   
      }else if (screentext >= 1081){        
        divElement6[j].classList.add('height-400');   
      };
    };
    var k;
    for (k = 0; k < divElement4.length; k++) {
      if (screentext <= 1080){
        divElement3[k].classList.add('height-500');
        divElement3[k].classList.add('grid-span-6');
        divElement3[k].classList.remove('grid-span-3');
        divElement4[k].classList.add('height-60-per');
        divElement4[k].classList.remove('height-40-per');
        divElement5[k].classList.add('height-60-per');
        divElement5[k].classList.remove('height-40-per');   
      }else if (screentext >=1081){
        divElement3[k].classList.remove('height-500');
        divElement3[k].classList.remove('grid-span-6');
        divElement3[k].classList.add('grid-span-3');
        divElement4[k].classList.remove('height-60-per');
        divElement4[k].classList.add('height-40-per');
        divElement5[k].classList.remove('height-60-per');
        divElement5[k].classList.add('height-40-per');
      };
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
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