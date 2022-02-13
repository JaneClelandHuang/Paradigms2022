from tkinter import * 
root = Tk()
canvas = Canvas(root, width=400, height=400)
canvas.pack()

class MouseMover():
    def __init__(self):
        # Bind mouse events to methods
        canvas.bind("<Button-1>", self.print_event)
        canvas.bind("<B1-Motion>", self.print_event)
        canvas.bind("<Double-Button-1>", self.print_event) 
        canvas.bind("<ButtonRelease-1>", self.print_event) 
        canvas.bind("<B1-Motion>", self.print_event) 

    def select(self, event):
        widget = event.widget # Get handle to canvas 
        # Convert screen coordinates to canvas coordinates
        xc = widget.canvasx(event.x); 
        yc = widget.canvasy(event.y)
        print((xc, yc, self.item))
	
    def print_event(self, event): 
        position = "(x={}, y={})".format(event.x, event.y) 
        print(event.type, "event", position) 

# Get an instance of the MouseMover object
mm = MouseMover()

root.mainloop()