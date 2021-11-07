
function createAlbum(album){
    return `
    <article id=myAlbums>
            <img src=${album.cover} alt=${album.artist} class="albumImage" id=${album.cover}>
            <p>${album.artist}</p>
            <p>Pris: ${album.price}Kr</p>
            <button onclick="buyAlbum('${album.id}', '${album.cover}', '${album.artist}', '${album.price}')">Köp</button>
    </article> 
 `;
}

let showAlbums = [];
for (const item of albums){
    showAlbums.push(createAlbum(item))
}
document.getElementById('allAlbum').innerHTML = showAlbums;
