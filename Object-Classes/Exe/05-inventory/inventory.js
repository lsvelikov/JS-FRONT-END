function inventory(input) {

    let heros = [];
    for (const line of input) {
        let[name, level, items]  = line.split(' / ');

        let hero = {
            name,
            level: Number(level),
            items,
        }

        heros.push(hero);
    }

    heros.sort((a, b) => a.level - b.level);

    heros.forEach(h => {
        console.log(`Hero: ${h.name}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    });
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);