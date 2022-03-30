import org.junit.*;

public class MySimpleMathTest2 {
    
    @Test
    public void testCheckSignShouldReturnPositive() {
        MySimpleMath2 sm = new MySimpleMath2();
        Assert.assertEquals("positive", sm.checkSign(5));
        Assert.assertEquals("positive", sm.checkSign(0));
    }
    
    @Test
    public void testCheckSignShouldReturnNegative() {
        MySimpleMath2 sm = new MySimpleMath2();
        Assert.assertEquals("negative", sm.checkSign(-5));
    }
    
}