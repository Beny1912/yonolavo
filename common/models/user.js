'use strict';
var config = require('../../server/config.json');
var path = require('path');
var app = require('../../server/server');
var http = require("http");
var loopback = require("loopback");
var senderAddress = "beny.reading@gmail.com"; //Replace this address with your actual address
var JSON = require('circular-json')
var verifyUrl;

module.exports = function (User) {

    User.afterRemote('create', function (context, user, next) {
        console.log("entra en el create")

                User.app.models.Email.send({ 
                    to: user.email,
                    from: senderAddress,
                    subject: 'Alta usuario',
                     //html: html_body
                     html:'<h3>Gracias por darse de alta en nuestros sitio.</h3>'
                 }, function (err, result) {
                      if (err) { 
                          console.log(err); return; 
                    } 
                    console.log(result); 
                next();
                });
                
            });
      

    };




