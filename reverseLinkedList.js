/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/* Solution #1, iteratively */
var reverseList = function(head) {
  if (head != null) {
    let curr = head;
    let prev = head;
    let next = curr.next;
    prev.next = null;

    while (next != null) {
        curr = next;
        next = curr.next;
        curr.next = prev;
        prev = curr;
    }
    head = curr;
  }
  return head;
};

/* Solution #2, recursively */
