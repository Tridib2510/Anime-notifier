const countdown_1=document.getElementById('countdown2')
  const c=countdown_1?.cloneNode(true)

  countdown_1?.parentNode?.removeChild(countdown_1)
  
fetch('https://anime-notifier-5.onrender.com')
.then((res)=>res.json())
.then(data=>{
let TIMER: any[] = [];
  for(let i=0;i<data.List.length;i++){
const count = countdown_1?.cloneNode(true) as HTMLElement | null;
       
       const left=document.createElement('div')
       const right=document.createElement('div')
       left.classList.add('child')
       right.classList.add('right')
       left.style='background-color:#555; border-radius:8px';
       right.style='background-color:#555; border-radius:8px';
       const title:string=data.List[i].title;
       const date:string=data.List[i].date;
       const img:string=data.List[i].image;

       const anime=document.createElement('div')
       anime.id='anime'
       anime.classList.add('parent')

       const title_h1=document.createElement('h1');
       const date_h2=document.createElement('h2');
       const image=document.createElement('img')
        title_h1.innerHTML=title;
        title_h1.style='color:white;'
        date_h2.innerHTML=date;
        image.src=img;
        left?.appendChild(image);
       right?.appendChild(title_h1)
       right?.appendChild(date_h2)
  
       
       const Month_date:string=`${date}`.substring(4,7)
       const Month:string=`${date}`.substring(8,11)
       const year:string=`${date}`.substring(12,16)
       const timer:string=`${date}`.substring(17,25)
      
      
       var countDownDate = new Date(`${Month} ${Month_date}, ${year} ${timer}`).getTime();
      
        
            // Update the count down every 1 second
            

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;
               
                
              console.log(distance)

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="countdown" 
               let a=null;
                if(count)
                 a= count.querySelector("#countdown");
                if(a)
                a.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +
                    "s ";
                    

                // If the count down is over, write some text 
                
               
            
            
           
            
            console.log(count)
           

       if(right && count){
        
       right?.appendChild(count)
       }

       anime?.appendChild(left)
       anime?.appendChild(right)

       document.body.appendChild(anime)

       

  }

})
.catch(err=>console.log(err))



