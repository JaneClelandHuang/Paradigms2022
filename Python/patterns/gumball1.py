class GumballMachine:
    def __init__(self,count):
        self.sold_out = 0
        self.no_quarter = 1
        self.has_quarter = 2
        self.sold = 3
        self.state = self.sold_out
        self.count = count

        if self.count > 0:
            self.state = self.no_quarter

    def insert_quarter(self):
        if self.state == self.has_quarter:
            print ("You can't insert another quarter")
        elif self.state == self.no_quarter:
            self.state = self.has_quarter
            print ("You inserted a quarter")
        elif self.state == self.sold_out:
            print ("You can't insert a quarter, the machine is sold out.")
        elif self.state == self.sold:
            print ("Please wait, we're already giving you a gumball.")

    def eject_quarter(self):
        if self.state == self.has_quarter:
            print ("Quarter returned")
            self.state = self.no_quarter
        elif self.state == self.no_quarter:
            print ("You haven't inserted a quarter")
        elif self.state == self.sold_out:
            print ("You can't eject, you haven't inserted a quarter.")
        elif self.state == self.sold:
            print ("Sorry you already turned the crank.")

    def turn_crank(self):
        if self.state == self.has_quarter:
            print ("Here comes a gumball")
            self.state = self.sold
            self.dispense()
        elif self.state == self.no_quarter:
            print ("You turned but there is no quarter")
        elif self.state == self.sold_out:
            print ("You turned but there are no gumballs")
        elif self.state == self.sold:
            print ("Turning twice doesn't get you an extra gumball.")

    def dispense(self):
        if self.state == self.has_quarter:
            print ("No gumball dispensed")
        elif self.state == self.no_quarter:
            print ("Hey dude, you need to pay first")
        elif self.state == self.sold_out:
            print ("No gumball dispensed")
        elif self.state == self.sold:
            print("A gumball is rolling out the slot")
            self.count = self.count - 1
            if self.count == 0:
                print("Oops out of gumballs")
                self.state = self.sold_out
            else:
                self.state = self.no_quarter

#Client Code
gbm = GumballMachine(5)
gbm.insert_quarter()
gbm.turn_crank()
			
            