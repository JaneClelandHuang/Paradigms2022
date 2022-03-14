package strategy.quack;

public class Peep implements IQuackStrategy{

	@Override
	public void quack() {
		System.out.println("Duck says peep, peep, peep");
	}

}
