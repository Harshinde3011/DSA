#include <iostream>
using namespace std;

// functions
void printNumbers(int array[], int size){
    for (int i = 0; i < size; i++)
    {
        cout << array[i] << endl;
    } 
};

// pass by value
void doSomething(int num){
    cout << num << endl;
    num += 5;
    cout << num << endl;
    num += 5;
    cout << num << endl;
}

// pass by ref
void doSomethingWithOriginalValue(int &num){
    cout << num << endl;
    num += 5;
    cout << num << endl;
    num += 5;
    cout << num << endl;
}

int main() {

    // Variables and Data Types
    float price = 99.99;   // decimal number
    double largePrice = 12345.6789; // more precise decimal
    char grade = 'A';      // single character
    string name = "Harsh"; // text
    bool isStudent = true; // true or false
    int age;

    cout << "Name: " << name << endl;
    // cout << "Enter your age: " << endl;
    // cin >> age;
    cout << "Your age is: " << age << endl;
    cout << "Price: " << price << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student? " << isStudent << endl;
    cout << "2 char from string: " << name[2] << endl;
    cout << "length of string: " << name.size() << endl;

    // Conditions
    if (age > 18)
    {
        cout << "Your age an adult: " << endl;
    }else{
        cout << "You are a minor." << endl;
    }

    // Loops
    for (int i = 0; i < 6; i++)
    {
        /* code */
        cout << "Number: " << i << endl;
    }

    int i = 1;
    while (i <= 5)
    {
        cout << i << " ";
        i++;
    }

    // array 
    int numbers[5] = { 1,2,3,4,5 };
    int size = sizeof(numbers) / sizeof(numbers[0]);
    printNumbers(numbers, size);


    // in build function
    int num1 = 40;
    int num2 = 30;

    int maxNumber = max(num1, num2);
    cout << "Max : " << maxNumber << endl;

    
    int minNumber = min(num1, num2);
    cout << "Min : " << minNumber << endl;

    // pass by value
    doSomething(num1);
    cout << "value of num after executing pass by valu fucntion: " << num1 << endl;

    // pass by ref
    doSomethingWithOriginalValue(num1);
    cout << "value of num after executing pass by ref fucntion: " << num1 << endl;

    return 0;
}