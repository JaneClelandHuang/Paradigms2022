import org.junit.*;
import static org.junit.Assert.*;

public class MySimpleArrayOperationsTest {
    
    @Test
    public void testFindMin() {
        MySimpleArrayOperations msao = new MySimpleArrayOperations();
        int[] array = {10, 2, 3, 10, 1, 0, 2, 3, 16, 0, 2};
        assertEquals(0, msao.findMin(array));
        assertNotEquals(10, msao.findMin(array));
    }
    
    @Test (expected = IllegalArgumentException.class)
    public void testFindMinShouldThrowException() {
        MySimpleArrayOperations msao = new MySimpleArrayOperations();
        msao.findMin(new int[]{});
    }
    
    @Test
    public void testMultiply() {
        MySimpleArrayOperations msao = new MySimpleArrayOperations();
        int[] array = {10, 2, 3, 10, 1, 0, 2, 3, 16, 0, 2};
        msao.multiply(array, 10);
        assertArrayEquals(new int[]{100, 20, 30, 100, 10, 0, 20, 30, 160, 0, 20}, array);
    }
    
    @Test (expected = IllegalArgumentException.class)
    public void testMultiplyShouldThrowException() {
        MySimpleArrayOperations msao = new MySimpleArrayOperations();
        msao.multiply(new int[]{}, 0); //method call with dummy arguments
    }
    
}