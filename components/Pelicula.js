class Pelicula{

constructor(pelicula){

    this.pelicula = pelicula; 

}

render =()=>{

    let componente = document.createElement ('div');
    componente.id = "contenedorprincipal";


    let contenedor2= document.createElement('div');
    contenedor2.id = "contenedorsegundo";


    let contenedorstar = document.createElement('div');
    contenedorstar.id = "contenedorstar";

    let nombrepelicula =document.createElement('h2');
    nombrepelicula.innerHTML = this.pelicula.nombre;

    let puntaje = document.createElement('h2');
    puntaje.innerHTML = this.pelicula.promedio;

    let star1 = document.createElement('button');
    star1.innerHTML ='<img src="images/'+"star"+'.jpg">';

    let star2 = document.createElement('button');
    star2.innerHTML ='<img src="images/'+"star"+'.jpg">';

    let star3 = document.createElement('button');
    star3.innerHTML ='<img src="images/'+"star"+'.jpg">';

    let star4 = document.createElement('button');
    star4.innerHTML ='<img src="images/'+"star"+'.jpg">';

    let star5 = document.createElement('button');
    star5.innerHTML ='<img src="images/'+"star"+'.jpg">';

    star1.addEventListener('click', ()=>{
        console.log("holi")
        let urna = {
            punto: 1,
        }

        database.ref('votos/votacion/'+this.pelicula.nombre).push().set(urna);
        alert("Se ha registrado su voto");
    });

    star2.addEventListener('click', ()=>{

        let urna = {
            punto: 2,
        }

        database.ref('votos/votacion/'+this.pelicula.nombre).push().set(urna);
        alert("Se ha registrado su voto");
    });

    star3.addEventListener('click', ()=>{

        let urna = {
            punto: 3,
        }

        database.ref('votos/votacion/'+this.pelicula.nombre).push().set(urna);
        alert("Se ha registrado su voto");
    });

    star4.addEventListener('click', ()=>{

        let urna = {
            punto: 4,
        }

        database.ref('votos/votacion/'+this.pelicula.nombre).push().set(urna);
        alert("Se ha registrado su voto");
    });

    star5.addEventListener('click', ()=>{

        let urna = {
            punto: 5,
        }

        database.ref('votos/votacion/'+this.pelicula.nombre).push().set(urna);
        alert("Se ha registrado su voto");
    });

    contenedor2.appendChild(nombrepelicula);
    contenedor2.appendChild(puntaje);

    contenedorstar.appendChild(star1);
    contenedorstar.appendChild(star2);
    contenedorstar.appendChild(star3);
    contenedorstar.appendChild(star4);
    contenedorstar.appendChild(star5);

    componente.appendChild(contenedor2);
    componente.appendChild(contenedorstar);

    return componente;

}


}