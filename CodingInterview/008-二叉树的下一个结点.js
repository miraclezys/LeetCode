/* 
面试题8：二叉树的下一个结点
题目：给定一棵二叉树和其中的一个结点，如何找出中序遍历顺序的下一个结点？
树中的结点除了有两个分别指向左右子结点的指针以外，还有一个指向父结点的指针。
*/

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.parent = null;
}*/

function GetNext(pNode) {
    if (!pNode) {
        return null;
    }

    let pNext = null;

    // 如果节点有右子树，那么下一个节点就是右子树的最左节点
    if (pNode.right) {
        let right = pNode.right;

        while(right.left) {
            right = right.left;
        }

        pNext = right;
    } else if (pNode.parent){
        let pCurrent = pNode;
        let pParent = pCurrent.parent;
        
        // 如果节点没有右子树
        // 1.如果节点是父节点的左子树，那么下一个节点就是该节点的父节点
        // 2.如果节点是父节点的右子树，沿着父节点的指针一直向上遍历，直到找到一个是它父节点的左子节点的节点。
        // 2.如果这样的节点存在，那么这个节点的父节点就是我要要找的下一个节点
        while(pParent && pParent.right === pCurrent) {
            pCurrent = pParent;
            pParent = pCurrent.parent;
        }
        pNext = pParent;
    }

    return pNext;
}