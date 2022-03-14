// This is the leaf node.
// It has not walls or carpets so we won't give it any colors.
public class LeafNode implements Component{
	String name;
	
	// Constructor
	public LeafNode(String name) {
		this.name =  name;
	}
	
	@Override
	public void display() {
		System.out.println(this.name);		
	}

	@Override
	// We want it to DO NOTHING if we tell it to setColor
	public void setColor(String color) {}

	@Override
	// If this node is the areaName return this object; otherwise return null;
	public Component getAreaObject(String areaName) {
		if (this.name.equals(areaName))
			return this;
		else
			return null;
	}

}
