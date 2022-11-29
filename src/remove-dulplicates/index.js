function removeDuplicates(obj) {
  let Keys = Object.keys(obj) // Assigning the object keys to a variable

    // Using the sort method to arrange the keys in descending order
    let sortKeys = Keys.sort((a,b) => b-a); 

    // Creating an Object Variable and testObject Variable to check for duplicates
    let newObject = {};
    let testObject = {};
   
    //Using forEach Method to loop through the iobject
    sortKeys.forEach((item) =>{
        let array = [] // created an Array to push non duplicates

        // This loops check for duplicates of object values
        obj[item].forEach( element => {
            if(!testObject[element]){
                testObject[element] = true;
                
                array.push(element)
            }
        })

        // Assigning the duplicate array to its corresponding key in the new object
        newObject[item] = array; 
        
    })

    
    return(newObject);

}

  

module.exports = removeDuplicates;
