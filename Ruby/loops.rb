# Example 1: until loop
puts "Example 1"
i = 1 #Variable for iteration called 'i' which starts at 1

until i > 5 
	puts i #Output the loop count
	i = i + 1 
end 

# Example 2: do while loop
puts "Example 2"
i = 1

while i <= 5
	puts i
	i = i + 1
end

# Example 3: each_index
puts "Example 3"
employees = ['Joe', 'Charlie', 'Fred', 'Reeve']

employees.each_index do |i|
	puts i + 1 #Output 1 to 4
end

# Example 4: 
puts "Example 4"
5.times do |i|
	puts i
end



