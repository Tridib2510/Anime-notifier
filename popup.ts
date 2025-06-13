const countdown_1=document.getElementById('countdown2')
  const c=countdown_1?.cloneNode(true)

  countdown_1?.parentNode?.removeChild(countdown_1)
  

function monthNameToNumber(monthAbbr: string): number | null {
    const months: { [key: string]: number } = {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
        Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
    };
    // Normalize input (capitalize first letter, lowercase next two)
    const key = monthAbbr.charAt(0).toUpperCase() + monthAbbr.slice(1, 3).toLowerCase();
    return months[key] ?? null; // Returns null if not found
}



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
  
       
       const day_date:string=`${date}`.substring(5,7)
       const Month:string=`${date}`.substring(8,11)
       const year:string=`${date}`.substring(12,16)
       const timer:string=`${date}`.substring(17,25)
        
       const Month_date:number|null=monthNameToNumber(Month)
       const Month_string=`${Month_date}`.length===1?`0${Month_date}`:`${Month_date}`

  
      
     

       var countDownDate = new Date(`${year}-${Month_string}-${day_date}T${timer}Z`).getTime();
      
        
            // Update the count down every 1 second
            

                // Get today's date and time
                var now = new Date().getTime();
                console.log(now)

                // Find the distance between now and the count down date
                var distance = countDownDate - now;
               
                
              console.log(distance)

                // Time calculations for days, hours, minutes and seconds
                 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                distance -= days * (1000 * 60 * 60 * 24);
                var hours = Math.floor(distance / (1000 * 60 * 60));
                distance -= hours * (1000 * 60 * 60);
               var minutes = Math.floor(distance / (1000 * 60));
               distance -= minutes * (1000 * 60);
                var seconds = Math.floor(distance / 1000);
                 // Output the result in an element with id="countdown" 
               let a=null;
                if(count)
                 a= count.querySelector("#countdown");
                if(a)
                a.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +
                    "s ";
                    

                // If the count down is over, write some text 
                let c:number=2
                if (distance===0) {
  // Timer reached zero, clear interval if any
             c--;

  // Create a notification
     chrome.notifications.create({
        type: 'basic',
        iconUrl:'icons/icon.png',
        title: 'Timer Finished',
        message: 'Your countdown timer has reached zero!'
    });
}
               
            
            
           
            
            // console.log(count)
           

       if(right && count){
        
       right?.appendChild(count)
       }

       anime?.appendChild(left)
       anime?.appendChild(right)
       if(days<7){
        
       document.body.appendChild(anime)
        }

       

  }

})
.catch(err=>console.log(err))



