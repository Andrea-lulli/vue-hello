/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
 utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da 
un data.
*/

var app = new Vue(
  {
    el: '#root',
    data: {
      message: "Frase di prova Vue",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYfe4UJkhZ4Z7msV8e6vw65LzC-EwhpqTRCtUQfEPzEVa8MpXHGqPbljxRIn43RkS4bc&usqp=CAU",
      
    },
    methods: {

      //inserita altra immagine al click
      imgclick: function () {

        if (this.img == "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYfe4UJkhZ4Z7msV8e6vw65LzC-EwhpqTRCtUQfEPzEVa8MpXHGqPbljxRIn43RkS4bc&usqp=CAU") {
          return this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZKrux0ql53bRJUuEwAXoy3cD5PcqGc9MFiIzGLfG6KqRgb4m4zK5VWtXCWbA-BUmlVIg&usqp=CAU";
        } else{

          return this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYfe4UJkhZ4Z7msV8e6vw65LzC-EwhpqTRCtUQfEPzEVa8MpXHGqPbljxRIn43RkS4bc&usqp=CAU" ;
        }
       

      }

    },

  })