function SelectionSort(input) {
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

function SelectionSortLinkedList(head) {
    let sortedPtr = null;
    let unsortedPtr = head;
    let minRef = null;
    let minRefPrev = null;
    while(unsortedPtr) {
        minRefPrev = null;
        minRef = unsortedPtr;
        while(unsortedPtr.next) {
            if(unsortedPtr.next.key < minRef.key) {
                minRefPrev = unsortedPtr;
                minRef = unsortedPtr.next;
            }

            unsortedPtr = unsortedPtr.next;
        }

        if(minRefPrev) minRefPrev.next = minRef.next;
        if(sortedPtr === null) {
            sortedPtr = minRef;
            minRef.next = head.next;
            head = sortedPtr;
        } else if(minRefPrev === null) {
            //do nothing, we are on the same element
            sortedPtr = sortedPtr.next;
        }
        else {
            //insert it at sortedPtr
            minRef.next = sortedPtr.next;
            sortedPtr.next = minRef;
            sortedPtr = sortedPtr.next;
        }

        //reset the unsortedPtr
        unsortedPtr = sortedPtr.next;
    }

    return head;
}
