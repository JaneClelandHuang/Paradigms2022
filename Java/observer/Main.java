public class Main
{
    public static void main(String[] args) {
        Mouse mouse = new Mouse();
        Cat cat1 = new Cat();
        Cat cat2 = new Cat();
        mouse.registerObserver(cat1);
        mouse.registerObserver(cat2);
		mouse.move();
		cat1.move();
		cat1.move();
		cat1.move();
		cat2.move();
		cat2.move();
		cat2.move();
		
    }
}