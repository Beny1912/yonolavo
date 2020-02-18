'use strict';

module.exports = function(Pedido) {

   /* Pedido.afterRemote('update', function (context, pedido, next) {
        console.log("Entra en el remotudapte")
         Pedido.app.models.Email.send({ 
            to: pedido.email,
            from: 'beny.reading@gmail.com',
            subject: 'Alta usuario',
             //html: html_body
             html:'<h3>Su pedido ha cambiado de estado a :'+pedido.estado+' </h3>'
         }, function (err, result) {
              if (err) { 
                  console.log(err); return; 
            } 
            console.log(result); 
        next();
        });

    });
    */
   Pedido.observe('after save', function(ctx, next) {
    if(ctx.isNewInstance == false){
        Pedido.app.models.Email.send({ 
            to: ctx.instance.email,
            from: 'benito.pena@guadaltech.es',
            subject: 'Alta usuario',
             //html: html_body
             html:'<h3>Su pedido ha cambiado de estado a :'+ctx.instance.estado+' </h3>'
         }, function (err, result) {
              if (err) { 
                  console.log(err); return; 
            } 
            console.log(result); 
        next();
        });


    }
  

})
 

};
