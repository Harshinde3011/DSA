#include <iostream>
#include <vector>
#include <utility>
using namespace std;

void pairConcept(){
    pair<int, int> p = {1, 2};
    cout << "First: " << p.first << " " << "Second: " << p.second << endl;

    pair<int, pair<int, int>> s = { 1, { 3, 4 } };
    cout << "First: " << s.first << " " << "Second: " << s.second.first << " " << s.second.second << endl;

    pair<int, int> array[] = { {1, 2}, {3, 4}, {5, 6} };
    cout<< array[1].first << endl;
}

void vectorConcept(){
    vector<int> v;

    // add element in vector
    v.push_back(1);
    v.emplace_back(2);

    vector<pair <int, int>> vec;

    vec.push_back({1,2});
    vec.emplace_back(1, 2);
    vec.pop_back();

    vector<int> v1(5); // create vector with size 5; you can add extra elements too, v1(5, 20) will add 20 five times 
    vector<int> v2(v1); // copies v1

    cout<< "first ele of vector v: "<< v[0] << endl;

    // iterator
    vector<int>:: iterator it = v.begin();
    it++;

    cout << "second ele from vector v: " << *it << endl;
    cout << "back :" << v.back() << endl;
    // this points to next to last element
    vector<int>:: iterator it = v.end();

    for (auto i = v.begin(); i != v.end(); i++)
    {
        /* code */
        cout << "i : "<< *(i) << endl;
    }
    
    for (auto  i = v)
    {
        /* code */
        cout << "i : "<< i << endl;
    }

    // { 1,2,3,4,5,6 }
    v.erase(v.begin()+1); // delete 2 
    v.erase(v.begin()+1, v.begin()+4) // deletes 2,3,4

    // Insert function
    vector<int> s(3, 100); // { 100, 100, 100 };
    s.insert(s.begin(), 200); // { 200, 100, 100 };

    vector<int> copy(2, 50); // { 50, 50 }
    s.insert(s.begin(), copy.begin(), copy.end());  //  { 50, 50, 200, 100, 100 }

    cout<< "size of vector s: " << s.size() << endl; // 3

    s.swap(copy); // s = { 50, 50 }, copy = { 50, 50, 200, 100, 100 }

    s.clear(); // clears entire vector

    cout << s.empty() // true
}

void listConcepts(){
    list<int> ls;

    ls.push_back(2); // {2}
    ls.emplace_back(4); // { 2, 4}

    ls.push_front(5); // { 5,2,4 }
    
    // rest function works same as vector 
}

void dequeueConcept(){
    dequeue<int> dq;

    dq.push_back(3); // { 3 }
    dq.push_front(2); // { 2, 3 }
    dq.emplace_back(1); // { 2, 3, 1}

    dq.pop_back(); // { 2, 3 }
    dq.pop_front(); // { 3 }

    dq.back();
    dq.front();

    // remain works same as vector
}

void stackConcepts(){ // LIFO
    stack<int> st;

    st.push(1);
    st.push(2);
    st.push(2);
    st.push(3);
    st.push(5);

    cout<< "top: " << st.top() << endl;
    cout<< "size: " << st.size() << endl;
    cout<< "empty: " << st.empty() << endl; // false

    st.pop();
}

void queueConcept(){ // FIFO
    queue<int> q;

    q.push(1);
    q.push(2);
    q.emplace(3); // { 1,2,3 }

    q.back() += 5;
    cout<< q.back() << endl; // 8
    cut<< "front of queue: " << q.front() << endl;  //  1

    q.pop(); // { 2, 8 }
    cut<< "front of queue: " << q.front() << endl;  //  2

}

void priorityQueue(){
    priority_queue<int> pq;

    pq.push(2); // { 2 }
    pq.push(5); // { 5, 2 }
    pq.push(3); // { 5, 3, 2 }
    pq.push(10); // { 10, 5, 3 ,2 } not guranteed but high ordered will alway at top

    cout << "top of pq: "<< pq.top() << endl; // 10

    pq.pop() // removes 10

    while (pq.empty())
    {
        cout << "elements in pq: " << pq.top() << endl;
        pq.pop();
    }

    // minimum heap
    priority_queue<int, vector<int>, greater<int>> pqNew;
    
    pqNew.push(5); // { 5 }
    pqNew.push(2); // { 2, 5 }
    pqNew.push(8); // { 2, 5, 8 }
    pqNew.push(10); // { 2, 5, 8, 10 }

    cout << "new queue's top: " << pqNew.top() << endl;
}

void setConcept(){ // Sorted, unique, logN complexity
    set<int> s;

    s.insert(1);
    s.insert(1);
    s.insert(2);
    s.insert(3);
    s.emplace(5);
    s.insert(4); // { 1,2,3,4,5 }

    auto it = s.find(3);
    cout<< "iterator of set: "<< it << endl;
    // Returns an iterator pointing to 3 if found
    // If not found → returns s.end()

    s.erase(2) // remove 2 from set
}

void mapConcept(){ // unique keys in sorted order
    map<int, int> m;
    map<int, pair<int, int>> mp;
    map<pair<int,int>, int> mpp;

    m[1] = 2; // {1, 2};
    m.emplace({ 3, 1 }); // { {1, 2}, { 3, 1 } }
    m.insert({ 2, 4 }); // { {1, 2}, { 3, 1 }, { 2, 4 } }

    for(auto it: m){
        cout<< it.first << "  "<< it.second<< endl;
    }

    cout<< m[1]; // 2
    cout << m[3]; // 1

    mp.size();
    mp.empty();

    auto it = m.find(3);
    cout << *(it).second << endl;

    auto it1 = mp.lower_bound(2); // >= 2
    auto it2 = mp.upper_bound(2); // > 2
}

void extraConcepts(){
    sort(a, a+n); // start, end, you can give start and end according to ur requirement
    sort(v.begin(), v.end()) // vector
    sort(a, a+n, greater<int) // sort in decending order

    string s = "123";

    do
    {
        /* code */
        cout<< s << endl;  // 132, 312,321, 231, 213
    } while (next_permutation(s.begin(), s.end()));
    
    int maxelement = max_element(a, a+n);
    int minelement = min_element(a, a+n);
}

int main(){
    pairConcept();
    vectorConcept();
    listConcepts();
    dequeueConcept();
}