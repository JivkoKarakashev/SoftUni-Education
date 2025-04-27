function cutAndReverse(inputString){

    const inputStringLength = inputString.length;
    const halfStrIdx = inputStringLength / 2;
    let startIdx = 0;
    let endIdx = halfStrIdx;
    for (let i = 0; i < 2; i++) {
        let halfSrtArr = inputString.slice(startIdx, endIdx).split('').reverse().join('');
        console.log(halfSrtArr);
        startIdx = endIdx;
        endIdx = inputStringLength;
    }
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
console.log('-----------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')