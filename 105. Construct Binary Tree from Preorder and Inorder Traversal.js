/* 
105. Construct Binary Tree from Preorder and Inorder Traversal

https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
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
