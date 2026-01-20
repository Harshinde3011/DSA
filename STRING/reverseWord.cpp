#include<iostream>
using namespace std;

void reverseString(char quote[], int s, int e){
    while (s < e)
    {
        swap(quote[s++], quote[e--]);
    }
}

bool isValidCharacter(char ch){
    cout<< "Now I am validating for char: " << ch << endl;
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'))
    {
        return 1;
    }else{
        return 0;
    }
}

int main(){
    char quote[] = "my name is harsh";

    int s = 0;
    int i = 0;
    for (; quote[i] != '\0'; i++)
    {
        int checkValid = isValidCharacter(quote[i]); // when " ", got the set e and s to reverse string
        if (!checkValid)
        {
            int e = i - 1;
            cout<< "start: " << quote[s] << " end: " << quote[e] << endl;
            reverseString(quote, s, e);
            cout<< "reverse of your name: " << quote << endl;
            s = i + 1;
        }
        
    }

    reverseString(quote, s, i-1); // for last word
    cout<< quote;
    
}