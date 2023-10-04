

// Step 1: Create the initial array
let myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

// Step 2: Modify the array
myInstruments.unshift("saxophone");
myInstruments.splice(3, 1);
myInstruments.push("tuba", "bassoon");
console.log(myInstruments); // Just for checking

// Step 3: Write getFirstInstrument function
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstrument(instruments) {
    return instruments[0];
}
console.log(getFirstInstrument(myInstruments)); // "saxophone"

// Step 4: Write getLastInstrument function
function getLastInstrument(instruments) {
    return instruments[instruments.length - 1];
}
console.log(getLastInstrument(myInstruments)); // "bassoon"

// Step 5: Write getFirstAndLastInstruments function
function getFirstAndLastInstruments(instruments) {
    return [instruments[0], instruments[instruments.length - 1]];
}
console.log(getFirstAndLastInstruments(myInstruments)); // ["saxophone", "bassoon"]

// Step 6: Write getFirstThreeInstruments function
function getFirstThreeInstruments(instruments) {
    let result = [];
    for (let i = 0; i < 3; i++) {
        result.push(instruments[i]);
    }
    return result;
}
console.log(getFirstThreeInstruments(myInstruments)); // ["saxophone", "flute", "clarinet"]

// Step 7: Write getTInstruments function
function getTInstruments(instruments) {
    let result = instruments.filter(instrument => instrument.startsWith('t'));
    return result;
}
console.log(getTInstruments(myInstruments)); // ["trumpet", "trombone", "tuba"]

// Step 8: Write getLongestNamedInstrument function
function getLongestNamedInstrument(instruments) {
    let longest = "";
    for (const instrument of instruments) {
        if (instrument.length > longest.length) {
            longest = instrument;
        }
    }
    return longest;
}
console.log(getLongestNamedInstrument(myInstruments)); // "saxophone"
