// refrense https://www.geeksforgeeks.org/longest-possible-chunked-palindrome/


function findLongestPossibleChunkedPalindrome(str) {
    console.log('value :', str, str.length, isChunckedPalindrom(str + ""));
}


function isChunckedLargetPalindrom(str) {
    if (str.length === 1) return 1;
    //console.log('str : '+isChunckedPalindrom(str+""));
    // return Math.max(
    //     isChunckedPalindrom(str+""),
    //     isChunckedLargetPalindrom(str.substr(0, str.length - 1)), 
    //     isChunckedLargetPalindrom(str.substr(1))
    // )
}

function isChunckedPalindrom (str) {
    let left = 0;
    let right = str.length - 1;
    let strCopies = str + "";
    let currentChunk = "";
    let count = 0;

    while (left < right) {
        if ( str[left] === str[right] && !currentChunk) {
            strCopies = strCopies.substr(left+1, right-left-1);
            left = 0;
            right = strCopies.length - 1;
            count += 2;
        } else {
            currentChunk += strCopies[left];

            if (currentChunk === strCopies.substr(right)) {
                count += 2;
                strCopies = strCopies.substr(left+1, right-left-1);
                //console.log('split ', left+1, right-left-1);
                left = 0;
                right = strCopies.length-1;
                currentChunk = "";
            } else {
                left++;
                right--;
            }
        }
        //console.log('test', strCopies, currentChunk, count, left, right, Math.ceil(strCopies.length/2));
    }

    return count + 1;
}

// dataset

const dataset = [
    "ghiabcdefhelloadamhelloabcdefghi",
    "merchant",
    "aba",
    "antaprezatepzapreanta",
    "geeksforgeeks"
]

dataset.forEach((value) => {
    findLongestPossibleChunkedPalindrome(value);
})