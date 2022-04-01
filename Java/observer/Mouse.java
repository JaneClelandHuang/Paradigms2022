public class Mouse implements ISubject {
	List<Observer> observers = new LinkedList<Observer>();
	Point myPosition = new Point(400,500);
	Point targetPosition;
	Random rand;
	
	public Mouse(){
		targetPosition = new Point(0,0);
		setTargetPosition();
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
	public void registerObserver(Observer o) {
		observers.add(o);
	}
	
	@Override
	public void removeObserver(Observer o){
		if(observers.contains(o))
			observers.remove(o);
	}
}