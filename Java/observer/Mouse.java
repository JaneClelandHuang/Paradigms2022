import java.util.*;
import java.awt.Point;

public class Mouse implements ISubject {
	List<IObserver> observers = new LinkedList<IObserver>();
	Point myPosition = new Point(400,500);
	Point targetPosition;
	Random rand;
	
	public Mouse(){
		targetPosition = new Point(0,0);
		setTargetPosition();
	}
	
	public Point getPosition(){
		return myPosition;
	}
	
	public void setTargetPosition(){
		rand = new Random();
		targetPosition.x = rand.nextInt(800);
		targetPosition.y = rand.nextInt(800);
	}
	
	public void setMousePosition(){
		rand = new Random();
		myPosition.x = rand.nextInt(800);
		myPosition.y = rand.nextInt(800);
	}
	
	@Override
	public void registerObserver(IObserver o) {
		observers.add(o);
	}
	
	@Override
	public void removeObserver(IObserver o){
		if(observers.contains(o))
			observers.remove(o);
	}
	
	@Override
	public void notifyObservers(){
		for(IObserver o: observers){
			o.update(this);
		}
	}
}