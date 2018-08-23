const yourBMI=document.querySelector('#bmiResult');
const mobileViewport = window.matchMedia("screen and (max-width: 600px)");

export const Obesity=(value)=>{
   document.querySelector('.resultStyle').classList.remove('none')
    yourBMI.innerHTML=value;
    document.querySelector('#obesity').classList.remove('none')
if(mobileViewport.matches) {
    document.querySelector('.resultSection').setAttribute('style', 'animation-name:showResultPhone; animation-duration:0.9s;');
} else {
    document.querySelector('.resultSection').setAttribute('style', 'animation-name:showResultLargeScreen; animation-duration:0.9s;');
    document.querySelector('body').setAttribute('style', 'animation-name:removeOverflow; animation-duration:0.9s;')
}  
}