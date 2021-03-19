var hasCycle = function(head) {
    if (head == null) {
        return false
    }
    let nodesSeen = new Set();
    while (head.next != null) {
        if (nodesSeen.has(head)) {
            return true 
        } else {
            nodesSeen.add(head)
            head = head.next
        }
    } return false
    
};