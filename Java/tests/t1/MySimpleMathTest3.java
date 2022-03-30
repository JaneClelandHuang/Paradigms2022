import org.junit.*;

public class MySimpleMathTest {
    
    @Test
    public void testCheckSignShouldReturnPositive() {
        MySimpleMath3 sm = new MySimpleMath3();
        Assert.assertEquals("positive", sm.checkSign(5));
        Assert.assertEquals("positive", sm.checkSign(0));
    }
    
    @Test
    public void testCheckSignShouldReturnNegative() {
        MySimpleMath3 sm = new MySimpleMath3();
        Assert.assertEquals("negative", sm.checkSign(-5));
    }
	
	@Test
    public void testDivisionShouldReturnPositiveQuotient() {
        MySimpleMath3 sm = new MySimpleMath3();
        Assert.assertEquals(2.0, sm.divide(10, 5), 0);
        Assert.assertEquals(0.0, sm.divide(0, 5), 0);
    }
    
    @Test
    public void testDivisionShouldReturnNegativeQuotient() {
        MySimpleMath3 sm = new MySimpleMath3();
        Assert.assertEquals(-2.0, sm.divide(10, -5), 0);
    }
    
    @Test (expected = ArithmeticException.class)
    public void testDivisionShouldThrowArithmeticException() {
        MySimpleMath3 sm = new MySimpleMath3();
        sm.divide(10, 0);
    }
    
    
}