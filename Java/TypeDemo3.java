class Demo { 
	int a, b; 	
	public Demo(){  
		a = 10; 
		b = 20; 
	} 	
	public void print(){ 
		System.out.println ("a = " + a + " b = " + b + "\n"); 
	} 
} 

class TypeDemo3 {
	public static void main(String[] args) { 
		Demo obj1 = new Demo(); 
		Demo obj2 = obj1; 

		obj1.a += 1; 
		obj1.b += 1; 

		System.out.println ("values of obj1 : "); 
		obj1.print(); 
		System.out.println ("values of obj2 : "); 
		obj2.print(); 
	} 
} 

/*
(A) 
Compile error

(B) CORRECT ANSWER!
values of obj1: 
a = 11 b = 21
values of obj2: 
a = 11 b = 21

(C)
values of obj1: 
a = 11 b = 21
values of obj2: 
a = 10 b = 20

(D)

values of obj1: 
a = 11 b = 20
values of obj2: 
a = 10 b = 21

(E) Run time error
*/


