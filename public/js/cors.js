const express = require('express');
const cors  = require('cors')
// import {cors} from 'cors'
// import {express} from 'express'

const whitelist = ['https://swapnawedsramkumar.web.app/']  
  var corsOptionDelegate = (req,callback) => {
    var corsOptions;
    if(whitelist.indexOf(req.header('origin'))!== -1){
      corsOptions = {origin:true};

    }
    else{
      corsOptions = {origin:false};

    }
    callback(null,corsOptions);

  }