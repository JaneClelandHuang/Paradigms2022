from tkinter import * 
root = Tk()
canvas = Canvas(root, width=400, height=400)
canvas.pack()

class MouseMover():

    def __init__(self):       
        self.width = 20
        self.height = 20
        self.rectangle = canvas.create_rectangle( 
            0, 0, 20, 20, fill = "black")
        self.shape = None
        self.offset = (0,0) # Position of cursor with respect to the rectangle
        self.rectPosition = canvas.coords(self.rectangle)
        self.previous = (self.rectPosition[0]+(self.rectPosition[2]/2),self.rectPosition[1]+(self.rectPosition[3]/2))
        print(self.previous)
        canvas.pack() 
        # Bind mouse events to methods
        canvas.bind("<Button-1>", self.select)# Note the new binding
        canvas.bind("<B1-Motion>", self.drag) # Another new binding
        canvas.bind("<Double-Button-1>", self.print_event) 
        canvas.bind("<ButtonRelease-1>", self.release) 
 
    def drag(self, event):
        #print("Do nothing")
        if (self.shape == self.rectangle):
            widget = event.widget
            xc = widget.canvasx(event.x) 
            yc = widget.canvasy(event.y)
			
            # Compute offset
            #self.offset = (self.previous[0]-xc,self.previous[1]-yc)
            canvas.move(self.rectangle, xc-self.previous[0], yc-self.previous[1])
            self.previous = (xc, yc)
            print("NEW")
            print(xc)
            print(self.rectPosition[2])
            print(self.rectPosition[0])
            print(yc)
            print(self.rectPosition[3])
            print(self.rectPosition[1])
            print(self.offset[0])
            self.rectPosition[0] = xc-self.width/2#+self.offset[0] #self.rectPosition[0]+xc+self.offset[0]
            self.rectPosition[1] = yc-self.height/2#+self.offset[1] #self.rectPosition[1]+yc+self.offset[1]
            self.rectPosition[2] = self.rectPosition[0]+self.width
            self.rectPosition[3] = self.rectPosition[1]+self.height


    def release(self,event):
        if (self.shape == self.rectangle):
            widget = event.widget
            xc = widget.canvasx(event.x) 
            yc = widget.canvasy(event.y)
            #self.rectPosition[0] = xc+self.offset[0] #self.rectPosition[0]+xc+self.offset[0]
            #self.rectPosition[1] = yc+self.offset[1] #self.rectPosition[1]+yc+self.offset[1]
            #self.rectPosition[2] = self.rectPosition[0]+self.width/2
            #self.rectPosition[3] = self.rectPosition[1]+self.height/2

    def setSelectedShape(self,xCoord,yCoord,rectPosition):
        print("HELLO")
        print(xCoord)
        print(rectPosition[2])
        print(rectPosition[0])
        print(yCoord)
        print(rectPosition[3])
        print(rectPosition[1])

        if (self.rectPosition[0] < xCoord < self.rectPosition[2] and rectPosition[1] < yCoord < rectPosition[3]):
            print("INSIDE SHAPE")
            self.shape = self.rectangle			
        else:
            self.shape = None

    def select(self, event):
        widget = event.widget # Get handle to canvas 
        # Convert screen coordinates to canvas coordinates
        xc = widget.canvasx(event.x) 
        yc = widget.canvasy(event.y)
        self.setSelectedShape(xc,yc,self.rectPosition)
        print((xc, yc, self.rectangle))
	
    def print_event(self, event): 
        position = "(x={}, y={})".format(event.x, event.y) 
        print(event.type, "event", position) 

# Get an instance of the MouseMover object
mm = MouseMover()

root.mainloop()

