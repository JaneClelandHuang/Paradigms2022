from tkinter import *

running = True  # Global flag

def scanning():
    if running:  # Only do this if the Stop button has not been clicked
        print ("hello")

    # After 1 second, call scanning again (create a recursive loop)
    root.after(100, scanning)

def up():
    """Enable scanning by setting the global flag to True."""
    print("Up")
    global running
    running = True

def down():
    """Stop scanning by setting the global flag to False."""
    print("Down")
    global running
    running = True

root = Tk()
root.title("Title")
root.geometry("500x500")

app = Frame(root)
app.grid()

up = Button(app, text="Move up", command=up)
down = Button(app, text="Move down", command=down)

up.grid()
down.grid()

root.after(1000, scanning)  # After 1 second, call scanning
root.mainloop()