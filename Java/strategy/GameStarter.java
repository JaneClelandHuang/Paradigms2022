package strategy;

import strategy.ducks.MallardDuck;
import strategy.fly.FlyNoWay;
import strategy.fly.FlyWithWings;
import strategy.quack.Peep;
import strategy.quack.QuackLikeADuck;

/**
 * Sets up game
 * @author Jane
 *
 */
public class GameStarter {
	
	public void setup(){
		MallardDuck mallard = new MallardDuck(new FlyWithWings(), new QuackLikeADuck());
		mallard.doYourThing();
		mallard.setFlyStrategy(new FlyNoWay());
		mallard.setQuackStrategy(new Peep());
		mallard.doYourThing();
	}
	
	// Any ways to improve the design?
	public static void main(String[] args) {
		GameStarter gameStarter = new GameStarter();
		gameStarter.setup();
	}

}
