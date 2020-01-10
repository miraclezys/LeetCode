/* 
面试题6：从尾到头打印链表
题目：输入一个链表的头结点，从尾到头反过来打印出每个结点的值。
*/

function PrintListReversingly_Iteratively(pHead) {
    let nodes = [];
    let pNode = pHead;

    while(pNode) {
        nodes.push(pNode.value);
        pNode = pNode.next;
    }

    for(let i = nodes.length - 1; i >= 0; i--) {
        console.log(nodes[i]);
    }
}

function PrintListReversingly_Recursively(pHead) {
    if (pHead) {
        if (pHead.next) {
            PrintListReversingly_Recursively(pHead.next);
        }

        console.log(pHead.value)
    }
}
