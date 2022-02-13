# Displays a simple tkinter window
# Remember Python 3 needs tkinter (not Tkinter)
import tkinter as tk

root = tk.Tk()

w = tk.Label(root, text="Hello tkinter!")
w.pack()

root.mainloop()

