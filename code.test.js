const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

function testCycles() {
    const testCases = [
        // Test 1 with cycle
        {
            graph: [[1, 3], [0, 2], [1, 3], [0, 2]],
            expected: true
        },
        // Test 2 without cycle
        {
            graph: [[1], [0, 2], [1, 3], [2, 4], [3]],
            expected: false
        },
        // Test 3 with cycle
        {
            graph: [[1, 2], [0, 3], [0, 3], [1, 2]],
            expected: true
        },
        // Test 4 without cycle
        {
            graph: [[1, 2], [0], [0, 3], [2]],
            expected: false
        },
        // Test 5 with cycle
        {
            graph: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3]],
            expected: true
        }
    ];

    testCases.forEach(({ graph, expected }, index) => {
        const result = hasCycle(graph);
        console.log(`Test case ${index + 1}: expected ${expected}, got ${result}`);
        assert.strictEqual(result, expected, `Test case ${index + 1} failed`);
    });

    console.log('All test cases passed!');
}

testCycles();
