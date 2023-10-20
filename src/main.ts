import './style.css'
import dogs from './dogs.json';

document.addEventListener('DOMContentLoaded',()=>{
  let kutyak=dogs;
  
  for(var i = 0; i < kutyak.length; i++){
    let tr=document.createElement("tr");
    let td=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let tbody = document.getElementById('tbody');
    tbody!.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td.textContent = kutyak[i].id.toString();
    td2.textContent = kutyak[i].nev.toString();
    td3.textContent = kutyak[i].eletkor.toString();
    td4.textContent = kutyak[i].fajta.toString();
    td5.textContent = kutyak[i].gazda_neve.toString();
    let gomb=document.createElement('button');
    gomb.textContent="Szerkesztés";
    tr.appendChild(gomb) 
    gomb.addEventListener('click',()=>{
     
        td.textContent="";
        td2.textContent="";
        td3.textContent="";
        td4.textContent="";
        td5.textContent="";

        let id=document.createElement('input');
        id.type="number";
        td.appendChild(id);
        
        let nev=document.createElement('input');
        nev.type="text";
        td2.appendChild(nev);
        
        let eletkor=document.createElement('input');
        eletkor.type="number";
        td3.appendChild(eletkor);
        
        let fajta	=document.createElement('input');
        td4.appendChild(fajta);
        fajta.type="text";
        
        let gazda_neve=document.createElement('input');
        td5.appendChild(gazda_neve);
        gazda_neve.type="text";
        
        gomb.textContent="Szerkesztés";
        
        let gombMentes=document.createElement('button');
        gomb.remove();
        tr.appendChild(gombMentes);
        gombMentes.textContent="Mentés"
        gombMentes.addEventListener('click',()=>{
          
          td.textContent = id.value;
          td2.textContent = nev.value;
          td3.textContent = eletkor.value;         
          td4.textContent = fajta.value;
          td5.textContent = gazda_neve.value;
          gombMentes.remove();
          tr.appendChild(gomb)
          
        })
      })
    



  }
});





