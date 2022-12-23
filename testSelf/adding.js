    var arr1 = [143, 86, 1470, 913, 1774, 948, 1509, 1022, 1750, 130];
    var arr2 = [143, 130, 86, 913, 948, 1022, 1470, 1509, 1750, 1774];
    var arr3 = [143, 913, 948, 1022, 1470, 1509, 1750, 1774, 5999, 130, 86];
    var arr4 = [143, 913, 948, 1022, 1470, 1509, 1750, 1774, 130, 86];
    var arr5 = [143, 913, 948, 1022, 1470, 1509, 1750, 1774, 5999, 0, 86, 130];
    var arr6 = [143, 913, 948, 1022, 1470, 1509, 1750, 1774, 86, 130];

    adding(arr1);
    adding(arr2);
    adding(arr3);
    adding(arr4);
    adding(arr5);
    adding(arr6);

    function adding(array) {
        var sum = 0;
        for (let i = 1; i < array.length; i++) {
            let abs = Math.abs(array[i] - array[i - 1]);
            sum += abs;
        }
        console.log(sum);
        return sum;
    }
