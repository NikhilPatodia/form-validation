let names = document.querySelectorAll('.names');
let nameField = document.querySelector('.nameField');
let hobbie = document.querySelector('.hobbie');
let email = document.querySelector('.email');
let validEmail = /^([a-z0-9]+@[a-z0-9]{1,6}\.[a-z]{1,4})/g;
let ageValue = document.querySelector('.ageValue');
let dobValue = document.querySelector('.dobValue');
let hobbieValue = document.querySelector('.hobbieValue');
let btn = document.getElementById('btn')
let address = document.getElementById('address')
let states = document.getElementById('states')
let cities = document.getElementById('cities')
let change = document.querySelector('.change')
let changeCity = document.querySelector('.changeCity')
let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let tbody = document.querySelector('.tbody');
let valid = false;
let arr = JSON.parse(localStorage.getItem("Detail")) || [];;
let id = Number.parseInt(localStorage.getItem("id")) || 0;

let dob = /^(?:0[1-9]|[1-2][0-9]|3[0-1])\/(?:0[1-9]|1[0-2])\/(198[0-9]|199[0-9]|200[0-9]|201[0-9]|202[0-4])$/g
let allCountry = {
    "Australia": {
      "states": ["New South Wales (NSW)", "Victoria", "Queensland", "Western Australia", "South Australia", "Tasmania", "Australian Capital Territory (ACT)", "Northern Territory"],
      "cities": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Hobart", "Canberra", "Darwin"]
    },
    "Germany": {
      "states": ["Bavaria", "North Rhine-Westphalia", "Baden-Württemberg", "Lower Saxony", "Hesse", "Saxony", "Rhineland-Palatinate", "Berlin", "Brandenburg"],
      "cities": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen"]
    },
    "Italy": {
      "states": ["Lombardy", "Lazio", "Campania", "Sicily", "Veneto", "Piedmont", "Emilia-Romagna", "Apulia", "Tuscany"],
      "cities": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Venice"]
    },
    "Canada": {
      "states": ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick", "Prince Edward Island"],
      "cities": ["Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Halifax", "Victoria"]
    },
    "Greece": {
      "states": ["Attica", "Central Macedonia", "Crete", "West Greece", "Thessaly", "Peloponnese", "North Aegean", "South Aegean"],
      "cities": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Rhodes", "Ioannina", "Chania"]
    },
    "Japan": {
      "states": ["Tokyo", "Osaka", "Kanagawa", "Aichi", "Hokkaido", "Hyogo", "Fukuoka", "Saitama", "Chiba"],
      "cities": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kobe", "Kyoto", "Fukuoka", "Kawasaki"]
    },
    "Spain": {
      "states": ["Andalusia", "Catalonia", "Community of Madrid", "Valencian Community", "Galicia", "Castile and León", "Basque Country", "Canary Islands", "Balearic Islands"],
      "cities": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas de Gran Canaria"]
    },
    "United Kingdom": {
      "states": ["England", "Scotland", "Wales", "Northern Ireland"],
      "cities": ["London", "Birmingham", "Manchester", "Glasgow", "Edinburgh", "Liverpool", "Belfast", "Cardiff", "Bristol"]
    },
    "India": {
      "states": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal", "Madhya Pradesh", "Tamil Nadu", "Rajasthan", "Karnataka", "Gujarat"],
      "cities": ["Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Surat"]
    },
    "Switzerland": {
      "states": ["Zurich", "Geneva", "Vaud", "Bern", "Aargau", "Lucerne", "Basel-Stadt", "St. Gallen", "Valais"],
      "cities": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano"]
    },
    "Austria": {
      "states": ["Vienna", "Styria", "Upper Austria", "Lower Austria", "Tyrol", "Carinthia", "Salzburg", "Vorarlberg", "Burgenland"],
      "cities": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten"]
    },
    "Brazil": {
      "states": ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Rio Grande do Sul", "Paraná", "Pernambuco", "Ceará", "Amazonas"],
      "cities": ["São Paulo", "Rio de Janeiro", "Salvador", "Brasília", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife"]
    },
    "China": {
      "states": ["Guangdong", "Shandong", "Henan", "Sichuan", "Jiangsu", "Hebei", "Zhejiang", "Hunan", "Anhui"],
      "cities": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Tianjin", "Chongqing", "Hangzhou", "Chengdu", "Nanjing"]
    },
    "Cuba": {
      "states": ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo", "Matanzas", "Pinar del Río", "Cienfuegos", "Las Tunas"],
      "cities": ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo", "Santa Clara", "Las Tunas", "Bayamo", "Cienfuegos"]
    },
    "France": {
      "states": ["Île-de-France", "Auvergne-Rhône-Alpes", "Provence-Alpes-Côte d'Azur", "Occitanie", "Nouvelle-Aquitaine", "Hauts-de-France", "Grand Est", "Pays de la Loire", "Brittany"],
      "cities": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux"]
    },
    "Ireland": {
        "states": ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Kilkenny", "Wexford", "Meath", "Mayo"],
        "cities": [
          "Dublin",
          "Cork",
          "Galway",
          "Limerick",
          "Waterford",
          "Drogheda",
          "Dundalk",
          "Bray",
          "Swords"
        ]},  
        "Israel":{
        "states": ["Tel Aviv District", "Jerusalem District", "Central District", "Haifa District", "Northern District", "Southern District"],
        "cities": [
          "Tel Aviv", 
          "Jerusalem", 
          "Haifa", 
          "Rishon LeZion", 
          "Petah Tikva", 
          "Ashdod", 
          "Netanya", 
          "Beer Sheva", 
          "Holon", 
        ]
      },
      "Russia": {
        "states": ["Moscow", "Saint Petersburg", "Novosibirsk Oblast", "Moscow Oblast", "Sverdlovsk Oblast", "Krasnodar Krai", "Tatarstan", "Rostov Oblast", "Bashkortostan"],
        "cities": [
          "Moscow",
          "Saint Petersburg",
          "Novosibirsk",
          "Yekaterinburg",
          "Nizhny Novgorod",
          "Kazan",
          "Chelyabin",
          "Omsk",
          "Samara" 
        ]
      },
      "Afghanistan": {
        "states": ["Kabul", "Herat", "Kandahar", "Balkh", "Nangarhar", "Kunduz", "Jawzjan", "Bamyan", "Paktia"],
        "cities": [
          "Kabul" ,
          "Herat" ,
          "Kandahar" ,
          "Mazar-i-Sharif" ,
          "Jalalabad" ,
          "Kunduz" ,
          "Lashkargah" ,
          "Taloqan" ,
          "Puli Khumri" 
        ]
      }
    }
  console.log(allCountry, typeof allCountry)
Array.from(names).forEach((elem)=>{
    elem.addEventListener('change', (e)=>{
        if(e.target.value.length > 10){
              let span = document.createElement('span');
              span.classList.add('red');
              span.innerHTML = "The max lenght is only 10 characters"; 
              nameField.append(span)
              valid = true;
        }else if(e.target.value.length < 3){
            let span = document.createElement('span');
              span.classList.add('red');
              span.innerHTML = "The max lenght is less than 3 characters"; 
              nameField.append(span)
              valid = true;
        }
    })
})
ageValue.addEventListener('change', (e)=>{
    if(e.target.value.length > 2 || Math.sign(e.target.value) === -1 || e.target.value == 0){
        alert("Invalid Age")
        valid = true;
    }
})
dobValue.addEventListener('change', (e)=>{
    if(!(dob.test(e.target.value)) || e.target.value == ""){
        alert("Invalid Date of Birth")
        valid = true;
    }
})
hobbieValue.addEventListener('change', (e)=>{
    if(e.target.value.length > 20){
        let span = document.createElement('span');
        span.classList.add('red');
        span.innerHTML = "The max lenght is only 20 characters"; 
        hobbie.append(span)
        valid = true;
  }

})

email.addEventListener('change', (e)=>{
    if(!(validEmail.test(e.target.value)) || e.target.value == ""){
        alert("Invalid Email")
        valid = true;
    }
})
const changeAdd = ()=>{

    
    let txt = "";
    for(let item of allCountry[address.value].states){
         txt += `<option  value="${item}">${item}</option>`
    }
    states.innerHTML = txt;
    let city = ""
    for(let item of allCountry[address.value].cities){
        city += `<option  value="${item}">${item}</option>`
   }
   cities.innerHTML = city;
  
}
changeAdd()
address.addEventListener('change', (e)=>{
    
    changeAdd()

})
const editDetail = (item)=>{
   console.log(item)
    let p = arr.findIndex((elem)=>{
      
        if(elem.fname == item.fname && elem.id == item.id){
            return (elem.fname == item.fname)
        }
        else if(elem.email == item.email && elem.id == item.id){
            return (elem.email == item.email)
        }
        else if(elem.lname == item.lname && elem.id == item.id){
            return (elem.lname == item.lname)
        }
        else if(elem.city == item.city && elem.id == item.id){
            return (elem.city == item.city)
        }
        else if(elem.address == item.address && elem.id == item.id){
            return (elem.address == item.address)
        }
        else if(elem.state == item.state && elem.id == item.id){
            return (elem.state == item.state)
        }
    })
   console.log(arr[p])
   
}
const displayData = (arr)=>{
    localStorage.setItem("Detail", JSON.stringify(arr));
    
    for(let item of arr){
        let tr = document.createElement('tr')
        tr.innerHTML = ` 
        <td>${item.fname}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
       <td>${item.lname}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
       <td>${item.email}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
        <td>${item.address}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
       <td>${item.state}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
       <td>${item.city}<span class="editButton"><img style="width: 20px;margin-left:4px;" src="edit.png"> </span></td>
     
      `
      tbody.append(tr);
      Array.from(document.querySelectorAll('.editButton')).forEach((elem)=>{
        
        elem.addEventListener('click', ()=>{
            console.log(elem)
            editDetail(item)
        })
      })
    }
    
    
}
displayData(arr);
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(valid){
        alert("Invalid Credentials! Please try again!");
    }else if(names.value == "" ||hobbie.value == "" ||email.value == "" ||ageValue.value == "" ||dobValue.value == "" ||hobbieValue.value == ""){
   alert("Invalid Credentials!")
        }
else{
    alert("Successfully submited !")
    id += 1;
    id = id.toString()
    localStorage.setItem("id", id)
    arr.push({id: id, fname: fname.value, lname: lname.value, email: email.value, address: address.value, state: states.value, city: cities.value});
    displayData(arr)
}

})