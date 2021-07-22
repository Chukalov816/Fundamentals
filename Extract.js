function solve(text){
let extensionIndex=text.lastIndexOf('.');
let fileIndex=text.lastIndexOf('\\');
let extension=text.substring(extensionIndex+1);
let fileName=text.substring(fileIndex+1,extensionIndex);
console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}


solve('C:\\Internal\\training-internal\\Template.pptx')