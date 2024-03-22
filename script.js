let names = document.querySelectorAll('.names');
let arrowPostion = "up";
let genderValue = "";
let validateAZ = /[a-zA-Z]/
let backTable = document.querySelector('.backTable');
let backToTable = document.querySelector('.backToTable');
let validName = /^[a-zA-Z\s]+$/;
let fDob = document.querySelector ('.fdob');
let sDob = document.querySelector('.sdob');
let searchDob = document.querySelector('.searchDob');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.closeModal');
let filterDob = document.querySelector('.filterDob');
let filter = document.querySelector('.filter')
let gender = document.querySelectorAll('.gender')
let nameField = document.querySelector('.nameField');
let email = document.querySelector('.email');
let validEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/;
let ageValue = document.querySelector('.ageValue');
let dobValue = document.querySelector('.dobValue');
let hobbies = document.querySelectorAll('.hobby');
let hobbyValue = "";
let btn = document.getElementById('btn')
let address = document.getElementById('address')
let states = document.getElementById('states')
let cities = document.getElementById('cities')
let change = document.querySelector('.change')
let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
let tbody = document.querySelector('.tbody');
let sort = document.querySelectorAll('.sort')
let valid = false;
let arr = JSON.parse(localStorage.getItem("Detail")) || [];
let validationEmail = false;
let showMe = 0;
// let showState = 1;
// let showCity = 1;
let validDob = /^(198[0-9]|199[0-9]|200[0-9]|201[0-9]|202[0-4])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
let svalidDob = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(198[0-9]|199[0-9]|200[0-9]|201[0-9]|202[0-4])$/;
let globalIndex;


let allCountry = {
 "Australia": {
    "states": {
      "New South Wales (NSW)": ["Sydney"],
      "Victoria": ["Melbourne"],
      "Queensland": ["Brisbane"],
      "Western Australia": ["Perth"],
      "South Australia": ["Adelaide"],
      "Tasmania": ["Hobart"],
      "Australian Capital Territory (ACT)": ["Canberra"],
      "Northern Territory": ["Darwin"]
    }
  },
  "Germany": {
    "states": {
      "Bavaria": ["Munich"],
      "North Rhine-Westphalia": ["Cologne", "Düsseldorf", "Dortmund", "Essen"],
      "Baden-Württemberg": ["Stuttgart"],
      "Lower Saxony": [],
      "Hesse": ["Frankfurt"],
      "Saxony": [],
      "Rhineland-Palatinate": [],
      "Berlin": ["Berlin"],
      "Brandenburg": []
    }
  },
  "Italy": {
    "states": {
      "Lombardy": ["Milan"],
      "Lazio": ["Rome"],
      "Campania": ["Naples"],
      "Sicily": ["Palermo"],
      "Veneto": ["Venice"],
      "Piedmont": ["Turin"],
      "Emilia-Romagna": ["Bologna"],
      "Apulia": [],
      "Tuscany": ["Florence"]
    }
  },
  "Canada": {
    "states": {
      "Ontario": ["Toronto", "Ottawa"],
      "Quebec": ["Montreal"],
      "British Columbia": ["Vancouver", "Victoria"],
      "Alberta": ["Calgary", "Edmonton"],
      "Manitoba": ["Winnipeg"],
      "Saskatchewan": [],
      "Nova Scotia": ["Halifax"],
      "New Brunswick": [],
      "Prince Edward Island": []
    }
  },
  "Greece": {
    "states": {
      "Attica": ["Athens"],
      "Central Macedonia": ["Thessaloniki"],
      "Crete": ["Heraklion", "Chania"],
      "West Greece": ["Patras"],
      "Thessaly": ["Larissa", "Volos"],
      "Peloponnese": ["Patras"],
      "North Aegean": ["Rhodes"],
      "South Aegean": []
    }
  },
  "Japan": {
    "states": {
      "Tokyo": ["Tokyo"],
      "Osaka": ["Osaka"],
      "Kanagawa": ["Yokohama"],
      "Aichi": ["Nagoya"],
      "Hokkaido": ["Sapporo"],
      "Hyogo": ["Kobe"],
      "Fukuoka": ["Fukuoka"],
      "Saitama": [],
      "Chiba": []
    }
  },
  "Spain": {
    "states": {
      "Andalusia": ["Seville", "Málaga"],
      "Catalonia": ["Barcelona"],
      "Community of Madrid": ["Madrid"],
      "Valencian Community": ["Valencia"],
      "Galicia": ["Vigo"],
      "Castile and León": ["Valladolid"],
      "Basque Country": ["Bilbao"],
      "Canary Islands": ["Las Palmas de Gran Canaria"],
      "Balearic Islands": ["Palma"]
    }
  },
  "United Kingdom": {
    "states": {
      "England": ["London", "Birmingham", "Manchester", "Liverpool", "Bristol"],
      "Scotland": ["Glasgow", "Edinburgh"],
      "Wales": ["Cardiff"],
      "Northern Ireland": ["Belfast"]
    }
  },
  "India": {
    "states": {
      "Uttar Pradesh": ["Lucknow"],
      "Maharashtra": ["Mumbai"],
      "Bihar": ["Patna"],
      "West Bengal": ["Kolkata"],
      "Madhya Pradesh": ["Indore", "Bhopal"],
      "Tamil Nadu": ["Chennai"],
      "Rajasthan": ["Jaipur"],
      "Karnataka": ["Bangalore"],
      "Gujarat": ["Ahmedabad", "Surat"]
    }
  },
  "Switzerland": {
    "states": {
      "Zurich": ["Zurich"],
      "Geneva": ["Geneva"],
      "Vaud": ["Lausanne"],
      "Bern": ["Bern"],
      "Aargau": [],
      "Lucerne": ["Lucerne"],
      "Basel-Stadt": ["Basel"],
      "St. Gallen": ["St. Gallen"],
      "Valais": ["Sion"]
    }
  },
  "Austria": {
    "states": {
      "Vienna": ["Vienna"],
      "Styria": ["Graz"],
      "Upper Austria": ["Linz"],
      "Lower Austria": ["Sankt Pölten"],
      "Tyrol": ["Innsbruck"],
      "Carinthia": ["Klagenfurt"],
      "Salzburg": ["Salzburg"],
      "Vorarlberg": ["Bregenz"],
      "Burgenland": []
    }
  },
  "Brazil": {
    "states": {
      "São Paulo": ["São Paulo"],
      "Rio de Janeiro": ["Rio de Janeiro"],
      "Minas Gerais": ["Belo Horizonte"],
      "Bahia": ["Salvador"],
      "Rio Grande do Sul": ["Porto Alegre"],
      "Paraná": ["Curitiba"],
      "Pernambuco": ["Recife"],
      "Ceará": ["Fortaleza"],
      "Amazonas": ["Manaus"]
    }
  },
  "China": {
    "states": {
      "Guangdong": ["Guangzhou", "Shenzhen"],
      "Shandong": ["Jinan", "Qingdao"],
      "Henan": ["Zhengzhou"],
      "Sichuan": ["Chengdu"],
      "Jiangsu": ["Nanjing", "Suzhou"],
      "Hebei": ["Shijiazhuang", "Tangshan"],
      "Zhejiang": ["Hangzhou"],
      "Hunan": ["Changsha"],
      "Anhui": ["Hefei"]
    }
  },
  "Cuba": {
    "states": {
      "Havana": ["Havana"],
      "Santiago de Cuba": ["Santiago de Cuba"],
      "Camagüey": ["Camagüey"],
      "Holguín": ["Holguín"],
      "Guantánamo": ["Guantánamo"],
      "Matanzas": [],
      "Pinar del Río": [],
      "Cienfuegos": [],
      "Las Tunas": ["Las Tunas"]
    }
  }
}
  const listFilterDob = (dobArr)=>{
    console.log(dobArr)
    
    tbody.innerHTML = "";
    for(let item of dobArr){
        let tr = document.createElement('tr');
        tr.style.position = "relative";
        tr.innerHTML = ` 
        <td>${item.fname}</td>
       <td>${item.lname}</td>
       <td>${item.email}</td>
        <td>${item.age}</td>
       <td>${item.dob}</td>
       <td>${item.hobby}</td>
       <td>${item.address}</td>
       <td>${item.state}</td>
       <td>${item.city}</td>
       <td>${item.gender}</td><span  class="editButton position"><img style="width: 20px;margin-left:4px;" src="edit.png"></span><span  class="deleteButton dposition"><img style="width: 20px;margin-left:4px;" src="delete.png"></span>
       
      `
      tbody.append(tr);
      tr.querySelector('.editButton').addEventListener('click', ()=>{
        editDetail(item)
     })
   tr.querySelector('.deleteButton').addEventListener('click', ()=>{
        deleteDetail(item)
     })
      
    }
    backTable.classList.remove('back');
    backToTable.addEventListener('click',()=>{
      displayData(arr);
      backTable.classList.add('back');
    })
    
  }
 searchDob.addEventListener('click', (e)=>{
  if(!(validDob.test(fDob.value))){
             alert("Invalid Credentials");
  }else if(!(validDob.test(sDob.value))){
    alert("Invalid Credentials");
  }
  else{

  
    let index = [];
    let dummy = [];
    let value;
    let fdummy = arr.map((elem, index)=>{return (new Date(elem.dob) >= new Date(fDob.value.trim()))?index:-1}).filter(item=>item>=0);
    let sdummy = arr.map((elem, index)=>{return (new Date(elem.dob) <= new Date(sDob.value.trim()))?index:-1}).filter(item=>item>=0);
    for(let i in fdummy){
      value = fdummy.map((elem)=>{return (elem === sdummy[i])?elem:-1}).filter((elem)=>{return elem>=0});
      value[0]>=0?index.push(value[0]):'';
    }
    for(let item of index){
      dummy.push(arr[item]);
    }
    listFilterDob(dummy);
    fDob.value = "";
    sDob.value = "";
    modal.style.display = "none";
  }
 })
 
Array.from(names).forEach((elem)=>{
    elem.addEventListener('change', (e)=>{
        if(e.target.value.length > 10){
          alert("Maximum length is not greater than 10")
            e.target.value = "";
              valid = true;
        }else if(e.target.value.length < 3){
          
          alert("Maximum length is not less than 3")
          e.target.value = "";
              valid = true;
        }else if(e.target.value.includes(" ")){
          alert("The Feild contains space")
          e.target.value = "";
              valid = true;
        }
        else if(!(validName.test(e.target.value))){
          alert("The Feild contains number")
          e.target.value = "";
              valid = true;
        }
        else if(fname.value === lname.value){
          alert("The First Name and Last Name are Same!");
          fname.value = "";
          lname.value = "";
          valid = true;
        }
        else{
          valid = false;
        }
    })
    
})
const sortingArray = (sortBy)=>{
  
  let p ;
  let dummy = arr;

  if(sortBy === "accending" || sortBy === "decending"){
    let c =[]
  let value = dummy.map((elem)=>{
    return (elem.fname);
  }).sort()
  
  let b =0;
  let index;
  for(let i in dummy){
    
     p = dummy.map((elem, index)=>{return (elem.fname === value[i])?index:-1}).filter((elem)=>{return elem>=0;})
     index = p.length>1?p[b]:p[0];
     b = p.length>1?b+1:0;
     c.push(dummy[index])
     

  }
  
  
  if(sortBy === "decending"){
    
    arr = c.reverse();
     
    }
  else{
   
    arr = c;
  }
  displayData(arr);
}else if(sortBy === "laccending" || sortBy === "ldecending"){
  let value = dummy.map((elem)=>{
    return (elem.lname);
  }).sort()
  let c = [];
  let index;
  let b = 0;
  for(let i in dummy){
    
  p =  dummy.map((elem, index)=>{
      return  (elem.lname == value[i])?index:-1
   }).filter((elem)=>{return elem>=0})
   index = p.length>1?p[b]:p[0];
   b = p.length>1?b+1:0;
   c.push(dummy[index])
   
  }
  
  if(sortBy === "ldecending"){
    
    arr = c.reverse();
     
    }
  else{
   
    arr = c;
  }
  displayData(arr);
}else if(sortBy === "eaccending" || sortBy === "edecending"){
  let value = dummy.map((elem)=>{
    return (elem.email);
  }).sort()
  let c = [];
  for(let i in dummy){
   
  p =  dummy.map((elem, index)=>{
      return  (elem.email == value[i])?index:-1
   }).filter((elem)=>{return elem>=0})
   c.push(dummy[p])
   
  }
  if(sortBy === "edecending"){
    
    arr = c.reverse();
     
    }
  else{
   
    arr = c;
  }
  displayData(arr);
}else if(sortBy === "daccending"){
  
  let value = dummy.map((elem)=>{
    return new Date(elem.dob);
  }).sort((a, b)=>{
    let first = new Date()- a;
    let second = new Date() - b;
    return (first - second);

  }).reverse().map((value)=>{
    
    return dates = `${value.getFullYear()}-${(value.getMonth()+1).toString().padStart(2, 0)}-${value.getDate().toString().padStart(2, 0)}`
  })
   
  let c = [];
  let index;
  for(let i in dummy){
   
  p =  dummy.map((elem, index)=>{
      return  (elem.dob == value[i])?index:-1
   }).filter((elem)=>{return elem>=0})
   
   index = p.length>1?p[b]:p[0];
   b = p.length>1?b+1:0;
   c.push(dummy[index])
  }
  
  arr = c;
  displayData(arr);
}else{
  let searchInput = filter.value;
  let demo = arr;
   let c = [];
   let index = [];
   let value;
     for(let i in dummy){
      value = Object.values(dummy[i]).map((elem)=>{
         return (elem.toLowerCase().includes(searchInput.toLowerCase()))?i:-1
      }).filter((item)=>{return item>=0;}).find((elem)=>{return elem>=0});
      value>=0?index.push(value):"";
      
     }
     for(let item of index){
      c.push(arr[item]);
 }
     console.log(c, index)
     filter.value = "";
     listFilterDob(c);

}
  
  
}
Array.from(sort).forEach((elem)=>{
     elem.addEventListener('click', ()=>{
      sortingArray(elem.value)
     })
       
})

Array.from(gender).forEach((elem)=>{
   elem.addEventListener('click', (e)=>{
    genderValue = e.target.value;
   })
})
Array.from(hobbies).forEach((elem)=>{

  elem.addEventListener('click', (e)=>{
    if(e.target.checked){
      
      hobbyValue += ` ${e.target.value}`;
      console.log(hobbyValue)
    }else{
      
        
      //   console.log(hobbyValue.slice(hobbyValue.indexOf(e.target.value),hobbyValue.indexOf(e.target.value)+ e.target.value.length));
      //  console.log(hobbyValue.replace(e.target.value, ''))

       hobbyValue = hobbyValue.replace(e.target.value, '');
       if(!validateAZ.test(hobbyValue)){
        alert("The Hobby Field are not set be empty!")
       }
       

    }
  })
})
ageValue.addEventListener('change', (e)=>{
    if(e.target.value.length > 2 || Math.sign(e.target.value) === -1 || e.target.value == 0){
        alert("Invalid Age")
        e.target.value = "";
        valid = true;
    }else{
      valid = false;
    }
})
dobValue.addEventListener('change', (e)=>{
    if(!(validDob.test(e.target.value)) || e.target.value == ""){
        alert("Invalid Date of Birth")
        e.target.value = "";
        valid = true;
    }else{
      valid = false;
    }
})
email.addEventListener('change', (e)=>{
    if(!(validEmail.test(e.target.value)) || e.target.value == ""){
        alert("Invalid Email")
        e.target.value = "";
        valid = true;
    }else if(e.target.value.includes(" ")){
      alert("Email contains space!")
      valid = true;
    }
    else{
      valid = false;
    }
})
const changeCity = (cityValue)=>{
  if(cityValue == "Select City"){
   cities.innerHTML = "<option value='Select City'>Select City</option>"
  }
  else if(cityValue == "Show City"){
   let all = "";
   for(let item of Object.values(allCountry[address.value]["states"][states.value])){
       all += `<option  value="${item}">${item}</option>`
   }
   cities.innerHTML = all;
  }else{
   cities.innerHTML = `<option value="${cityValue}">${cityValue}</option>`;
   showCity = 1;
  }
}
const changeState = (stateValue)=>{
   if(stateValue == "Select State"){
    states.innerHTML = "<option value='Select State'>Select State</option>"
    console.log(states.value)
   }
   else if(stateValue == "Show State"){
    console.log("run state")
    let all = "";
    for(let item of Object.keys(allCountry[address.value]["states"])){
        all += `<option  value="${item}">${item}</option>`
    }
    states.innerHTML = all;
   }else{
    states.innerHTML = `<option value="${stateValue}">${stateValue}</option>`;
    showState = 1;
   }
}
const changeAdd = (addressValue)=>{
  if(addressValue == "Select Country"){
     
    
    address.innerHTML = "<option value='Select Country'>Select Country</option>" 
    console.log(address.value)
   }  
    else if(addressValue == "Show Country"){
      let all = "";
      for(let item of Object.keys(allCountry)){
          all += `<option  value="${item}">${item}</option>`
      }
      address.innerHTML = all;
 }
  else{
    address.innerHTML = `<option value="${addressValue}">${addressValue}</option>`;
    // showMe = 1;
    

  }


}
changeAdd("Select Country");
changeState("Select State");
changeCity("Select City");
 address.addEventListener('change', ()=>{
    console.log("runssssss")
   if(showMe >= 1){
    //  changeAdd("Show Country")
    
    changeState("Show State");
    changeCity("Show City");

  }
 })
 states.addEventListener('change', ()=>{
  if(showMe>=1){

    changeCity("Show City");
  }
 })
 address.addEventListener('click', (e)=>{
  console.log(address.value.includes("Select Country"))
   if(address.value.includes("Select Country")){

  changeAdd("Show Country");
  // changeState("Show State");
  //  changeCity("Show City");
   }
   else if(showMe == 1){
    changeAdd("Show Country");
  showMe += 1;
   }
});
 states.addEventListener('click', (e)=>{
   if(states.value.includes("Select State")){
    console.log("run stae please")
    // showState += 1;
    // console.log("run")
  changeState("Show State");
  // changeCity("Show City");
   }
});
 cities.addEventListener('click', (e)=>{
   if(cities.value.includes("Select City")){
    showMe += 1;
    
  changeCity("Show City");
   }
});
 

const editDetail = (item)=>{
  let p = arr.map((elem, index)=>{
    return (elem.email === item.email)?index:-1;
  })
  let index = p.filter((value)=>{return value>=0});
  
   fname.value =  arr[index].fname 
    lname.value =  arr[index].lname 
    email.value =  arr[index].email 
 address.value =  arr[index].address 
   genderValue = arr[index].gender;
   hobbyValue = arr[index].hobby;
   dobValue.value = arr[index].dob;
   ageValue.value = arr[index].age;
   changeAdd(arr[index].address);
   changeState(arr[index].state)
   changeCity(arr[index].city);
   showMe = 1;
   falseAllGender("true", arr[index].gender);
   falseAllHobby("true", arr[index].hobby);
   validationEmail = true;
   globalIndex = index;
   backTable.classList.add('back');

}
const deleteDetail = (item)=>{

  let p = arr.map((elem, index)=>{
    return (elem.email === item.email)?index:-1;
  })
  let index = p.filter((value)=>{return value>=0});
  arr.splice(index, 1);
  displayData(arr);
  backTable.classList.add('back');
}
const displayData = (arr)=>{
  
    localStorage.setItem("Detail", JSON.stringify(arr));
    tbody.innerHTML = "";
    for(let item of arr){
        let tr = document.createElement('tr');
        tr.style.position = "relative";
        tr.innerHTML = ` 
        <td>${item.fname}</td>
       <td>${item.lname}</td>
       <td>${item.email}</td>
        <td>${item.age}</td>
       <td>${item.dob}</td>
       <td>${item.hobby}</td>
       <td>${item.address}</td>
       <td>${item.state}</td>
       <td>${item.city}</td>
       <td>${item.gender}</td><span  class="editButton position"><img style="width: 20px;margin-left:4px;" src="edit.png"></span><span  class="deleteButton dposition"><img style="width: 20px;margin-left:4px;" src="delete.png"></span>
       
      `
      tbody.append(tr);
      tr.querySelector('.editButton').addEventListener('click', ()=>{
           editDetail(item)
        })
      tr.querySelector('.deleteButton').addEventListener('click', ()=>{
           deleteDetail(item)
        })
      
    }
    
    
}
displayData(arr);
let allEmails = arr.map((elem)=>{return elem.email;})

filterDob.addEventListener('click', ()=>{
  
  modal.style.display = "block";
})
closeModal.addEventListener('click', ()=>{
  
  modal.style.display = "none";
})

const falseAllHobby = (work, detail)=>{
  if(work == "false"){
  Array.from(hobbies).forEach((elem)=>{
    elem.checked = false;
  })
}else{
  Array.from(hobbies).forEach((elem)=>{
    elem.checked = false;
    console.log(elem.value, detail, )
     if(detail.split(' ').includes(elem.value)){
          elem.checked = true;
     }
  })
}
}
const falseAllGender = (work, detail)=>{
  if(work == "false"){
  Array.from(gender).forEach((elem)=>{
   elem.checked = false;
 })
}else{
  Array.from(gender).forEach((elem)=>{
     if(elem.value == detail){
          elem.checked = true;
     }
  })
}
}
const editEmail = ()=>{
  if(validationEmail){
     return false;
  }else{
    allEmails.find((elem)=>{return (elem===email.value.trim())?true:false})
    return true;
  }
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(address.value, cities.value, states.value)
    showMe = 0;
    if(valid){
        alert("Invalid Credentials! Please try again!");
        fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
        changeAdd("Select Country");
        changeState("Select State");
        changeCity("Select City");

    }
     else if(address.value.includes("Select Country") || cities.value.includes("Select City") ||states.value.includes("Select State")){
           alert("Please Insert Your Address!");fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
           changeAdd("Select Country");
        changeState("Select State");
        changeCity("Select City");
     }
    else if(names.value == "" ||email.value == "" ||ageValue.value == "" ||dobValue.value == "" || !validateAZ.test(hobbyValue) || genderValue == ""){
   alert("Invalid Credentials!");
   fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
   changeAdd("Select Country");
changeState("Select State");
changeCity("Select City");
        }
     else if(!validationEmail){
      let validation =  allEmails.find((elem)=>{return (elem===email.value.trim())?true:false})
      if(validation){
        alert("The Email are already on list!");
        fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
        changeAdd("Select Country");
        changeState("Select State");
        changeCity("Select City");
      }
       
  else{
      alert("Successfully submited !")
      arr.push({fname: fname.value.trim(), lname: lname.value.trim(), email: email.value.trim(), address: address.value.trim(), state: states.value.trim(), city: cities.value.trim(), gender: genderValue.trim(), hobby: hobbyValue.trim(), dob: dobValue.value.trim(), age: ageValue.value.trim()});
  
      displayData(arr)
      fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
      changeAdd("Select Country");
      changeState("Select State");
      changeCity("Select City");
  }
     }else{
      //  console.log(arr[globalIndex]);
       validationEmail = false;
       let filterArray = arr.map((elem)=>{return !(elem.email === arr[globalIndex].email)?elem:''}).filter((elem)=>{return elem!=''});
       if(filterArray.some((elem)=>{return elem.email == email.value})){
        alert("The Email are already on list!");
        fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
        changeAdd("Select Country");
changeState("Select State");
changeCity("Select City");
       }
       
  else{
    console.log(hobbyValue);
      alert("Successfully submited !")
      arr[globalIndex].fname  = fname.value.trim()   
      arr[globalIndex].lname  = lname.value.trim()   
      arr[globalIndex].email  = email.value.trim()   
      arr[globalIndex].address = address.value.trim() 
      arr[globalIndex].gender  =   genderValue.trim() 
      arr[globalIndex].hobby   =  hobbyValue;  
      arr[globalIndex].dob    =  dobValue.value.trim()  
      arr[globalIndex].age    =    ageValue.value.trim()  
      arr[globalIndex].state = states.value.trim() 
      arr[globalIndex].city =  cities.value.trim()
  
      displayData(arr)
      fname.value = '';lname.value= '';  email.value= ''; ageValue.value ="" ;dobValue.value ="" ;falseAllHobby("false");falseAllGender("false");hobbyValue = "";genderValue="";
      changeAdd("Select Country");
      changeState("Select State");
      changeCity("Select City");;
  }
     }
   

})


