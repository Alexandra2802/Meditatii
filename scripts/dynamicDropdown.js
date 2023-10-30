let citiesAndCounties=[]
let counties=[]

const mainMenu=document.getElementById('main-menu')
const subMenu=document.getElementById('sub-menu')

fetch('./ro.json')
    .then((response) => response.json())
    .then(
        (data) => {
            data.forEach(d => {
                if(!counties.includes(d.admin_name))
                    counties.push(d.admin_name)
                citiesAndCounties.push({county:d.admin_name,city:d.city})
            })

            //add options for the main select
            counties.forEach((c) => {
                let option = document.createElement('option')
                option.innerText = c
                option.value = c
                mainMenu.appendChild(option)
            })
            
            mainMenu.addEventListener('change', function(){
                let citiesInSelectedCounty=[]
                citiesAndCounties.forEach(el => {
                    if(el.county === this.value)
                        citiesInSelectedCounty.push(el.city)
                })
            
                while(subMenu.options.length > 0){
                    subMenu.options.remove(0)
                }
            
                // convert the selected object into array and create options for each array element
                Array.from(citiesInSelectedCounty).forEach(function(el){
                    let option=document.createElement('option')
                    option.value=el
                    option.innerText=el
                    subMenu.appendChild(option)
                })
            })

        }
        
    );








