
const contenedorfeed = document.getElementById('peliscontenedor');

var starCountRef = firebase.database().ref('votos/peliculas/Mank');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  if (data == null){
    console.log("entro papi");
    let titular = {
        nombre: "Mank",
        promedio: 0,
    }

    database.ref('votos/peliculas/'+"Mank").set(titular);


    let titular2 = {
        nombre: "Minari",
        promedio: 0,
    }

    database.ref('votos/peliculas/'+"Minari").set(titular2);

    let titular3 = {
        nombre: "Nomadland",
        promedio: 0,
    }

    database.ref('votos/peliculas/'+"Nomadland").set(titular3);

    let titular4 = {
        nombre: "Sound of Metal",
        promedio: 0,
    }

    database.ref('votos/peliculas/'+"Sound of Metal").set(titular4);

    let titular5 = {
        nombre: "The Father",
        promedio: 0,
    }

    database.ref('votos/peliculas/'+"The Father").set(titular5);
    
}
});



/*database.ref('votos/peliculas').on('value', function(data){
    console.log(data);

    if (data == null){
        console.log("entro papi");
        let titular = {
            nombre: "Mank",
            promedio: 0,
        }

        database.ref('votos/peliculas/'+"Mank").push().set(titular);


        let titular2 = {
            nombre: "Minari",
            promedio: 0,
        }

        database.ref('votos/peliculas/'+"Minari").push().set(titular2);

        let titular3 = {
            nombre: "Nomadland",
            promedio: 0,
        }

        database.ref('votos/peliculas/'+"Nomadland").push().set(titular3);

        let titular4 = {
            nombre: "Sound of Metal",
            promedio: 0,
        }

        database.ref('votos/peliculas/'+"Sound of metal").push().set(titular4);

        let titular5 = {
            nombre: "The Father",
            promedio: 0,
        }

        database.ref('votos/peliculas/'+"The Father").push().set(titular5);
        
    }

   
});
*/


database.ref('votos/peliculas').on('value', function(data){

    contenedorfeed.innerHTML = '';
    
    data.forEach(
        cartelera => {
            let infocartel = cartelera.val();
            let pelicula = new Pelicula(infocartel);
            
            contenedorfeed.appendChild(pelicula.render());

        }

    );
});


database.ref('votos/votacion').on('value', function(data){

    data.forEach(
           cartel=>{
            let nombre = cartel.key;
            console.log(nombre);
            database.ref('votos/votacion/'+nombre).on('value', function (data2){
                let contador = 0;
                let totales = 0;
                let hijitos = 0;
                let prom = 0;
                let contarhijos=0;
                
                data2.forEach(
                     function (user){

                        hijitos = user.numChildren();
                        let clave = user.key;
                        let valor = user.val();

                        
                        
                        contador = valor.punto;
                        
                        totales = contador + totales; 
                        contarhijos = hijitos + contarhijos;
                        console.log(hijitos+ "babys");
                     }
                );
                prom = (totales/contarhijos);
                console.log(prom);
                
                let nuevo = {
                    nombre: nombre,
                    promedio: prom,
                }
               
               database.ref('votos/peliculas/'+nombre).set(nuevo);

            });

        }

    );
});
