function sortedList() {
    class List {
        collection = [];
        size = 0;
        sizeFunc() {
            return this.collection.length;
        }
        indexCheck(index) {
            if (index >= 0 && index < this.size) {
                return true
            }
            return false;
        }
        sortFunc(arr) {
            arr.sort((numA, numB) => numA - numB);
        } 
        add(el) {
            this.collection.push(el);
            this.sortFunc(this.collection);
            this.size = this.sizeFunc();
        }
        remove(idx) {
            if (!this.indexCheck(idx)) {
                return;
            }
            this.collection.splice(idx, 1);
            this.sortFunc(this.collection);
            this.size = this.sizeFunc();
        }
        get(idx) {
            if (!this.indexCheck(idx)) {
                return;
            }
            return this.collection[idx];
        }        
    }

    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1));
    list.remove(1);
    console.log(list.get(1));
    // console.log('--------------------');
    // let list1 = new List();
    // list1.add(5);
    // console.log(list1.get(0));
    // list1.add(3);
    // console.log(list1.get(0));
    // list1.remove(0);
    // console.log(list1.get(0));
    // console.log(list1.collection);
    // console.log(list1.size);
}

sortedList()