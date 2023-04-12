const input = document.getElementById("input");
const card = document.querySelectorAll (".card");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const barchasi = document.getElementById("barchasi");
const goshtli = document.getElementById("goshtli");
const pishloqli = document.getElementById("pishloqli");
const qoziqorinli = document.getElementById("qoziqorinli");
const achchiq = document.getElementById("achchiq");
const pitsaTuri = document.getElementById("pitsa-turi")


// card.forEach(card => card.addEventListener('click', openModal()));


function openModal() {
  modal.style.display = 'flex';
}

modalClose.addEventListener("click", function(){
  modal.style.display = "none";
})

modal.addEventListener("click", function(e){
  if(e.target == modal){
  modal.style.display = "none";
  }
})





const urlBarchasi = ' http://localhost:7777/barcha-pitsalar';
function render(){
fetch(urlBarchasi)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
}

fetch(urlBarchasi)
.then(res =>res.json())
.then(title => {
  console.log(title);  


  input.addEventListener("input", () => {
    let sortedProducts = title.filter((v) =>
      v.title.toLowerCase().includes(input.value.toLowerCase())
    );
    render(sortedProducts);
  });
})
barchasi.style.backgroundColor = "#282828";
barchasi.style.color = "white";
window.open(barchasi)

barchasi.addEventListener("click", function(){
  fetch(urlBarchasi)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
barchasi.style.backgroundColor = "#282828";
barchasi.style.color = "white";
pishloqli.style.backgroundColor = "#f9f9f9";
pishloqli.style.color = "#232323";
goshtli.style.backgroundColor = "#f9f9f9";
goshtli.style.color = "#232323";
qoziqorinli.style.backgroundColor = "#f9f9f9";
qoziqorinli.style.color = "#232323";
achchiq.style.backgroundColor = "#f9f9f9";
achchiq.style.color = "#232323";
pitsaTuri.textContent = "Barcha pitsalar";

}
)


var urlPishloqli = "http://localhost:7777/pishloqli"
pishloqli.addEventListener("click", function(){
  fetch(urlPishloqli)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
pishloqli.style.backgroundColor = "#282828";
pishloqli.style.color = "white";
barchasi.style.backgroundColor = "#f9f9f9";
barchasi.style.color = "#232323";
goshtli.style.backgroundColor = "#f9f9f9";
goshtli.style.color = "#232323";
qoziqorinli.style.backgroundColor = "#f9f9f9";
qoziqorinli.style.color = "#232323";
achchiq.style.backgroundColor = "#f9f9f9";
achchiq.style.color = "#232323";
pitsaTuri.textContent = "Pishloqli pitsalar";
}
)


const urlGoshtli = "http://localhost:7777/goshtli"
goshtli.addEventListener("click", function(){
  fetch(urlGoshtli)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
goshtli.style.backgroundColor = "#282828";
goshtli.style.color = "white";
barchasi.style.backgroundColor = "#f9f9f9";
barchasi.style.color = "#232323";
qoziqorinli.style.backgroundColor = "#f9f9f9";
qoziqorinli.style.color = "#232323";
pishloqli.style.backgroundColor = "#f9f9f9";
pishloqli.style.color = "#232323";
achchiq.style.backgroundColor = "#f9f9f9";
achchiq.style.color = "#232323";
pitsaTuri.textContent = "Go'shtli pitsalar";
}
)


const urlQoziqorinli = "http://localhost:7777/qoziqorinli"
qoziqorinli.addEventListener("click", function(){
  fetch(urlQoziqorinli)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
qoziqorinli.style.backgroundColor = "#282828";
qoziqorinli.style.color = "white"
barchasi.style.backgroundColor = "#f9f9f9";
barchasi.style.color = "#232323";
pishloqli.style.backgroundColor = "#f9f9f9";
pishloqli.style.color = "#232323";
achchiq.style.backgroundColor = "#f9f9f9";
achchiq.style.color = "#232323";
goshtli.style.backgroundColor = "#f9f9f9";
goshtli.style.color = "#232323";
pitsaTuri.textContent = "Qo'ziqorinli pitsalar";
}
)


const urlAchhiq = "http://localhost:7777/achchiq"
achchiq.addEventListener("click", function(){
  fetch(urlAchhiq)
.then(response => response.json())
.then(data => {
  const cards = document.getElementsByClassName('cards')[0];
  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div>
      <div class="card-img-container">
        <img class="card-img" src="${item.image}" alt="img" />
        </div>
        <h4 class="card-h4">${item.title}</h4>
        <p class="card-p">
          ${item.description}
        </p>
        <div class="prise">
          <p><span class="price-p">${item.price}</span></p>
        </div>
        <button class="openmod" onclick="openModal()"></button>
      </div>
    `;
    cards.appendChild(card);
  });
})
.catch(error => console.error(error));
achchiq.style.backgroundColor = "#282828";
achchiq.style.color = "white"
barchasi.style.backgroundColor = "#f9f9f9";
barchasi.style.color = "#232323";
qoziqorinli.style.backgroundColor = "#f9f9f9";
qoziqorinli.style.color = "#232323";
pishloqli.style.backgroundColor = "#f9f9f9";
pishloqli.style.color = "#232323";
goshtli.style.backgroundColor = "#f9f9f9";
goshtli.style.color = "#232323";
pitsaTuri.textContent = "Achchiq pitsalar";
}
)