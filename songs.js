function solve(arr){
    class Song{
        constructor(type,name,time){
            this.type=type;
            this.name=name;
            this.time=time;
        }
    }
    let numberOfSongs=arr.shift();
    let wantedType=arr.pop();
    let songs=[];



    for (const line of arr) {
        let[type,name,time]=line.split('_');
        let song=new Song(type,name,time);
        songs.push(song);
    }

    if (wantedType==='all') {
        print(songs);
    }else{
        let filtered=songs.filter(x=>x.type===wantedType);
        print(filtered);
    }
    function print(arr){
        for (const obj of arr) {
            console.log(obj.name);
        }
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )