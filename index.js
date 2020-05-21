var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:1998marzo16@cluster0-vfkco.mongodb.net/libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
// tu código aquí. Minimo isbn, titulo y autor. agregar 10 libros
  var libro=Libro({
    isbn:"9786070728792",
    titulo:"Cien anios de soledad",
    autor:"Gabriel Garcia Marquez"
  });
  libro.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevosLibros() {

  var libros=[
    { isbn: "9783937467368",titulo: "El principito",autor:"Antoine de Saint-Exupéry"},
    { isbn: "9783641056650",titulo: "La mécanica del corazón",autor:"Mathias Malzieu"},
    { isbn: "9783570585207",titulo: "Metamorfosis en el cielo",autor:"Mathias Malzie"},
    { isbn: "9780374531805",titulo: "La muerte de Artemio Cruz",autor:"Carlos Fuentes"},
    { isbn: "9789685956796",titulo: "La casa de los espíritus",autor:"Isabelle Allende"},
    { isbn: "9781616060527",titulo: "Como transformar tu vida",autor:"Geshe Kelsang Gyatso"},
    { isbn: "9789682700637",titulo: "El principio del placer",autor:"José Emilio Pacheco"},
    { isbn: "9789682999253",titulo: "Donde habitan los angeles",autor:"Claudia Celis"},
    { isbn: "9781512187090",titulo: "El jardín de Venus",autor:"Félix María Samaniego"},
    { isbn: "9788806128234",titulo: "El Decameron",autor:"Giovanni Boccaccio"},
  ];


  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function buscarByISBN(arg){
  Libro.find({isbn:arg},function(err,documentos){
    console.log(documentos);
  });
}
function modificarTituloByISBN(arg,nuevoTitulo,nuevoAutor){
  Libro.findOneAndUpdate({isbn:arg},{titulo:nuevoTitulo},{autor:nuevoAutor},
    (err,data)=>{
    if(err){
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
function main() {
//  nuevoLibro();
//  buscarByISBN("9786070728792");
  modificarTituloByISBN("9786070728792","Cien años de soledad","Gabriel García Marquez");
  //  nuevosLibros();
}

main();    // ejecutamos main
