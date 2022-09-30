
document.querySelector("#name").addEventListener("focusin",myfunc);
document.querySelector("#name").addEventListener("focusout",myfunc2);
let container=document.querySelector("#container");
let id;
async function get(){
    let name=document.querySelector("#name").value;
   let ans= Search(name);
   let data= await ans;
   showData(data.Search);
}

async function Search(name){
    try {
    const url=`http://www.omdbapi.com/?s=${name}&apikey=a9e02139`;

    let res=await fetch(url);
    let data= await res.json();
    return data;
    // fetch(url).then((res)=>{
    //     return res.json();
    // }).then((res)=>{
    //     console.log(res)
    // });
    
    }catch(error){
        console.log(error);
    }

}

function showData(Movies){
    container.innerHTML=null;
    if(Movies === undefined){
        return false;
    }
    Movies.forEach(el => {
        let box=document.createElement("div");
        let inbox=document.createElement("div");
        let img=document.createElement("img");
        let title=document.createElement("h5");
        let year=document.createElement("h6");
        box.setAttribute("class","box");
        inbox.setAttribute("class","inbox");
        img.src=el.Poster;
        title.innerText=`${el.Title}`;
        year.innerText="Year : "+el.Year;
        inbox.append(img,title,year);
        box.append(img,inbox)
        container.append(box);
        console.log(el) 
    });
}


function debouncer(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        func();
    }, delay);
}

function myfunc(){
   container.style.opacity="1"; 
}
function myfunc2(){
    container.style.opacity="0"; 
 }
