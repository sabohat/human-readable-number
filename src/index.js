module.exports = function toReadable (number) {
// function toReadable (number) {
    let tillTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tillTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    let tillHundred = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']


    let answer = []
    numArr = Array.from(String(number), Number).reverse()
    len = numArr.length
    
    for (i = 0; i < len; i++){

        if (numArr[i] === 0){
            if (len === 1){
                answer.unshift(tillTen[0])
            }
            else if (numArr[i+1] === 1 && i==0){
                answer.unshift('ten')
            }
            continue
        }
        else if (i === 0){
            // answer.unshift(tillTen[numArr[i]])
            let thisNum = tillTen[numArr[i]]

            if (numArr[i+1] === 1){
                answer.unshift(tillTwenty[numArr[i]])
            }
            else{
                answer.unshift(tillTen[numArr[i]])
            }
            
        }
        else if (i === 1 && numArr[i] > 1){
            answer.unshift(tillHundred[numArr[i]])
        }
        else if ( i === 2){
            answer.unshift(tillTen[numArr[i]] + ' hundred')
            console.log(tillTen[numArr[i]] + ' hundred')
        }
        

    }

    return answer.join(' ')
}
// 
// toReadable(514); 