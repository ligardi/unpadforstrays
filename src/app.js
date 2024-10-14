// Toggle menu button
document.getElementById('nav-toggle').addEventListener("click", function () {
    document.getElementById('nav-menu').classList.toggle("hidden");
})

// Web Share API utk laman artikel.
let share = document.getElementById("sharer");
    share.addEventListener("click", function ()  {
    if (navigator.share) {
        navigator.share({
        url: window.location.href,
        });
    } else {
        alert('Sharing is not supported. Please copy the URL in the address bar.')
    };        
});

//Info Produk di Home import dari shop.js


//fetch json untuk halaman Shop
fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // or response.text() if you're expecting text
            })
            .then(data => console.log(data)
            )
            .catch(error => console.error('There was a problem with the fetch operation:', error)
            );


//Contact links

//Products Page
// document.getElementById("productlist").innerHTML = `<h2 class="font-medium text-blue-600">Tes H1</h2><p class="text-gray-700">Testing p</p>`;
