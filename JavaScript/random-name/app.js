
function random_name(names) {

    let random_name_index = Math.floor(Math.random() * names.length);
    return names[random_name_index];
}

const names =  ['Safwan',  'Ahmad',  'Hamza',  'Talal',  'Malek'];
console.log(random_name(names));


