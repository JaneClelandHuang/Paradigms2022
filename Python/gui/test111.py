from tkinter import *

master = Tk()
w = Canvas(master, width=500, height=300)
currColor = 0

def change_color():
   if currColor == 0:
       canvas.itemconfig(rectangle, fill='green')
       currColor = 1
   else:
       canvas.itemconfig(rectangle, fill='blue')
       currColor = 0


rectangle = w.create_oval(60,60,210,210, fill='blue')
w.pack()


w.Button(win, text="Change Color", command=change_color).pack()
mainloop()

