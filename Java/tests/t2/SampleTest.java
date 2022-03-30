import org.junit.*;

public class SampleTest {

    private SampleClass sampleClass;

    @BeforeClass
    public static void beforeClassFunction(){
        System.out.println("Before Class");
    }

    @Before
    public void beforeFunction(){
        sampleClass=new SampleClass();
        System.out.println("Before Function");
    }

    @After
    public void afterFunction(){
        System.out.println("After Function");
    }

    @AfterClass
    public static void afterClassFunction(){
        System.out.println("After Class");
    }

    @Test
    public void initializeTest(){
        Assert.assertEquals("Initailization check", "Initialize", sampleClass.initializeData() );
    }
}