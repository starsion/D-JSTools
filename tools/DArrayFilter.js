/**
 * 筛选重复项，生成新数组
 * @param array 参与筛选的数组
 */
function DArrayFilter(array) {
    let tempArray = [];
    tempArray.push(array[0]);
    if (array != []) {
        for (let i = 1; i < array.length; i++) {
            let flag = false;
            for (let j = 0; j < tempArray.length; j++) {
                if (array[i] === tempArray[j]) {
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                tempArray.push(array[i])
            }
        }
    } else {
        console.log('Array is null!')
    }
    return tempArray
}

export default DArrayFilter