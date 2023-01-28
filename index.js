console.log('working');
let images=document.querySelectorAll(".img");
console.log(images);
let width=images[0].clientWidth;
console.log(width);
let index=0;
function pluse(nxt){
    if (index>=2)
    {
        index=0;  
           
    }
    else{
        index+=nxt;
    }
   
    console.log(nxt);
  
    let px=width*index;
    console.log('px is',px);
    images.forEach(item=>
        {
            if (index==0){
                item.style.transform=`translateX(${-px}px)`;
                item.style.transition=`none`;

            }
            else{
            item.style.transform=`translateX(${-px}px)`;
            item.style.transition=`all 0.5s ease-in-out`;
            }
           
        })
}
function minuse(prev){
    if (index==0)
    {
        index=2;
              
    }
    else{
        index+=prev;
    }
   
    console.log(index);
  
    let px=width*index;
    console.log('px is',px);
    images.forEach(item=>
        {
            if (index !=2)
            {
                item.style.transform=`translateX(${-px}px)`;
                item.style.transition=`all 0.5s ease-in-out`;
            }
            else{
                item.style.transform=`translateX(${-px}px)`;
                item.style.transition=`none`;
            }
           
        })
}
