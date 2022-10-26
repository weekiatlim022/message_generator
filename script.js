//Generate a random number 
const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

// Stores messages that will randomly generate in the program. 
const collectiveWisdom = {
    signInfo: ['Sun', 'Moon', 'Mars', 'Earth'],
    output: ['luck', 'terrible luck', 'bad luck', 'good luck'],
    advice: ['go out and relax', 'be strong', 'play more and do more', 'believe youself']
}

// Store the 'wisdom' in an array
let wisdom = [];

//Iterate over the object
for (let properties in collectiveWisdom){
    numOfIndex = generateRandomNumber(collectiveWisdom[properties].length);
    
    // use the object's properties to customize the message being added to wisdom  
    switch(properties){
        case 'signInfo':
            wisdom.push(`Your sign right now is a "${collectiveWisdom[properties][numOfIndex]}".`);
            break;
        case 'output' :
            wisdom.push(`You are having "${collectiveWisdom[properties][numOfIndex]}".`);
            break;
        case 'advice' :
            wisdom.push(`You should: "${collectiveWisdom[properties][numOfIndex]}".`);
            break;
        default:
            wisdom.push('There is not enough info.');
    }
}

const formatWisdom = (message) => {
    const formatted = wisdom.join('\n');
    console.log(formatted);
}

formatWisdom(wisdom);
