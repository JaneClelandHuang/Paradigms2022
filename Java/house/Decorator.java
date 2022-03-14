public class Decorator {
	
	Composite myHouse;  // This is the important root node of your composite structure
	
	
	// This is the function where we build the house.  You'll have to finish building it as
	// this is incomplete.
	public void BuildHouse() {
		myHouse = new Composite("House");
		Composite upStairs = new Composite("Upstairs");
		Composite downStairs = new Composite("Downstairs");
		
		Composite bed1 = new Composite("Bedroom1");
		
		myHouse.addChild(upStairs);
		upStairs.addChild(bed1);
		bed1.addChild(new LeafNode("Bed"));
		bed1.addChild(new LeafNode("Chair"));
		
		myHouse.addChild(downStairs);	
		
	}
	
	// This is an example function in which I want to set the color
	// of an area AND all its children.
	public void setColor(String areaName, String color) {
		Component myObject = myHouse.getAreaObject(areaName);  // First I search for the areaName and get its Component object back.
		if (myObject != null)  // Check that it isn't null!  i.e., if you have a typo in areaName you will get null back.
			myObject.setColor(color);  // Tell that object to change color.  As we know, it will also tell its children!
	}
	
	// Simple getter so that I can call some methos from main
	public Composite getHouse() {
		return myHouse;
	}
	
	// Print the whole house.  It uses the reference to the root object and tells it to display.
	// In turn all its children will get told to display.
	public void displayHouse(Composite component) {
		myHouse.display();
	}

	public static void main(String[] args) {
		Decorator decorator = new Decorator();
		
		// Build and display
		decorator.BuildHouse();
		decorator.displayHouse(decorator.getHouse());
		
		// Testing changing the color of everything Upstairs.
		decorator.setColor("Upstairs", "Green");
		decorator.displayHouse(decorator.getHouse());			
	}
}
