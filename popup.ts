
const anime=document.getElementById('anime')

fetch('https://anime-notifier-5.onrender.com')
.then((res)=>res.json())
.then(data=>{
  for(let i=0;i<data.List.length;i++){
       const div=document.createElement('div')
       div.style='background-color:#555; border-radius:8px';
       const title:string=data.List[i].title;
       const date:string=data.List[i].date;
       const img:string=data.List[i].image;

       

       const title_h1=document.createElement('h1');
       const date_h2=document.createElement('h2');
       const image=document.createElement('img')
        title_h1.innerHTML=title;
        date_h2.innerHTML=date;
        image.src=img;
        div?.appendChild(image);
       div?.appendChild(title_h1)
       div?.appendChild(date_h2)

       anime?.appendChild(div)

       

  }

})
.catch(err=>console.log(err))



