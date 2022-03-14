import java.util.HashSet;
import java.util.Set;

abstract class Animal{
	String name;
	Animal(String name){
		this.name = name;
	}
	abstract void speak();
}

class Sheep extends Animal {
	Sheep(String name){
		super(name);
	}
	@Override
	void speak() {
		System.out.println("Baaa");
	}
}

public class SheepAdder {
	public static void main(String[] args){
		Set<? super Sheep> s1 = new HashSet<Object>();
		Set<? super Sheep> s2 = new HashSet<Animal>();
		Set<? super Sheep> s3 = new HashSet<Sheep>();
		Sheep sheep = new Sheep("Rafe");
		s1.add(sheep);
		s2.add(sheep);
		s3.add(sheep);
	}
}