/* 
892. 三维形体的表面积

https://leetcode-cn.com/problems/surface-area-of-3d-shapes/

在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。

示例 1：

输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46

提示：

1 <= N <= 50
0 <= grid[i][j] <= 50
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let result = 0;

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j]) {
                // 当前单元格叠加次数
                let temp = grid[i][j] * 6 - (grid[i][j] - 1) * 2;

                // 上下左右单元格的叠加次数
                if (j-1 >= 0 && grid[i][j-1]) {
                    temp -= grid[i][j-1] > grid[i][j] ? grid[i][j] : grid[i][j-1];
                }

                if (j+1 < grid[i].length && grid[i][j+1]) {
                    temp -= grid[i][j+1] > grid[i][j] ? grid[i][j] : grid[i][j+1];
                }

                if (i-1 >=0 && grid[i-1][j]) {
                    temp -= grid[i-1][j] > grid[i][j] ? grid[i][j] : grid[i-1][j];
                }

                if (i+1 < grid.length && grid[i+1][j]) {
                    temp -= grid[i+1][j] > grid[i][j] ? grid[i][j] : grid[i+1][j];
                }

                result += temp;
            }
        }
    }

    return result;
};
