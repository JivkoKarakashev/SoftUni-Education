// The object reference is embedded – using '.this' key word is not required!

function demo4() {

    function canPrint(device) {
        device.print = () => {
            console.log(`${device.name} is printing a page`);
        }
    }
    const printer = { name: 'ACME Printer' };
    // console.log(printer);
    canPrint(printer);
    // console.log(printer);
    printer.print();
}

demo4()