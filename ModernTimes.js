function solve(str){

   let words=str.split(' ');
   for (const word of words) {
       if (word.startsWith('#')&& word.length >1) {
           let isLetters=true;
           let newWord=word.substring(1);
           for (const char of newWord) {
               let ascii=char.charCodeAt(0);
               if ((ascii<65 || ascii>90)&&(ascii<97 || ascii>122)) {
                   isLetters=false;
                   break;
               }
           }
           if (isLetters) {
               console.log(newWord);
           }
           
           
       }
   }
    
}

solve('Nowadays everyone uses # to tag a #spe7cial word in #socialMedia')