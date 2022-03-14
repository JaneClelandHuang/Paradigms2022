import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public class DeadLockDemo2 {

    public static void main (String[] args) throws InterruptedException {
    	Random rand = new Random();
        List<Integer> list1 = new ArrayList<>(Arrays.asList(2, 4, 6, 8, 10, 6, 4, 1));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(1, 3, 7, 9, 11));

        Thread thread1 = new Thread(() -> {
         	while (true) {
         		if (list1.size() > 0) {
         			int moveItem = list1.get(rand.nextInt(list1.size()));         		 	
         			moveListItem(list1, list2, moveItem);
         		}
        	}
        });
        Thread thread2 = new Thread(() -> {
        	while (true) {
        		if (list2.size() > 0) {
        			int moveItem = list2.get(rand.nextInt(list2.size())); 	
        			moveListItem(list2, list1, moveItem);
        		}
        	}
        });

        thread1.start();
        thread2.start();
    }

    private static void moveListItem (List<Integer> from, List<Integer> to, Integer item) {
        synchronized (from) {
            synchronized (to) {
                if(from.remove(item)){
                  System.out.println("\nFrom: " + from.toString());
                  System.out.println("To: " + to.toString());
                  System.out.println("Item: " + item);
                  to.add(item);
                }
            }
        }
    }
}