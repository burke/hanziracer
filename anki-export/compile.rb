#!/usr/bin/env ruby

hanzi = File
  .readlines('data/merged.csv')
  .map { |f| f.chomp.split(',') }


puts "const hanzi = {"
hanzi.sort.each do |a, b|
  puts "  \"#{a}\": \"#{b}\","
end
puts "};"
puts
puts "export default hanzi;"
