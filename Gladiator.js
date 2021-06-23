function gladiator(input) {
    let inventory = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        let command = current[0];
        switch (command) {
            case 'Buy':
                if (inventory.includes(current[1])) {
                    continue;
                } else {
                    inventory.push(current[1]);
                }
                break;
            case 'Trash':
                if (inventory.includes(current[1])) {
                    inventory = inventory.filter(x => x !== current[1]);
                }
                break;
            case 'Repair':
                if (inventory.includes(current[1])) {
                    inventory = inventory.filter(x => x !== current[1]);
                    inventory.push(current[1]);
                }
                break;
            case 'Upgrade':
                let upgrade = current[1].split('-');
                let upgradeItem = upgrade.shift();

                for (let j = 0; j < inventory.length; j++) {
                    if (inventory[j] === upgradeItem) {
                        inventory.splice(j+1, 0, (`${upgradeItem}:${upgrade[0]}`));
                        break;
                    }

                }
                break;
        }
    }
    console.log(inventory.join(' '));
}




gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])
