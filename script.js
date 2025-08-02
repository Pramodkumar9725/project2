let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    console.log(fact);
})

async function getFacts(){
    try{
        let res = await axios.get(url);
        return console.log(res.data.fact);
    } catch (e) {
        console.log("error - ", e);
        return "No fact found";
    }
}

