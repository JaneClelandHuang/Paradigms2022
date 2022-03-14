package strategy.fly;

public class FlyWithWings implements IFlyStrategy{

	@Override
	public void fly() {
		System.out.println("Duck is flying with wings");		
	}

}
