const input= document.getElementById("input")
const submit = document.getElementById("submit")
const result = document.getElementById("data")
const imageContainer = document.getElementById("img")

// event listener
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchApi(String(input.value))
})

async function fetchApi(username){
    try {
        loading();
        let apiName = await fetch(`https://api.github.com/users/${username}`) // returns promise
        apiName = await apiName.json()// returns promise
        console.log(apiName);
        //getImage(apiName)
        display(apiName)
       // console.log(typeof apiName);

    } catch (error) {
        alert("error")
    }
    
}


/*function getImage(api){
    let img = new Image();
    img.src= api.avatar_url;
    imageContainer.appendChild(img)// duplicates the image
}*/

function display(api){
    setTimeout(()=>{
        result.innerHTML=`
        <img src=${api.avatar_url} alt="Github-avatar"><br>
      Name:  ${api.name} <br>
       Followers: ${api.followers} <br>
       Following: ${api.following} <br>
      Location:  ${api.location} <br>
       Public Repo: ${api.public_repos}
        `  
    },1000)
   
}

function loading(){
result.innerHTML=`<h2> Loading....</h2>`
}