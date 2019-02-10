function SelectionSortStable(input) {
    const len = input.length;

    for (let sortedIndex = 0; sortedIndex < len; sortedIndex++ ){
        let min = sortedIndex;
        for(let unsortedIndex = sortedIndex; unsortedIndex < len; unsortedIndex++) {
            if(input[unsortedIndex] < input[min]) {
                min = unsortedIndex;
            }
        }

        if(min != sortedIndex) {
            //swap es6 style
            [input[min], input[sortedIndex]] = [input[sortedIndex], input[min]];
        }
    }

    return input;
}
