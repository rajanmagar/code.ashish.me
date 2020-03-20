/**
 * 
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

/* 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot is trying to reach 
 * the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * 
 * Example 1:
 * 
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 * Example 2:
 * 
 * Input: m = 7, n = 3
 * Output: 28
 *  
 * 
 * Constraints:
 * 
 * 1 <= m, n <= 100
 * It's guarantee
*/

function uniquePaths(n, m) {
  let dpMatrix = []
  for (let row = 1; row <= n; row++) {
    dpMatrix.push([])
  }
  
  console.log(dpMatrix)
  //return value
}

console.log(uniquePaths(7, 3))
// test('unique Paths', () => {
//   //expect(uniquePaths(3, 2)).toEqual(3)
//   expect(uniquePaths(7, 3)).toEqual(28)
// });