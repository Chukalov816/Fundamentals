function school(grade){

    formatGrade(grade.toFixed(2));
    
        function formatGrade(g){
            if (g<3) {
                console.log('Fail (2)');
            }else if(g<3.50){
                console.log(`Poor (${g})`);
            }else if (g<4.50) {
                console.log(`Good (${g})`);
            }else if (g<5.50){
                console.log(`Very good (${g})`);
            }else{
                console.log(`Excellent (${g})`);
            }
        }
    }
    
    
    
    
    school(4.5)