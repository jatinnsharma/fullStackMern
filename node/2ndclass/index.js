const fs = require('fs')

// rename
// fs.rename( oldPath, newPath, callback )

fs.rename('zia.txt','jatinsharma.txt',()=>{
    console.log('hello world');
})

// unlink fs.unlink( path, callback )
// The fs.unlink() method is used to remove a file or symbolic link from the filesystem.
//  This function does not work on directories, therefore it is recommended to use fs.rmdir() 
// to remove a directory.

fs.unlink('jatin.js',(err)=>{
    if(err){console.log(err)}
    console.log('hello world')
})


// fs.appendFile( path, data[, options], callback )

fs.appendFileSync('jatin.txt','jatin sharma  from this side ' ,()=>{
    console.log('done')
})


/**
 * Parameter: This method accepts four parameters as mentioned above and described below:  

filename: It holds the name of the file to read or the entire path if stored at another location.
flag: The operation in which the file has to be opened.
mode: Sets the mode of the file i.e. r-read, w-write, r+ -readwrite. It sets to default as readwrite.
callback: It is a callback function that is called after reading a file. It takes two parameters: 
err: If any error occurs.
data: A file descriptor, used by subsequent file operations. A file descriptor is a handle used to access a file. It is a non-negative integer uniquely referencing a specific file.

 */

// fs.open( filename, flags, mode, callback )


fs.open('demo.txt', 'r', function (err, f) {
    console.log('Saved!');
});