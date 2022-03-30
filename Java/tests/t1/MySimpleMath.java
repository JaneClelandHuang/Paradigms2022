public class MySimpleMath {
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
    
}