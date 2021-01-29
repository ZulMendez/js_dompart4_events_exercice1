// 1
let titre = document.querySelector('h1');
console.log(titre);

// 2
// titre.setAttribute('style', "color:blue");

// 3
let color = () => {
    titre.style.color = 'blue';
}

// function anonyme
titre.addEventListener('click', () => {
    titre.style.color = 'blue';
})
// 4
// color();

// 5
titre.addEventListener('click', color );

