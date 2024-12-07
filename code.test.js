const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

// Test 1 empty graph
let graph = [];
let result = hasCycle(graph);
assert.strictEqual(result, false, 'Test 1 empty graph failed');

// Test 2 without cycle
graph = [
    [1],
    [0, 2],
    [1, 3],
    [2]
];
result = hasCycle(graph);
assert.strictEqual(result, false, 'Test 2 without cycle failed');

// Test 3 with cycle
graph = [
    [1, 2],
    [0, 2],
    [0, 1, 3],
    [2]
];
result = hasCycle(graph);
assert.strictEqual(result, true, 'Test 3: Graph with a cycle failed');

// Test 4 disconnected graph without cycle
graph = [
    [1],
    [0],
    [3],
    [2]
];
result = hasCycle(graph);
assert.strictEqual(result, false, 'Test 4 disconnected graph without cycle failed');

// Test 5 disconnected graph with cycle
graph = [
    [1],
    [0],
    [3, 4],
    [2, 4],
    [2, 3]
];
result = hasCycle(graph);
assert.strictEqual(result, true, 'Test 5 disconnected graph with cycle failed');

console.log('All tests passed!');
