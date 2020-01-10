/* 
面试题7：重建二叉树
题目：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输
入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,
2, 4, 7, 3, 5, 6, 8}和中序遍历序列{4, 7, 2, 1, 5, 3, 8, 6}，则重建出
图2.6所示的二叉树并输出它的头结点。

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let i = 1;

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function helper(inorderList) {
        if (!inorderList || !inorderList.length) return null;

        let rootNode = preorder.shift();
        let rootIndex = inorderList.indexOf(rootNode);

        let root = new TreeNode(rootNode);
        root.left = helper(inorderList.slice(0, rootIndex));
        root.right = helper(inorderList.slice(rootIndex+1, inorderList.length));

        return root;
    }

    return helper(inorder);
};

function buildTree2(preorder, inorder) {
    let p = 0;
    let i = 0;

    function build(stopVal) {
        if (inorder[i] !== stopVal) {
            let root = new TreeNode(preorder[p++]);
            root.left = build(root.val);
            i++;
            root.right = build(stopVal);
            return root;
        }
        return null;
    }
    return build();
}
