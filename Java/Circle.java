class Circle {
	private double x;
	private double y;
	private double r;
	
	// Constructor
	public Circle (double x, double y, double r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	// Creates a new circle and returns it
	public static Circle create (double x, double y, double r) {
		return new Circle (x,y,r);
	}
	
	// Returns the area of this objects circle
	public double area() {
		return Math.PI * this.r * this.r;
	}
	
	// Returns the area of a circle with radius r
	public static double area(double r) {
		return Math.PI * r * r;
	}
}


		