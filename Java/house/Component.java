// The interface should declare all methods that you want to be
// overridden in the leaf and composite nodes.
// I show examples of three operations
public interface Component {
	public void display();  // display is used for printing
	public void setColor(String color);  // setColor sets a specific color of a room or area
	public Component getAreaObject(String areaName);  // This is a helper function.  Pass it the name of an area and it returns the object.
}
