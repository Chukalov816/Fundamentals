function dd(rooms) {

    let isAlive = true;
    let initialHealth = 100;
    let initialCoins = 0;
    let strRooms = rooms.toString();
    let dividedRooms = strRooms.split('|')
    for (let i = 0; i < dividedRooms.length; i++) {
        let currentRoom = dividedRooms[i];
        let strCurrentRoom = currentRoom.toString();
        let newCurrentRoom = strCurrentRoom.split(' ');
        let firstEl = newCurrentRoom[0];
        let secondEl = Number(newCurrentRoom[1]);
        if (firstEl === 'potion') {
           let heal = 100 - initialHealth;
            if (heal > secondEl) {
                heal = secondEl;
            }
            initialHealth += secondEl;
            if (initialHealth > 100) {
                initialHealth = 100;

            }
            console.log(`You healed for ${heal} hp.`);
            console.log(`Current health: ${initialHealth} hp.`);
        } else if (firstEl === 'chest') {
            let currentCoins = secondEl;
            initialCoins += secondEl;
            console.log(`You found ${currentCoins} coins.`);
        } else {
            initialHealth -= secondEl;
            if (initialHealth > 0) {
                console.log(`You slayed ${firstEl}.`);
            } else {
                console.log(`You died! Killed by ${firstEl}.`);
                console.log(`Best room: ${i + 1}`);
                isAlive = false;
                break;
            }
        }



    }
    if (isAlive) {
        console.log("You've made it!")
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }


}






dd(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
