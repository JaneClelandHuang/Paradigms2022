/**
 * Sets up game
 * @author Jane
 *
 */
public class GameStarter {
	
	public void setup(){
		MallardDuck mallard = new MallardDuck(new FlyWithWings(), new QuackLikeADuck());
		mallard.setFlyStrategy(new FlyNoWay());
		mallard.setQuackStrategy(new Peep());
		mallard.doYourThing();
		
		RubberDucky ducky = new RubberDucky(new FlyNoWay(), new Peep());
		ducky.doYourThing();
		ducky.setFlyStrategy(new FlyByJumping()); // Duck gets superpowers!
		ducky.setQuackStrategy(new Peep());
		ducky.doYourThing();
	}
	
	// Constructor
	public static void main(String[] args) {
		GameStarter gameStarter = new GameStarter();
		gameStarter.setup();
	}
}


