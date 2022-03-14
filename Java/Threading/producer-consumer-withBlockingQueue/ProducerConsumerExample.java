public class ProducerConsumerExample { 
    public static void main(String[] args) 
        throws InterruptedException 
    { 
        // Object of a class that has both produce() 
        // and consume() methods 
        final ProducerConsumerWithBlockingQueue pc = new ProducerConsumerWithBlockingQueue(); 
  
        // Create producer thread 
        Thread t1 = new Thread(new Runnable() { 
            @Override
            public void run() { 
                try { 
                    pc.produce(); 
                } 
                catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
  
        // Create consumer thread 
        Thread t2 = new Thread(new Runnable() { 
            @Override
            public void run() { 
                try { 
                    pc.consume(); 
                } 
                catch (InterruptedException e) { 
                    e.printStackTrace(); 
                } 
            } 
        }); 
  
        // Start both threads 
        t1.start(); 
        t2.start(); 
    } 
}