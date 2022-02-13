from tkinter import * 
root = Tk()
canvas = Canvas(root, width=400, height=400)
canvas.pack()

def fred(event): 
    print('Down arrow key pressed')

canvas.bind("<Down>", fred)
canvas.focus()
canvas.pack()
 
root.mainloop()