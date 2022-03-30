public class MySimpleMath3 {
    
    /**
     * A simple method that takes and input and returns
     * "positive" or "negative" depending on the input number 
     */
    public String checkSign(int number) {
        if(number >= 0 ) {
            return "positive";
        } else {
            return "negative";
        }
    }

    /**
     * Returns the division of numerator by the denominator.
     * If the denominator is zero, it throws an Exception
     */
    public double divide(int num, int denom) {
        if(denom == 0) { 
            throw new ArithmeticException("Cannot divide by zero");
        } else {
            return num/(double)denom;
        }
        
    }
    
}