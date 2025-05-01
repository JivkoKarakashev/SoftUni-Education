function createSortedList() {

    const sortedListArr = [];

    const sortedListObj = {
        add,
        remove,
        get,
        size: 0,
    };

    return sortedListObj;

    function add(el) {        
        sortedListArr.push(el);
        this.size++;
        sortedListArr.sort((numA, numB) => numA - numB);
    }
    function remove(index) {
        
        const sortedListArrLength = sortedListArr.length;
        if (index >= 0 && index < sortedListArrLength) {
            sortedListArr.splice(index, 1);
            this.size--;
        }
    }
    function get(index) {
        
        const sortedListArrLength = sortedListArr.length;
        if (index >= 0 && index < sortedListArrLength) {
            return sortedListArr[index];
        }
    }
}

let list = createSortedList();
list.add(10);
list.add(9);
list.add(8);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log('-----------');
let list2 = createSortedList();
list2.add(5);
list2.add(6);
list2.add(7);
console.log(list2.get(1));
list2.remove(1);
console.log(list2.get(1));
console.log(list.size);