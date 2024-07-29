function subNow(){
  const subVar =  document.querySelector(`.js-btn`);
 
  if (subVar.innerText === 'Subscribe'){

 subVar.innerText = 'Subscribed';
  }else{    
     subVar.innerText = 'Subscribe';
  }
} ;