const API_KEY ='https://dummyjson.com/users'
let main = document.querySelector('.main')

// Response - kevotgan malumot 
// request  - ketvotkan malumot 

async function getApi() {
   const response = await fetch(API_KEY)
   const data = await response.json()
   console.log(data);
   Add(data)
}

getApi()

function Add(data) {
    let html = ''
    data.users.map((el) => {
        html += `
        <div>
           <img src=${el.image}/>
           <h1>${el.firstName}</h1>
        </div>
        `
        main.innerHTML = html;

    })
}