const arr = [
    {
        name: 'Elie',
        name: 'Tim',
        name: 'Matt',
        name: 'Colt'
    }
];

function extractValue (array , key){
    return array.reduce(function (accumulator , currentVal){
        return accumulator = accumulator.concat(currentVal[key])
    }, 0);
};

///////////////////////////////////////////////////////////////////////

function vowelCount (string){
    const letters = 'AEIOU';
    return string.split("").reduce(function(accum , curr){
        let current = curr.toLowerCase();
        if (letters[current] == null){
            return accum[current] = +1
        }else {
            return accum[current] = 1
        } 
    } ,{} );
};

////////////////////////////////////////////////////////////////////////

const newArr = [
    {
        name: "John",
        name: "Jim",
        name: "Jack",
        name: "Josh"
    }
];

////////////////////////////////////////////////////////////////////////

function addKeyAndValue (array, key, val){
    return array.reduce(function (accum , current){
        current[key] = val;
        return accum;
    }, [] );
}

////////////////////////////////////////////////////////////////////////

function isEven(val){
    return val % 2 === 0;
}

const array= [1,2,3,4,5,6,7,8];

function partition (array , callback){
    return array.reduce(function (accumulator , currentValue){
        if(callback(currentValue)){
           return accumulator[0].concat(currentValue);
        }else{
           return accumulator[1].concat(currentValue);
        }
    }, [],[]);
}
