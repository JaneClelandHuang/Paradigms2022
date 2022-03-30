import org.junit.*;

public class MySimpleMathTest {
    
    @Test
    public void testCheckSignShouldReturnPositive() {
        MySimpleMath sm = new MySimpleMath();
        Assert.assertEquals("positive", sm.checkSign(5));
        Assert.assertEquals("positive", sm.checkSign(0));
    }
    
    @Test
    public void testCheckSignShouldReturnNegative() {
        MySimpleMath sm = new MySimpleMath();
        Assert.assertEquals("negative", sm.checkSign(-5));
    }
    
}