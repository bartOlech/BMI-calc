import './scss/style.scss';
import {Obesity} from './js/obesity';
import {CorrectWeight} from './js/correctWeight';
import {OverWeight} from './js/overWeight';
import {UnderWeight} from './js/underWeight';

let BMIResult;
let changeInputValue;
let visilbeBMI=false;
const reg = /^\d+$/;
const inputWeight=document.querySelector('#inputWeight');
const inputGrowth=document.querySelector('#inputGrowth');
const femaleRadio=document.querySelector('#femaleRadio');
const maleRadio=document.querySelector('#maleRadio');
const checkButton=document.querySelector('#checkButton');
const resultStyle=document.querySelector('.resultStyle');
(function(){
	if(inputWeight.value=='' && inputGrowth.value==''){
        checkButton.disabled = true;
    }
})();
inputWeight.addEventListener('keyup', function(){
    if(inputWeight.value==''){
        checkButton.disabled = true;
    }else if(inputGrowth.value==''){
        checkButton.disabled = true;
    }else{
        checkButton.disabled = false;
    }
})
inputGrowth.addEventListener('keyup', function(){
    if(inputWeight.value==''){
        checkButton.disabled = true;
    }else if(inputGrowth.value==''){
        checkButton.disabled = true;
    }else{
        checkButton.disabled = false;
    }
})
checkButton.addEventListener('click', function(e){
    e.preventDefault();
    if(reg.test(inputWeight.value) && reg.test(inputGrowth.value) ){
    if(visilbeBMI===false){
    checkButton.innerHTML='Wyczyść';
    changeInputValue=inputGrowth.value/100;
    BMIResult=Math.round((inputWeight.value/Math.pow(changeInputValue,2))*10)/10;
    if(BMIResult<18.5){
        UnderWeight(BMIResult);
    }else if(BMIResult>18.5 && BMIResult<24.9){
        CorrectWeight(BMIResult);
    }
    else if(BMIResult>25 && BMIResult<29.5){
        OverWeight(BMIResult);
    }
    else if(BMIResult>30){
        Obesity(BMIResult);
    }
    visilbeBMI=true;
    }else{
        
        document.querySelector('body').setAttribute('style', '')
        document.querySelector('#obesity').classList.add('none');
        document.querySelector('#overWeight').classList.add('none');
        document.querySelector('#correctWeight').classList.add('none');
        document.querySelector('#underWeight').classList.add('none');
        resultStyle.classList.add('none');
        document.querySelector('.resultSection').setAttribute('style', 'animation-name:; animation-duration:0');
        inputWeight.value='';
        inputGrowth.value='';
        checkButton.innerHTML='Sprawdź';
        visilbeBMI=false;
    }inputWeight.setAttribute('style', '');
    inputGrowth.setAttribute('style', '');
}else if(!reg.test(inputWeight.value) && !reg.test(inputGrowth.value)){
    inputWeight.setAttribute('style', 'background:#D46A6A; border:2px solid #D46A6A');
    inputGrowth.setAttribute('style', 'background:#D46A6A; border:2px solid #D46A6A');
}else{
    if(reg.test(inputWeight.value)==false){
        inputGrowth.setAttribute('style', '')
        inputWeight.setAttribute('style', 'background:#D46A6A; border:2px solid #D46A6A');
    }else if(reg.test(inputGrowth.value)==false){
        inputWeight.setAttribute('style', '')
        inputGrowth.setAttribute('style', 'background:#D46A6A; border:2px solid #D46A6A');
}}
})
