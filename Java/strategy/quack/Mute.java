package strategy.quack;

public class Mute implements IQuackStrategy{

	@Override
	public void quack() {
		System.out.println("Duck is silent");
	}
}
