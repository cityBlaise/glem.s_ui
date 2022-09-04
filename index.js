let prix_btn= document.getElementsByClassName('filter')[0];
let prix_box=document.getElementsByClassName('filter-hidden')[0];
prix_btn.addEventListener('click',function (e){ 
    prix_box.focus
    prix_box.classList.toggle('filter-visible')
    e.preventDefault(false)

}); 

