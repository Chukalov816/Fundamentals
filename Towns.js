function solve(arr){
    class City{
        constructor(town,latitude,longitude){
            this.town=town;
            this.latitude=latitude;
            this.longitude=longitude;
        }
        print(){
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
        }

    for (const line of arr) {
        let[town,latitude,longitude]=line.split(' | ');
        latitude=Number(latitude).toFixed(2);
        longitude=Number(longitude).toFixed(2);
        let city=new City(town,latitude,longitude);
        city.print();
    }
}



solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)