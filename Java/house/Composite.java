import java.util.ArrayList;
import java.util.List;


// This is your composite class
// ALL areas of your house that can contain other areas need to be instances of this class
// i.e., you do NOT need a House class, or a Room class.  They are just instances of this Composite class.
// See Decorator.java for how to create these instances.

public class Composite implements Component{
	String name;
	String wallColor;  // YOu will need to also have a floorColor!
	List<Component> myChildren = new ArrayList<Component>();  //  As this is a composite class it contains a list of children.
	
	
	// Constructor.
	// Each area needs a name (e.g., House, Upstairs, Bedroom1) and a color.  (Here I set a default color, I think the homework says Beige though)
	public Composite(String name) {
		this.name = name;
		this.wallColor = "White";
	}
	
	// The composite class needs the ability to add its children.
	// eg. your "house" object has two children i.e, "upstairs" and "downstairs".
	// e.g., upstairs has its own children e.g., bedroom1, bathroom.
	public void addChild(Component component) {
		myChildren.add(component);
	}

	@Override
	// This is for printing the house.
	// NOTE I've removed the requirement to indent.
	public void display() {
		System.out.println(this.name + "  " + this.wallColor);	// Composite node prints itself first
		for (Component child: myChildren) {  // then it delegates the task of printing to its children too
			child.display();
		}
	}

	@Override
	// This changes the color.
	// First change the color of THIS object
	// Then delegate the task of changing the color of all its children to each child.
	public void setColor(String color) {
		this.wallColor = color;
		for (Component child: myChildren) {
			child.setColor(color);
		}
		
	}

	@Override
	// This is a helper function.  Its aim is to FIND the object with the areaName e.g., find the Upstairs object
	// and return that object.
	public Component getAreaObject(String areaName) {
		// First check if THIS object is called by the areaName you are looking for.
		if (this.name.equals(areaName))
			return this;
		else {
			// If not, search through its children, and their children etc.
			// Try to follow this code.  The goal is to search until you find the right object
			// and then return it.  So its a bit like a recursive search and when you find the object
			// make sure it gets recursively returned through the layers of objects.
			Component areaObject = null;
			for (Component child: myChildren) {
				areaObject = child.getAreaObject(areaName);
				if (areaObject !=null)
					break;
			}
			return areaObject;
		}		
	}
}
