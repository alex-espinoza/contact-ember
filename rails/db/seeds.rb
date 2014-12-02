# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bugs = Contact.create(name: "Bugs Bunny")
wile = Contact.create(name: "Wile E. Coyote")
yosemite = Contact.create(name: "Yosemite Sam")

bugs.phone_numbers.create(number: "123-432-5432")
bugs.phone_numbers.create(number: "342-457-9985")

wile.phone_numbers.create(number: "543-544-2233")

yosemite.phone_numbers.create(number: "111-222-2233")
yosemite.phone_numbers.create(number: "666-444-3434")
yosemite.phone_numbers.create(number: "498-238-1143")
