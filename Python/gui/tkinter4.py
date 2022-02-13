from tkinter import * 
root = Tk()
canvas = Canvas(root, width=400, height=400)
canvas.pack()

class MouseMover():
	
    def __init__(self):
        self.previous = (0, 0)
        self.rectangle = canvas.create_rectangle( 
            5, 5, 25, 25, fill = "black") 
        canvas.pack() 
        # Bind mouse events to methods
        canvas.bind("<Button-1>", self.select)# Note the new binding
        canvas.bind("<B1-Motion>", self.drag) # Another new binding
        canvas.bind("<Double-Button-1>", self.print_event) 
        canvas.bind("<ButtonRelease-1>", self.print_event) 
 
    def drag(self, event):
        widget = event.widget
        xc = widget.canvasx(event.x) 
        yc = widget.canvasy(event.y)
        canvas.move(self.rectangle, xc-self.previous[0], yc-self.previous[1])
        self.previous = (xc, yc)

    def select(self, event):
        print("Item selected")
        widget = event.widget # Get handle to canvas 
        # Convert screen coordinates to canvas coordinates
        xc = widget.canvasx(event.x); 
        yc = widget.canvasy(event.y)
        print((xc, yc, self.rectangle))
	
    def print_event(self, event): 
        position = "(x={}, y={})".format(event.x, event.y) 
        print(event.type, "event", position) 

# Get an instance of the MouseMover object
mm = MouseMover()

root.mainloop()

