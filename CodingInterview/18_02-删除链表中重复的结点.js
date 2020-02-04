/* 
面试题18（二）：删除链表中重复的结点
题目：在一个排序的链表中，如何删除重复的结点？例如，在图3.4（a）中重复
结点被删除之后，链表如图3.4（b）所示。
*/

function DeleteDuplication(pHead) {
    if (!pHead) {
        return;
    }

    let pPreNode = null;
    let pNode = pHead;

    while(pNode) {
        let pNext = pNode.next;
        let needDelete = false;

        if (pNext && pNext.value === pNode.value) {
            needDelete = true;
        }

        if (!needDelete) {
            pPreNode = pNode;
            pNode = pNode.next;
        } else {
            let value = pNode.value;
            let pToBeDel = pNode;

            while(pToBeDel && pToBeDel.value === value) {
                pNext = pToBeDel.next;
                pToBeDel = pNext;
            }

            if (!pPreNode) {
                pHead = pNext
            } else {
                pPreNode.next = pNext;
            }

            pNode = pNext;
        }
    }
}
