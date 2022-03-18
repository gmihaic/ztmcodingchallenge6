// -------------------- cleantheRoom ------------------

const cleanTheRoom = (arr) => {
    let ret = [];
    
    const map = {};

    //for each element in the array, count the times it appears as a number and as a string. Store in the map object
    arr.forEach((elem) => {
        const numberElem = Number(elem);
        const typeElem = typeof(elem);

        if (!map[numberElem]) {
            map[numberElem] = {
                "countNumber": 0,
                "countString": 0
            };
        }
        if (typeElem === "string") {
            map[numberElem].countString++;
        } else {
            map[numberElem].countNumber++;
        }
    });

    //sort the map keys with a numeric sort function
    const orderedKeys = Object.keys(map).sort((a, b) => {
        a = Number(a);
        b = Number(b);

        if (a < b) {
            return -1;
        }
        else if (a > b){
            return 1;
        }

        return 0;
    });

    //for each numerically ordered key, build arrays based on the number of times each element appears as number and string
    orderedKeys.forEach((key) => {
        if (map[key]?.countNumber) {
            ret.push((map[key].countNumber > 1) ? Array(map[key].countNumber).fill(Number(key), 0, map[key].countNumber) : Number(key));
        }
        if (map[key]?.countString) {
            ret.push((map[key].countString > 1) ? Array(map[key].countString).fill(String(key), 0, map[key].countString) : String(key));
        }
    });    

    return ret;
};

const cleaned_room = cleanTheRoom([1,2,4,16,5,18,-5,15,"5",16,27,"-5",81,1,"16","18", 1, 5, 6, 7, -5, 31, "5", "31", "27", "1","5",591,"35",35,392,67,-5, -7, -3,37,82,"-5",28,82,"82",391,2,"82",5,10,"-3",2,1,1,1,20,20]);
console.log(JSON.stringify(cleaned_room));

// -------------------- end cleantheRoom ------------------

// -------------------- sumTargetNumber ------------------

const numSort = (a, b) => {
    a = Number(a);
    b = Number(b);

    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }

    return 0;
};

const sumTargetNumber = (arr, targetNr) => {
    
    if (arr.length == 0) {
        return null;
    }

    targetNr = Number(targetNr);

    arr = arr.sort(numSort);

    let ret = [];   
    let arrLength = arr.length;

    for (let j = 0; j < arr.length; j++) {
        for (let i = j + 1; i < arr.length; i++) {            
            if (Number(arr[i]) + Number(arr[j]) === targetNr) {
                ret.push(Number(arr[i]));
                ret.push(Number(arr[j]));
                return ret.sort(numSort);
            }       
        }
    }

    return null;
};

const checkCombinations = [
    [[1, 2, 3], 4],
    [[3, 1, 0, 5], 3],
    [[2, 5, 7], 14],
    [[7, 8, 10, 6, 8, 2, 5, 7], 18],
    [[1, 2, 3], 15]
];

checkCombinations.forEach((elem) => {
    console.log(`Checking array ${elem[0]} with targetNumber ${elem[1]}: ${JSON.stringify(sumTargetNumber(elem[0], elem[1]))}`);
});

// -------------------- endsumTargetNumber ------------------

// -------------------- getRGBHex ------------------
const getRGBHex = (color) => {
        
    let partsRGB = null;
    let partsHEX = null;
    
    if (typeof(color) == "object") {
        if (color.length === 3) {
            partsRGB = color;
        }
    } else if (typeof(color) == "string") {
        if (color.substr(0, 1) === "#") {
            color = color.substr(1);
        }

        if (color.length === 6) {
            partsHEX = [color.substr(0, 2), color.substr(2, 2), color.substr(4, 2)];
        }
    }

    if (partsRGB === null && partsHEX === null) {
        return null;
    }    
    
    if (partsRGB) {
        partsHEX = partsRGB.map((elem) => {
            return Math.abs(elem).toString(16).padStart(2, '0');
        });
    } else {
        partsRGB = partsHEX.map((elem) => {
            return parseInt(elem, 16);
        });
    }

    return {
        "rgb": partsRGB,
        "hex": partsHEX
    }
};

const checkColors = [
    "#ff0000", "fafafa",
    [255, 10, 10], [15, 0, 100],
    "#c3c3c3", [195, 195, 195], "#4fd2ab", [79,210,171]   
];

checkColors.forEach((elem) => {
    console.log(`Checking color ${elem}: ${JSON.stringify(getRGBHex(elem))}`);
});
// -------------------- end getRGBHex ------------------