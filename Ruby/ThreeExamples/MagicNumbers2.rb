10.upto(40) do |c| 
    10.upto(c - 1) do |b| 
        10.upto(b - 1) do |a| 
            puts "#{a}, #{b}, #{c}" if a * a + b * b == c * c 
        end 
    end 
end 
