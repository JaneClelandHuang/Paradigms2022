import java.util.Arrays;
import java.util.List;

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
class Cow extends Animal {
	Cow(String name){
		super(name);
	}
	@Override
	void speak() {
		System.out.println("Mooo");
	}
}

public class AnimalChorusApp {
	public static void chorus(List<? extends Animal> animals) {
		for (Animal animal: animals) 
			animal.speak();
	}
	public static void main(String[] args) {
		List<Cow> cows = Arrays.asList(new Cow("Bessie"));
		List<Sheep> sheep = Arrays.asList(new Sheep("Wooly"));
		chorus(cows);
		chorus(sheep);
	}
}
