function findMatching(takeArray, arg){
    const theDrivers = takeArray.filter(function (word){
        if (word.toLowerCase() === arg.toLowerCase()){
            return true
        }
    })    
        return theDrivers 
} 

function fuzzyMatch(array, argument){
    const driverz = array.filter(function (value) {
        if (value[0] === argument[0]) {
            return true
        }
    })
    return driverz
}

function matchName(arrays, args) {
    const properties = arrays.filter(function (findMatch){
        if (findMatch.name === args) {
            return true
        }
    })
    console.log(properties)
    return properties
}