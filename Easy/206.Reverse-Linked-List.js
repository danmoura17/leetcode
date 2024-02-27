/*
Problem: 206. Reverse Linked List
%PROBLEM_DESCRIPTION%
- URL: https://leetcode.com/problems/reverse-linked-list/description/
- Difficulty: Easy

Approach: 
%APPROACH_DESCRIPTION%

Complexity:
- Time: 
- Space: 

Key Insights:
- 
*/


const ReverseLinkedList = () => {

    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    
    function arrayToList(array) {
        let head = null;
        let tail = null;
        for (const value of array) {
            const newNode = new ListNode(value);
            if (!head) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = newNode;
            }
        }
        return head;
    }
    
    const reverseList = (head) => {
        if (!head || !head.next) {
            return head;
        }
    
        const reversed = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return reversed;
    };
    
    function printList(head) {
        let curr = head;
        const elements = [];
        while (curr !== null) {
            elements.push(curr.val);
            curr = curr.next;
        }
        console.log(elements);
    }
    
    // Test cases
    const list1 = arrayToList([1,2,3,4,5]);
    const list2 = arrayToList([1,2]);
    const list3 = arrayToList([]);
    
    printList(reverseList(list1)); // [5,4,3,2,1]
    printList(reverseList(list2)); // [2,1]
    printList(reverseList(list3)); // []
    
};

ReverseLinkedList();

module.exports = ReverseLinkedList;
