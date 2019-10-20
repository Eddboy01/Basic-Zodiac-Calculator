function check(){

    const userBirthMonth = document.getElementById("bmonth").value;
    const userBirthDay = document.getElementById("bday").value;
    let outText = document.getElementById('outputText');

    let aries = "Aries march 21st - April 19th";
    let taurus ="Taurus April 20th -May 20th";
    let gemini ="Gemini May 21st - June 20th";
    let cancer ="Cancer June 21st - July 22nd";
    let leo ="leo july 23rd - august 22nd";
    let virgo ="Virgp august 23rd - September 22nd";
    let libra = "Libra september 23rd - october 22nd";
    let scorpio ="Scorpio october 23rd - November 21st";
    let sagittarius = "Sagittarius november 22nd - december 21st";
    let capricorn ="Capricorn December 22nd - January 19th";
    let aquarius ="Aquarius january 20th - febuary 18th";
    let pisces ="febuay 19th - march 20th";
    
    
    console.log(userBirthMonth);
    console.log(userBirthDay);

    //Check For Birth Month
    
   
    switch(userBirthMonth){
        case "jan":
            console.log('sauce');
            if(userBirthDay < 20){
                outText.innerText = capricorn;
            }else if(userBirthDay >19){
                outText.innerText= aquarius;
            }
            break;

        case "feb":
            console.log('sauce');
            if(userBirthDay < 20){
                outText.innerText = aquarius;
            } else if(userBirthDay > 18){
                outText.innerText = pisces;
            }
            break;

        case "mar":
            console.log('sauce');
            if(userBirthDay < 22){
                outText.innerText = pisces;
            } else if( userBirthDay > 21){
                outText.innerText = aries;
            }
            break;

        case "apr":
            console.log('sauce');
            if(userBirthDay < 20){
                outText.innerText = aries;
            }else if(userBirthDay > 19){
                outText.innerText = taurus;
            }
            break;

        case "may":
            console.log('sauce');
            if(userBirthDay < 21){
                outText.innerText = taurus;
            }else if(userBirthDay > 19){
                outText.innerText = gemini;
            }
            break;

        case "jun":
            console.log('sauce');
            if(userBirthDay < 21){
                outText.innerText = gemini;
            }else if(userBirthDay > 20){
                outText.innerText = cancer;
            }
            break;

        case "jul":
            console.log('sauce');
            if(userBirthDay < 23){
                outText.innerText = cancer;
            }else if(userBirthDay > 22){
                outText.innerText = leo;
            }
            break;

        case "aug":
            console.log('sauce');
            if(userBirthDay < 23){
                outText.innerText = leo;
            }else if(userBirthDay > 22){
                outText.innerText = virgo;
            }
            break;

        case "sep":
            console.log('sauce');
            if(userBirthDay < 24){
                outText.innerText = virgo;
            }else if(userBirthDay > 23){
                outText.innerText = libra;
            }
            break;

        case "oct":
            console.log('sauce');
            if(userBirthDay < 24){
                outText.innerText = libra;
            }else if(userBirthDay > 23){
                outText.innerText = scorpio;
            }
            break;

        case "nov":
            console.log('sauce');
            if(userBirthDay < 22){
                outText.innerText = scorpio;
            }else if(userBirthDay > 21){
                outText.innerText = sagittarius;
            }
            break;

        case "dec":
            console.log('sauce');
            if(userBirthDay < 22){
                outText.innerText = sagittarius;
            }else if(userBirthDay > 21){
                outText.innerText = capricorn;
            }
            break;
    }


}