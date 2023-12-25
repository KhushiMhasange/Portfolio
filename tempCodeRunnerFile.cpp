#include<iostream>
using namespace std;

int main(){
    
    int digits[5] = {9};

    int s = 0;

        if(digits[s]==9){
            digits[s+1] = 0;
            digits[s] = 1;
        } 
        else{
           digits[s]= digits[s]+1;
        }
       
    for(int i = 0; i<4; i++){
        cout<<digits[i];
    }
    

}