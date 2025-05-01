function encodeAndDecodeMessages() {
    const encodeTextAreaElement = document.querySelector('main div:nth-child(0n + 1) textarea');
    const encodeButtonElement = document.querySelector('main div:nth-child(0n + 1) button');
    const decodeTextAreaElement = document.querySelector('main div:nth-child(0n + 2) textarea');
    const decodeButtonElement = document.querySelector('main div:nth-child(0n + 2) button');
    // console.log(encodeTextAreaElement.value);
    // console.log(encodeButtonElement);
    const messageEncode = (str) => {
        const array = str.split('');
        const arrayASCII = array.map((char) => (char.charCodeAt(0) + 1));
        // console.log(arrayASCII);
        const encryptedString = String.fromCharCode(...arrayASCII);
        // console.log(encryptedString);
        return encryptedString;
    };
    const messageDecode = (str) => {
        const array = str.split('');
        const arrayASCII = array.map((char) => (char.charCodeAt(0) - 1));
        // console.log(arrayASCII);
        const encryptedString = String.fromCharCode(...arrayASCII);
        // console.log(encryptedString);
        return encryptedString;
    };

    const encodeButtonEventHandler = () => {
        const encodedMessage = messageEncode(encodeTextAreaElement.value);
        // console.log(encodedMessage);
        encodeTextAreaElement.value = '';
        decodeTextAreaElement.value = encodedMessage;
    };
    const decodeButtonEventHandler = () => {
        const decodedMessage = messageDecode(decodeTextAreaElement.value);
        // console.log(encodedMessage);
        decodeTextAreaElement.value = decodedMessage;
    };
    encodeButtonElement.addEventListener('click', encodeButtonEventHandler);
    decodeButtonElement.addEventListener('click', decodeButtonEventHandler);
}