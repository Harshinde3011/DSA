#include <iostream>
using namespace std;

/*
    Node class represents a single node of a Binary Tree
*/
class node {
public:
    int data;       // value stored in the node
    node* left;     // pointer to left child
    node* right;    // pointer to right child

    // Constructor: initializes a node with given data
    node(int d) {
        this->data = d;
        this->left = NULL;
        this->right = NULL;
    }
};  // <-- semicolon was missing in your code

/*
    Function: buildTree
    Purpose:
    - Builds a binary tree using recursion
    - Takes input in PREORDER manner
    - -1 indicates no node (NULL)

    Parameter:
    - root: pointer to current node (initially NULL)

    Return:
    - pointer to root of the constructed tree/subtree
*/
node* buildTree(node* root) {

    int data;

    // Ask user to enter data for current node
    cout << "Enter data (-1 for NULL): ";
    cin >> data;

    // Base case: if user enters -1, no node is created
    if (data == -1) {
        cout << "NULL node encountered, returning NULL\n";
        return NULL;
    }

    // Create a new node with given data
    root = new node(data);
    cout << "Created node with value: " << data << endl;

    // Build left subtree
    cout << "Going to LEFT child of node " << data << endl;
    root->left = buildTree(root->left);

    // Build right subtree
    cout << "Going to RIGHT child of node " << data << endl;
    root->right = buildTree(root->right);

    // Return current node address to parent call
    cout << "Returning node " << data << " to its parent\n";
    return root;
}

int main() {

    /*
        root pointer initially points to NULL
        It will store address of the root node after tree construction
    */
    node* root = NULL;

    cout << "---- Start Building Binary Tree ----\n";

    // Function call to build entire tree
    root = buildTree(root);

    cout << "---- Binary Tree Construction Completed ----\n";

    return 0;
}
