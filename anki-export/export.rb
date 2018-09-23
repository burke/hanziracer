#!/usr/bin/env ruby

require 'sqlite3'
require 'tmpdir'
require 'set'

PROFILE    = "Burke"
RSH_DECK   = 1533924932549
COLLECTION = File.expand_path("~/Library/Application Support/Anki2/#{PROFILE}/collection.anki2")

QUERY = <<-SQL
  SELECT flds FROM cards 
  INNER JOIN notes ON cards.nid = notes.id
  WHERE cards.did=#{RSH_DECK}
  AND cards.queue != 0
SQL

abort "can't find collection" unless File.exist?(COLLECTION)

all_hanzi = Set.new

db = SQLite3::Database.new(COLLECTION)
db.execute(QUERY) do |flds,|
  hanzi = flds.split("\x1f").first
  next if hanzi =~ /^p\./
  all_hanzi << hanzi
end

all_hanzi.each { |f| puts f }
