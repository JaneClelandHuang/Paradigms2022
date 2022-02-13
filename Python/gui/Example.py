import tkinter as tk

class app(tk.Frame):
    def __init__(self):
        self.root = tk.Tk()
        self.root.geometry("300x200")
        self.label = tk.Label(self.root, text="")
        self.label.pack()
        self.root.bind('<Return>', self.callback)
        self.root.mainloop()

    def callback(self, event):
        self.label["text"] = "You pressed {}".format(event.keysym)
    
app()