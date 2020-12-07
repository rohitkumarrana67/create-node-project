#!/usr/bin/env node

'use strict';

const fs = require("fs")
const { argv } = require("process")
const  {exec}  = require("child_process"); 
const project_name=argv[2];

const createProjectDirectory=()=>{
    
fs.mkdir("./"+project_name, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log("New Project directory successfully created.");
      
    }
  })
 
}
createProjectDirectory();









   
