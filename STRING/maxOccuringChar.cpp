#include<iostream>
#include<map>
using namespace std;

int main(){
    string str = "harsh";

    map<char, int> mapping;

    int min = 0;
    int count = 1;
    char maxChar;
    for (int i = 0; i < str.length(); i++)
    {
        auto at = mapping.find(str[i]);
        if (at == mapping.end())  // check 'at' points to end, if not then char is present 
        {
           mapping[str[i]] = 1;
        }else 
        {
            at->second++;
        }  
    }

    for (auto p : mapping) {
        cout << p.first << " -> " << p.second << endl;
        if (p.second > min)
        {
            min = p.second;
            maxChar = p.first;
        }   
        
    }

    cout<< "max occurance char is : " << maxChar;
    
}