

export const TiposBasicos = () => {

    // le indicamos que la variable nombre1 que soporte la mutación de tipo string a number
    let nombre1: string | number = 'Rolando';
    nombre1 = 123;
    const nombre: string = 'Rolando';
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar bajo el agua'];

  return (
    <>
        <h3>Tipos básicos</h3>
        { nombre1 } 
        <br/>
        { nombre } , { edad } , { estaActivo ? 'Activo' : 'Inactivo' }
        <br/>
        { poderes.join(', ') }
    </>
  )
}
