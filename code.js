function hasCycle(graph) {
    let n = graph.length;
    let visited = new Array(n).fill(false);
    let tracking = new Array(n).fill(false);

    function searchCycle(parent, node) {
        if(visited[node]) return false;
        if(tracking[node]) return true;
        visited[node] = true;
        tracking[node] = true;
        for(const neighbor of graph[node]) {
            if(!visited[neighbor]) {
                if(neighbor !== parent && searchCycle(node, neighbor)) {
                    return true;
                }
            }
        }
        tracking[node] = false;
        return false;
    }
    for(let i = 0; i < n; i++) {
        if(!visited[i] && searchCycle(-1, i)) {
            return true;
        }
    }
    return false;
}
