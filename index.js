const btn = document.getElementById("jokebtn");
const joke= document.getElementById("joke");

const ApiKey="y5PiVTIueRahDzS6hrt1jw==OE5YCCdz8mXhDQKD";

const options={
    method:"GET",
    headers:{
        "X-Api-Key":ApiKey,
    },
};

const ApiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    try {
        joke.innerHTML="Updating...";
        btn.disabled=true;
        btn.innerHTML="Loading.."
        const response=await fetch(ApiUrl, options);
        const data=await response.json();
        btn.disabled=false;
        btn.innerHTML="Tell me a joke"
        joke.innerHTML=data[0].joke;
    } catch (error) {
        joke.innerHTML="An error happened. Try Again..";
        btn.disabled=false;
        btn.innerHTML="Tell me a joke"
        console.log(error);
    }
}
btn.addEventListener("click", getJoke);