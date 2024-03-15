function buildTree1(nodes) {
    let tree = {};
    nodes.forEach(node => {
        if (node.parentId === null) {
            if (!tree[node.id]) {
                tree[node.id] = {};
            }
        } else {
            let parentId = node.parentId;
            let childId = node.id;
            if (!tree[parentId]) {
                tree[parentId] = {};
            }
            if (!tree[parentId][childId]) {
                tree[parentId][childId] = {};
            }
        }
    });
    return tree;
}

function buildTree2(nodes) {
    let tree = {};
    nodes.forEach(node => {
        if (node.parentId === null) {
            tree.id = node.id;
            tree.children = [];
        } else {
            let parentId = node.parentId;
            let childId = node.id;
            let parentNode = findNode(tree, parentId);
            if (!parentNode.children) {
                parentNode.children = [];
            }
            let childNode = { id: childId, children: [] };
            parentNode.children.push(childNode);
        }
    });
    return tree;
}

function findNode(tree, id) {
    if (tree.id === id) {
        return tree;
    }
    if (tree.children) {
        for (let child of tree.children) {
            let found = findNode(child, id);
            if (found) {
                return found;
            }
        }
    }
    return null;
}


const nodes = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 },
    { id: 7, parentId: 4 },
    { id: 8, parentId: 7 },
    { id: 9, parentId: 8 },
];

const tree1 = buildTree1(nodes);
const tree2 = buildTree2(nodes);

console.log("Tree 1:", tree1);
console.log("Tree 2:", tree2);
