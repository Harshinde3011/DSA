#include<iostream>
using namespace std;

char toLowerCase(char ch) {
    if (ch >= 'a' && ch <= 'z') {
        return ch;
    }
    else if (ch >= 'A' && ch <= 'Z') {
        return ch - 'A' + 'a'; // 'C' - 'A' = 67 - 65 = 2, 'a' + 2 = 97 + 2 = 99 → 'c'
    }
    else {
        return ch;   // return as it is if not a letter
    }
}


bool isPalindrome(char name[], int n){
    int s = 0;
    int e = n-1;

    while (s<e)
    {
        if (name[s] != name[e])
        {
            return 0;
        }

        if (isalpha(name[s]) && isalpha(name[e]))
        {
            s++;
            e--;
        }
        
        
    }
    return 1;
}

void reverseString(char name[], int n){
    int s = 0;
    int e = n-1;

    while (s<e)
    {
        swap(name[s++], name[e--]);
    }
}

int getLength(char name[]){
    int count = 0;
    for (int i = 0; name[i] != '\0'; i++)
    {
        count++;
    }
    return count;
}

int main(){
    char name[10];

    cout<< "Enter your name: "<< endl;
    cin >> name;

    // name[2] = '\0';  // act as eleminator, means it wont take any valu after index 2

    cout << "Your name is: " << name;

    int length = getLength(name);
    cout << "length of your name: " << length << endl;
    
    reverseString(name, length);
    cout<< "reverse of your name: " << name << endl;

    int check = isPalindrome(name, length);
    cout<< "is string palindrome: " << check <<endl;

    cout<< "lower case of char: " << toLowerCase('D');

    return 0;
}

// | Function    | Purpose               |
// | ----------- | --------------------- |
// | `isalpha()` | Checks only letters   |
// | `isdigit()` | Checks only digits    |
// | `isalnum()` | Letters or digits     |
// | `islower()` | Lowercase letter      |
// | `isupper()` | Uppercase letter      |
// | `tolower()` | Converts to lowercase |
// | `toupper()` | Converts to uppercase |
