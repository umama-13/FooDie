let menuToggle = document.getElementById('menuToggle');
let navList = document.getElementById('navList');
menuToggle.addEventListener('click',()=>{
  if(navList.style.display==='flex'){navList.style.display='none';}
  else{navList.style.display='flex';navList.style.flexDirection='column';}
});