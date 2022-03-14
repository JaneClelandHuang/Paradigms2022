package strategy.ducks;

import strategy.fly.IFlyStrategy;
import strategy.quack.IQuackStrategy;
import strategy.quack.QuackLikeADuck;

/**
 * Mallard duck for use in fake game
 * @author Jane
 * @since 8/30/2017
 */
public class MallardDuck{
	private IFlyStrategy flyStrategy;
	private IQuackStrategy quackStrategy;
	
	/**
	 * Constructor
	 * @param flyStrategy  Sets fly strategy
	 * @param quackLikeADuck Sets quack strategy
	 */
	public MallardDuck(IFlyStrategy flyStrategy, QuackLikeADuck quackLikeADuck){
		setFlyStrategy(flyStrategy);
		setQuackStrategy(quackLikeADuck);
	}
	
	// For testing purposes
	public IFlyStrategy getFlyStrategy(){
		return flyStrategy;
	}
	
	// For testing purposes
	public IQuackStrategy getQuackStrategy(){
		return quackStrategy;
	}
	
	/**
	 * Sets or resets fly strategy
	 * @param flyStrategy Sets fly strategy
	 */
	public void setFlyStrategy(IFlyStrategy flyStrategy){
		this.flyStrategy = flyStrategy;
	}
	
	/**
	 * Sets or resets quack strategy
	 * @param quackStrategy Sets quack strategy
	 */
	public void setQuackStrategy(IQuackStrategy quackStrategy){
		this.quackStrategy = quackStrategy;
	}
	
	/**
	 * Mallard duck flies and quacks according to the set strategies
	 */
	public void doYourThing(){
		flyStrategy.fly();
		quackStrategy.quack();
	}
}
