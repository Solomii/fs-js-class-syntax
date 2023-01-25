"use strict"

// class Test {} // - declaration

// const Test = class{} // - expresion

function test(...rest){
  console.log(rest)
  return class{
    constructor(){}
    toString(){}
  }
}

const Test = test(1,2,3)