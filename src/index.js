module.exports = function toReadable (number) {
    let str = '';
    let num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let num_2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let num_3  = ['twenty',  'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let hund = 'hundred';
    let form1 = Math.trunc(number/100);
    let form2 = (number - Math.trunc(number/100)*100)%10;
    let form3 = Math.trunc((number - Math.trunc(number/100)*100)/10)
    let k = 0;
    if (number === 0){
        str = 'zero'
    }
    if(number >= 100){
        one(form1);
        if((number - Math.trunc(number/100)*100) > 0){
            str += ' ' + hund + ' ';
        }else str += ' ' + hund;
        
        tw(number)
        if(k === 0){
            one(form2)
        }
    }else if (number >= 10 && number <= 99) {
        tw(number);
        if(k === 0){
            one(form2)
        }
        
    }else one(form2)
    return str; 
    function tw (number){
        switch (Math.trunc((number - Math.trunc(number/100)*100)/10)){
            case 1: k++;
            switch ((number - Math.trunc(number/100)*100)%10){
                case 0: 
                    str +=  num_2[0];
                    break;
                case 1: 
                    str +=  num_2[1];
                    break;
                case 2: 
                    str +=  num_2[2];
                    break;
                case 3: 
                    str +=  num_2[3];
                    break;
                case 4: 
                    str +=  num_2[4];
                    break;
                case 5:
                    str +=  num_2[5];
                    break;
                case 6:
                    str +=  num_2[6];
                    break;
                case 7:
                    str +=  num_2[7];
                    break;
                case 8:
                    str +=  num_2[8];
                    break;
                case 9: 
                    str +=  num_2[9];
                    break;
                
            }
                break;
            case 2: 
                str +=  num_3[0];
                one(number);
                break;
            case 3: 
                str +=  num_3[1];
                one(number);
                break;
            case 4: 
                str +=  num_3[2];
                one(number);
                break;
            case 5:
                str +=  num_3[3];
                one(number);
                break;
            case 6:
                str +=  num_3[4];
                one(number);
                break;
            case 7:
                str +=  num_3[5];
                one(number);
                break;
            case 8:
                str +=  num_3[6];
                one(number);
                break;
            case 9: 
                str +=  num_3[7];
                one(number);
                break;
        }
        if(form2>0 && k===0 && form3!=0){
            str += ' '
        }
    }
    function one(form){
        switch (form){
            case 1: 
                str +=  num[0];
                break;
            case 2: 
                str +=  num[1];
                break;
            case 3: 
                str +=  num[2];
                break;
            case 4: 
                str +=  num[3];
                break;
            case 5:
                str +=  num[4]; 
                break;
            case 6:
                str +=  num[5]; 
                break;
            case 7:
                str +=  num[6]; 
                break;
            case 8:
                str +=  num[7]; 
                break;
            case 9: 
                str +=  num[8];
                break;
        }
    }
}
