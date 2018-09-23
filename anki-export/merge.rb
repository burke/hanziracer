#!/usr/bin/env ruby

input = File.readlines('data/hanzi').map(&:chomp)

$mapper = File.readlines('data/hanzi.csv').map { |f| f.split(',') }
$mymapper = File.readlines('data/extra.csv').map { |f| f.split(',') }

def resolve(char)
  match = $mapper.detect { |f| f[1] == char }
  return match[2] if match

  match = $mymapper.detect { |f| f[0] == char }
  return match[1] if match

  return "???"
end

input.each do |i|
  puts "#{i},#{resolve(i)}"
end
