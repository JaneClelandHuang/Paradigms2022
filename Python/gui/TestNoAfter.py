from tkinter import *


def up():
    print("Up")
    for x in range(0, 500000):
        print(x*x)

def down():
    """Stop scanning by setting the global flag to False."""
    print("Down")

root = Tk()
root.title("Title")
root.geometry("500x500")

app = Frame(root)
app.grid()

up = Button(app, text="Move up", command=up)
down = Button(app, text="Move down", command=down)

up.grid()
down.grid()

root.mainloop()