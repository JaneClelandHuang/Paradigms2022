class Test { 
  int i; 
  public Test(){
	  System.out.println(i);
  }
}  
class TypeDemo2 { 
  public static void main(String args[]) {  
      Test t = new Test();  
      System.out.println(t.i); 
   }  
} 
