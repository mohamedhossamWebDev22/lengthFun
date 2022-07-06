function tall(str){
    var strLst = str.split(""),//convert STR into array
        num = 0;

    let i = 1;

    for (i in strLst){//count STR letters
        num = i;
    }

    console.log(`The number of letters is ${parseInt(num) + 1}.`);//output to the console
    //Add one becaus it's a bug.
}

tall('MOhamed');//call function.