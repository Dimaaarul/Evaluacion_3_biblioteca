//Componente:(donde lo use):Lo use para crear libroscard y listalibros y el filtro
(por que es el adecuado): Porque permite dividir la interfaz en piezas mas pequeñas y mas faciles de mantener para no andar repitiendo el codigo

//JSX:(donde lo use): en todos los archivos .jsx para definir la estructura visual de la app
(por que es el adecuado): porque permite escribir html directamente dentro de javascript

//Props:(donde lo use):lo use para pasar la informacion de cada libro desde la lista card
(por que es el adecuado): es la forma estandar de comunicar componentes

//Estado|useState:(donde lo use):lo use en el app.jsx para guardaar el texto que el usuario escriba y el filtro de estado que seleccione
(por que es el adecuado): por que permite que react recuerde o algo asi las elecciones del usuario y refresque la apntalla automaticamente al cambiar

//Renderizado de listas:(donde lo use): use .map() en el componente de listaslibros para recorrer el array de libros
(por que es el adecuado):es la forma mas eficiente de transformar un array de dats en una lista de elementos visuales en pantalla

//Renderizado condificonal:(donde lo use): lo use para mostrar el mensaje "no hay resultados" y para la etiqueta nuevo en los libros
(por que es el adecuado): porque permite que la apliacion tome desiciones visuales y muestre contenido solo cuando se cumple ciertas condiciones


- que ventaja tiene dividir el catalogo en componentes en lugar de escribir todo en un solo archivo?
//La principal ventaja es que al separarla puedo editar codigo de un lado sin afectar el otro, ademas hace que el proyecto sea mucho mas facil de leer

-Que diferencia hay entre props y estado en tu solucion?Da un ejemplo concreto de cada uno tomado de esta apicacion
//los props son datos que se pasan de un componente padre a uno hijo y no cambian, mientras que el estado es informacion interna que cambia segun la interaccion del usuario
ejemplo de prop: El titulo que recibe el librocard para mostrar la informacion del libro
ejemplo de estado: la variable de busqueda en el app.jsx que se actualiza cada vez qye el usuario escribe en el buscador para filtrar la lista de libros