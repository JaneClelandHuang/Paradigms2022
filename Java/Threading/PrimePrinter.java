import java.util.Random; 

public class PrimePrinter {
	public static void main(String[] args) {
		Random rand = new Random();
		for (int i = 1; i <= 100; i++) {
			final int candidate = i;
			new Thread(() -> {
				for (int divisor = 2; divisor <= candidate; divisor++){
					if (divisor == candidate) {
						try {
							Thread.sleep(rand.nextInt(2000));
						} catch (Exception e){}
						synchronized (System.out) {
							System.out.print(" " + candidate);
						}
					} else if (candidate % divisor == 0) {
						break;
					}
				}
			}).start();
		}
	}
}