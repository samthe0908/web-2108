class Album {
    constructor(id, cover, artist, price) {
        this.id = id
        this.cover = cover
        this.artist = artist
        this.price = price
    }
}
let albums = [
 new Album(
     'album1',
     "img/abba%20voyage2021.jpg",
      "ABBA-VOYAGE",
     159
 ),
    new Album(
        'album2',
        "img/beethoven.jpg",
         "BEETHOVEN-LEGENDARY RECORDNINGS 2CD",
        579
),
    new Album(
        'album3',
        "img/jul.jpg",
        "NU ÄR DET JUL IGEN-2 CD",
        59
),
new Album(
        'album4',
        "img/lampljus1.jpg",
        "HÅKAN HELLSTRÖM-RAMPLJUS",
        99
),
new Album(
        'album5',
        "img/queen.jpg",
        "QUEEN-PLATNUM COLLECTION 3 CD",
        249
),
new Album(
       'album6',
       "img/SUXUKI1+2.jpg",
        "SUZUKI PIANO-LLOYD-WATT CD1&2",
        189
),
new Album(
        'album7',
       "img/såmycket.jpg",
        "SÅ MYCKET BÄTTRE-SÄSONG 11, 3 CD",
        159
),
new Album(
       'album8',
        "img/the_beatles.jpg",
        "THE BEATLES-GREATEST HITS",
         159
)
]
// function createAlbum(album){
//     return `
//     <article id=myAlbums>
//             <img src=${album.cover} alt=${album.artist} class="albumImage" id=${album.cover}>
//             <p>${album.artist}</p>
//             <p>Pris: ${album.price}Kr</p>
//             <button onclick="buyAlbum('${album.id}', '${album.cover}', '${album.artist}','${album.info}', '${album.price}')">Köp</button>
//     </article>
//  `;
// }
//
// let showAlbums = [];
// for (const item of albums){
//     showAlbums.push(createAlbum(item))
// }
// document.getElementById('allAlbum').innerHTML = showAlbums;
