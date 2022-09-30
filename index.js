console.log("OMDB Movies");
let btn=document.querySelector("#search");
btn.addEventListener("click",takeInput);
let name=document.querySelector("#name")
let year=document.querySelector("#year");
let container=document.querySelector("#container");
function takeInput(){
    let t=name.value;
   t=t.split(" ").join("+");

const url=`http://www.omdbapi.com/?t=${t}&apikey=a9e02139`;

function getData(){
    container.innerHTML="";
    fetch(url).then((res)=>{
       return res.json() 
    }).then((res)=>{
        if(res.Response==="True"){
    let box=document.createElement("div");
    box.setAttribute("class","box");
    let img=document.createElement("img");
    let title=document.createElement("h3");
    let director=document.createElement("p");
    let lang=document.createElement("p");
    let year=document.createElement("h6");
    let actors=document.createElement("p");
    let rating=document.createElement("p");
    img.src=res.Poster;
    title.innerText=res.Title;
    director.innerText="Director : "+res.Director;
    lang.innerText="Language : "+res.Language;
    year.innerText=res.Year;
    actors.innerText="Actors : "+res.Actors;
        container.append(box);
        box.append(img,title,year,actors,director,lang);
        if(res.imdbRating>8.5){
            rating.innerText="Recommended";
            box.append(rating);
            rating.style.backgroundColor="lightgrey"
            rating.style.color="black";
            rating.style.display="inline-block";
            rating.style.borderRadius="5px";
            rating.style.marginLeft="5px";
        }
        console.log(res)
    }
    else{
        container.innerHTML=`<div class="errImg"><img src="https://media3.giphy.com/media/KVVQ9vB3dSbZLYMf9n/200w.webp?cid=ecf05e47rc98s03uw2qtackl9f1oeerim15uc84ev9kyxlwf&rid=200w.webp&ct=g"></div>`
    }
    })
}
getData();
}