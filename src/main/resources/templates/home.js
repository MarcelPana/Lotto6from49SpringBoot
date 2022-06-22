let dummyTitle = "hello world";
console.log(dummyTitle);

const newArray = [1,2,3,"marcel"];
newArray.forEach(element => {console.log(element + "plus" + 5)});


newArray.forEach((element, index) => {
    console.log(element + 5)
    console.log("element:", element, "index:", index)
});

// de sters, este doar de demo

let getNumbers = function (){              // se face call la metoda panarame din backend si returneaza info din virgine
    let NumbersList = http.get('/api/panarame')
}


const numbers =[                        // informatie ce ar trebui sa vina din backEnd
    {nume: 'Gina-', prenume: 'Alina scris in JS si venit din BE' },
    {nume: 'Veta-', prenume: 'Georgeta scris in JS si venit din BE' }
]

let listaCreataInHtml = document.getElementById("gina-virgina") // atribuim field ului listaCreataInHtml ul-ul din pag html


function displayNumbers(){
numbers.forEach(element => {
    var newChildVariabilaNoua = document.createElement("li");
    newChildVariabilaNoua.innerHTML = element.nume + element.prenume;
    caremaieVirgina.appendChild(newChildVariabilaNoua)
    caremaieVirgina.classList.add('gina-virgina')  // ii adaugam style ul din clasei gina-virgina din css
})
}
 displayNumbers();


// de sters, este doar de demo, pana aici

    var addNumber = function (){
    var newNumber = document.getElementById("panaram-name").value;
    var newNumber1 = document.getElementById("panaram-surename").value;
    console.log(newNumber, newNumber1);  // asta trebuie sters sa nu ramana in cod. este doar pentru a vedea in consola daca functctioneaza
    var newNumberObject = {
        nume: newNumber, prenume: newNumber1
    }
    numbers.push(newNumberObject);
    var newNumberNew = document.createElement("li");
    newNumberNew.innerHTML = newNumberObject.nume + " " + newNumberObject.prenume;
        caremaieVirgina.appendChild(newNumberNew)

        document.getElementById("panaram-name").value = "";
        document.getElementById("panaram-surename").value = "";


    }

