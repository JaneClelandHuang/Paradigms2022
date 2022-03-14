import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class DeadLockDemo {

    public static void main (String[] args) throws InterruptedException {
        List<Integer> list1 = new ArrayList<>(Arrays.asList(2, 4, 6, 8, 10));
        List<Integer> list2 = new ArrayList<>(Arrays.asList(1, 3, 7, 9, 11));

        Thread thread1 = new Thread(() -> {
            moveListItem(list1, list2, 2);
        });
        Thread thread2 = new Thread(() -> {
            moveListItem(list2, list1, 9);
        });

        thread1.start();
        thread2.start();
    }

    private static void moveListItem (List<Integer> from, List<Integer> to, Integer item) {
        synchronized (from) {
            synchronized (to) {
                if(from.remove(item)){
                  to.add(item);
                }
            }
        }
    }
}