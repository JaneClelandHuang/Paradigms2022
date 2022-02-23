import tkinter as tk
from AnimalBehavior import *

class Grid:
    def __init__(self, master):
        #Initialize grid
        self.master = master
        self.keypressed=None
        self.animalType = None
        self.master.title("Lines")
        self.height = 36 
        self.width = 24 
        self.rectangle_size = 15
        self.canvas = tk.Canvas(width=self.width*self.rectangle_size, 
            height=(self.height*self.rectangle_size)+self.height/2)
        self.drawGrid()
        
        # Initialize buttons in a special button frame at bottom of screen
        self.button_frame = tk.Frame(self.master)
        self.button_frame.pack(side="bottom", fill="x", expand=False)
        self.canvas.pack(side="top", fill="both", expand=True)
        
        ######################################################################
        ## TO DO: Create buttons for caterpillar and worm here.  Add them to the grid.
        ######################################################################
        self.button1 = tk.Button(self.button_frame, text="Snake", command=self.createSnake)
        self.button1.grid(row=0, column=1, sticky="ew")

        self.canvas.pack()    

        # Setup a matrix to track the current state of each grid
        self.matrix = [[0 for x in range(self.height+1)] for y in range(self.width+1)] 
        
        ######################################################################
        # bind arrow keys to handlers
        # TO DO: Add Left and Right keypress handlers
        ######################################################################
        master.bind("<Down>", self.handle_down_key)
        master.bind("<Up>", self.handle_up_key)
     
        
        # ####################################################################
        # IF YOU HAVE TIME replace this coarse-grained update with a more fine-grained change mechanism
        # Your game will be much less jerky if you do that.
        ######################################################################
        self.fillGrid(self.matrix)
        
    # Special move function.  
    # Snakes game requires us to keep moving in one direction until we 
    # press another key (a bit of a pain to figure out)
    # TO DO: You need to make the move method actuall move the snake!
    def move(self):
        if (self.keypressed == 1):
            print("Move up")
        elif (self.keypressed == 3):
            print ("Move down")
            
        # After 1 second, call scanning again (create a recursive loop)
        # This construct is very important because it allows the system to
        # continually check for keypresses!
        self.master.after(1000, self.move)    # Replace the 1000 with speeds from animal behavior classes.   
        
    #######################################################################
    #Handlers for keypresses
    #######################################################################
    def handle_up_key(self,event):
        self.keypressed = 1
        self.move()
            
    def handle_right_key(self,event):
        self.keypressed = 2
        self.move()
            
    def handle_down_key(self,event):
        self.keypressed = 3
        self.move()

    def handle_left_key(self,event):
        self.keypressed = 4
        self.move()
        
    ########################################################################
    # Create animals
    # TO DO: Create the two other animals. 
    ########################################################################
    def createSnake(self):
        # Place the 'snake'
        self.animalType = Snake() 
        self.animalType.setStartingPosition(self.width,self.height) #Send the dimensions of the grid
        self.matrix[self.animalType.getX()][self.animalType.getY()] = 1
        self.fillGrid(self.matrix) 
        
    # Draws the grid
    def drawGrid(self):
        # Creates all vertical lines at intervals of rectangle_size
        for i in range(0, self.width*self.rectangle_size, self.rectangle_size):
            self.canvas.create_line([(i, 0), (i, self.height*self.rectangle_size)])

        # Creates all horizontal lines at intervals of 10
        for i in range(0, self.height*self.rectangle_size, self.rectangle_size):
            self.canvas.create_line([(0, i), (self.width*self.rectangle_size, i)])
	
    # Fills the grid given an underlying 2D array where cells are marked 1 if a snake 
    # is present, and 0 otherwise.    
    def fillGrid(self,matrix): #This is more for testing as it is uneconomical
        for w in range(self.width+1):
            for h in range(self.height+1):
                if matrix[w][h] == 1:
                    self.placeMarker(w,h)
                else:
                    self.clearMarker(w,h)				

    # Clears one marker from the grid
    # If you want to use this function you will need to ALSO add an update to the underlying matrix
    def clearMarker(self,x,y):
        x1 = (x-1) * self.rectangle_size
        y1 = (y-1) * self.rectangle_size
        self.canvas.create_rectangle(x1,y1, x1+self.rectangle_size, y1+self.rectangle_size, fill="white")
        self.canvas.pack()	
         
    # Places one marker on the grid
    # If you want to use this function you will need to also update the underlying matrix    
    def placeMarker(self,x,y):
        x1 = (x-1) * self.rectangle_size
        y1 = (y-1) * self.rectangle_size
        self.canvas.create_rectangle(x1,y1, x1+self.rectangle_size, y1+self.rectangle_size, fill=self.animalType.getColor()) #"blue")
        self.canvas.pack()

def main(): #run mainloop 
    root = tk.Tk()
    app = Grid(root)
    root.mainloop()

if __name__ == '__main__':
    main()
    

