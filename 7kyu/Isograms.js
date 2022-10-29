// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    c=str.toLowerCase();
    d=[...c];
  
    for(let i = 0; i< str.length; i++){
        for(let j = 0; j< str.length; j++){
            if(d[i] == d[j] && i != j){
                return false;
            }
        }
    }
    return true;
  }