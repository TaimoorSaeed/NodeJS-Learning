const fs = require('fs')

//create a file
// fs.writeFile('example.txt',"this is an example",(err)=> {
//     if (err)
//         console.log(err);
//     else {
//         console.log("File sucesfull created");
//         fs.readFile('example.txt','utf8',(error,file)=> {
//             if(err)
//                 console.log(err)
//             else 
//                 console.log(file);
//         });
//     }
        
// });


// fs.rename('example.txt','example2.txt',(err)=> {
//     if(err)
//         console.log(err)
//     else 
//         console.log('Sucessfuly renamed the file')
// })

// fs.appendFile('example2.txt','Some data being appended',(err)=> {
//     if (err)
//         console.log(err);
//     else 
//         console.log('Sucessfully appended data to files')
// })

fs.unlink('example2.txt',(err)=> {
    if(err)
        console.log(err)
    else 
        console.log('Sucesfully deleted the file')
})