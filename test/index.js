var should = require('chai').should();
let mix = require('../index.js').minin;

function foo (){
  show(){
    console.log("foo show ");
  }
}

function bar(){
  index(){
    console.log("bar show");
  }
}

class Combo extends mix(foo, bar){
  
}
