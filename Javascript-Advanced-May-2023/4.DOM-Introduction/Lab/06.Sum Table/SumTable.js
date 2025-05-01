function sumTable() {

    const table = document.querySelectorAll("table tr");
    const tableLength = table.length;
    let total = 0;

    for (let i = 1; i < tableLength; i++) {
        const rowLength = table[i].children.length;
        const currCellData = Number(table[i].children[rowLength - 1].textContent);
        total += currCellData;
    }
    document.querySelector('#sum').textContent = total;
}