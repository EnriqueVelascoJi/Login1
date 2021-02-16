


// Funcion para agregar usuario 
export const agregarUsuario = async (nombre, password) => {

    const nuevoUsuario = {
        nombre,
        password
    }
    const urlAPI= "http://localhost:8080/usuario";
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(urlAPI)}`;

        try{
            await fetch(urlAPI, {
                method: "POST",
                body: JSON.stringify(nuevoUsuario),
                headers: {
                    'Content-Type': "application/json",
                }
            }).then(resp => {
                if(resp.status !== 404) {
                    //Mostrar mensaje de alumno resgistardo
                    Swal.fire({
                        icon: 'success',
                        title: 'Tu registro se completó de manera exitosa :)',
                        confirmButtonText: `Aceptar`
                      });
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Fallo en el registro, intenta de nuevo :(',
                      confirmButtonText: `Corregir`
                    })
                  }
            })
            // Swal.fire(
            //     'Usuario Creado correctamente!'
            //   )

        }catch (error) {
            console.log(error);
        }

}