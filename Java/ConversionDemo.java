public class ConversionDemo {
     public static void main(String[] args) {
        long a = 1;
        long b = 2;
        long min = -9223372036854775808L;
        long max = 9223372036854775807L;
		long testLongVar = 9223372036854775700L;
		int testIntVar = 10;

        System.out.println(a);
        System.out.println(b);
        System.out.println(a + b);
        System.out.println(min);
        System.out.println(max);
		System.out.println(testLongVar + testIntVar);
		System.out.println(testIntVar + testLongVar);
    }
}
