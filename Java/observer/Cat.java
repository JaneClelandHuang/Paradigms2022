import java.util.*;
import java.awt.Point;

public class Cat implements IObserver {
	Point mousePosition;
	Point catPosition;
	Random rand = new Random();
	
	@Override
	public void update(ISubject s){
		if (s instanceof Mouse) {
			mousePosition = ((Mouse)s).getPosition();
			moveCat();
		}
	}
	
	public Cat(){
		catPosition = new Point(rand.nextInt(800), rand.nextInt(800));
	}
	
	public void moveCat(){
		if(catPosition.x - mousePosition.x < 0)
			catPosition.x++;
		else
			catPosition.x--;
			
		if(catPosition.y-mousePosition.y < 0)
			catPosition.y++;
		else
			catPosition.y--;
	
	    System.out.printnl("Cat: " + catPosition.x + " " + catPosition.y);
	}
}
	
