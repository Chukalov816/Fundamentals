function solve([input]){
let pattern=/((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/g;
let match=input.match(pattern);
if (match!==null) {
   for (const line of match) {
       console.log(line);
   }
}
}





solve(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.'])


