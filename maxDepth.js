/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the
longest path from the root node down to the farthest leaf node.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.
*/

/*
  Attempted Pseudocode
  *attempting to use iterative BFS
  If node is empty, return 0, there is no tree.
  Create a queue with any delimiter to help us figure out the levels,
  in my case, I use the number '1'. We'll also have the root node inside the queue
  at the start.

  We'll deque the queue, and if we encounter our delimiter '1', we'll
  enque it back into our queue and increment our level variable.

  If our deque is a node, we'll enque its children.

  We repeat this process until the last item in our queue is '1',
  which means we're out of nodes.

*/
var maxDepth = function(node) {
  if (node == null) {
      return 0;
  }

  let queue = [1, node];
  let level = 0;

  while (queue.length > 1) {
    let item = queue.shift();
    if (item === 1) {
        queue.push(1);
        level++;
    }

    if (item != null) {
        if (item.left)
          queue.push(item.left);
        if (item.right)
          queue.push(item.right);
    }
  }

  return level;

};
