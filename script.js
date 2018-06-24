const carname = document.querySelector('.carname');

const caryear = document.querySelector('.caryear');

const carcolor = document.querySelector('.carcolor');

const caradd = document.querySelector('.caradd');

let carlist = [];

if(window.localStorage.data !== undefined){

    carlist = carlist.concat(JSON.parse(window.localStorage.data))
}

caradd.addEventListener('click',() =>{

    carlist.push({

        name: carname.value,

        year: caryear.value,

        color: carcolor.value
    })
    
    carname.value = '';
})

 
