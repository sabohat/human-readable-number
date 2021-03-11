module.exports = function toReadable (number) {
    
    //using arrays to find corresponding number is much easier
    let tillTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let tillTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tillHundred = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    //we store answer inside an array
    let answer = []

    //to read from the last digit
    numArr = Array.from(String(number), Number).reverse()

    len = numArr.length
    
    //iterate starting from the end
    for (i = 0; i < len; i++){
        //special "zero" cases
        if (numArr[i] === 0){
            if (len === 1){
                answer.unshift(tillTen[0])
            }
            else if (numArr[i+1] === 1 && i==0){
                answer.unshift('ten')
            }
            continue
        }
        //only digits
        else if (i === 0){
            if (numArr[i+1] === 1){
                answer.unshift(tillTwenty[numArr[i]])
            }
            else{
                answer.unshift(tillTen[numArr[i]])
            }
            
        }
        //tens
        else if (i === 1 && numArr[i] > 1){
            answer.unshift(tillHundred[numArr[i]])
        }
        //hundreds
        else if ( i === 2){
            answer.unshift(tillTen[numArr[i]] + ' hundred')
        }
        

    }
    //DONE!
    return answer.join(' ')
}