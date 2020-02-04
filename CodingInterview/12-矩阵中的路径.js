/* 
面试题12：矩阵中的路径
题目：请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有
字符的路径。路径可以从矩阵中任意一格开始，每一步可以在矩阵中向左、右、
上、下移动一格。如果一条路径经过了矩阵的某一格，那么该路径不能再次进入
该格子。例如在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字
母用下划线标出）。但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个
字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
A B T G
C F C S
J D E H
*/

function hasPath(matrix, str) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0 || !str) {
        return false;
    }

    const visted = [];
    let pathLen = 0;

    for (let row=0; row<matrix.length; row++) {
        visted[row] = [];
    }
    
    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[0].length; col++) {
            if (hasPathCore(matrix, row, col, str, pathLen, visted)) {
                return true;
            }
        }
    }

    return false;
}

function hasPathCore(matrix, row, col, str, pathLen, visted) {
    // console.log(row, col, str, pathLen, visted)
    if (pathLen === str.length) {
        return true;
    }

    let hasPath = false;

    if (row >=0 && row < matrix.length && col >=0 && col < matrix[0].length
        && matrix[row][col] === str[pathLen]
        && !visted[row][col]) {
            pathLen += 1;
            visted[row][col] = true;

            hasPath = hasPathCore(matrix, row, col-1, str, pathLen, visted)
                || hasPathCore(matrix, row-1, col, str, pathLen, visted)
                || hasPathCore(matrix, row, col+1, str, pathLen, visted)
                || hasPathCore(matrix, row+1, col, str, pathLen, visted);

            if (!hasPath) {
                pathLen -= 1;
                visted[row][col] = false;
            }
        }
    
    return hasPath;
}

// console.log(hasPath([['A', 'B', 'T', 'G'], ['C', 'F', 'C', 'S'], ['J', 'D', 'E', 'H']], 'ABTH'))
