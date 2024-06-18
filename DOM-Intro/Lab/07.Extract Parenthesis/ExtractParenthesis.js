function extract(id) {
    const text = document.getElementById(id).textContent;

    const regex = /\((.+?)\)/g;
    let matches = [];
    let match = regex.exec(text);

    while(match !== null) {
        matches.push(match[1]);
        match = regex.exec(text);
    }

    return matches.join('; ');
}