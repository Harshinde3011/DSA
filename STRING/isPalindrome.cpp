#include<iostream>
using namespace std;

bool isValidCharacter(char ch){
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
    {
        return 1;
    }else{
        return 0;
    }
}

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

bool isPalindrome(string temp){
    int s = 0;
    int e = temp.length() - 1;

    while (s < e)
    {
       if ((temp[s]) != (temp[e]))
       {
            return 0;
       }else {
        s++;
        e--;
       }
    }
    return 1;
}

int main(){
    string str = "A man, a plan, a canal: Panama"; // amanaplanacanalpanama is palindrome

    // 1. remove unwanted part like space and special chars
    string temp;
    for (int i = 0; i < str.length(); i++)
    {
        int checkvalidCh = isValidCharacter(str[i]);

        if (checkvalidCh)
        {
            char ch = toLowerCase(str[i]);
            temp.push_back(ch);
        }
        
    }

    // 2. convert to lower case
    cout<< "String after conveting into lower case: " << temp << endl;

    int check = isPalindrome(temp);
    cout<< "is string palindrome: " << check <<endl;
    
}