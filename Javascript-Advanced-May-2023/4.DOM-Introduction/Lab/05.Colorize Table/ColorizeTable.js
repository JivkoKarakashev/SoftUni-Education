function colorize() {
    const nodes = document.querySelectorAll('table tr');
    const nodesLength = nodes.length;
    console.log(nodesLength);
    for (let i = 1; i < nodesLength; i+=2) {
        nodes[i].style.background = 'teal';
    }
}