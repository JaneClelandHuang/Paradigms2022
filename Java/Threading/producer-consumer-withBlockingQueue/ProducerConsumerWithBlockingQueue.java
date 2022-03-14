import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class ProducerConsumerWithBlockingQueue { 
	BlockingQueue<Integer> bq = new LinkedBlockingQueue<>(10);
    int capacity = 2; 

    public void produce() throws InterruptedException { 
        int value = 0; 
        while (true) { 
            bq.put(value++);
            System.out.println("Producer produced-"+ value + " Current size " + bq.size()); 
            Thread.sleep(100); 
        } 
    } 
    
    public void consume() throws InterruptedException 
    { 
        while (true) { 
        	int val = bq.take();
            System.out.println("Consumer consumed-"+ val); 
            Thread.sleep(500); 
        } 
    } 
} 