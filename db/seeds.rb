# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(:name => "TV")
Category.create(:name => "MOVIE")
Category.create(:name => "RESTAURANT")
Category.create(:name => "ACTIVITY")
Category.create(:name => "BOOK")


Recommendation.create(:title => "Osteria Morini", :description => "Italian (southern)", :category_id => 3)
Recommendation.create(:title => "Acqua al 2", :description => "Italian (florentine); get the pasta and steak samplers", :category_id => 3)
Recommendation.create(:title => "Life in Pieces", :description => "netflix show, 30 min.; funny & cute", :category_id => 1)
Recommendation.create(:title => "Life is Beautiful", :description => "WWII flick, heartwarming and hearbreaking", :category_id => 2)
Recommendation.create(:title => "Glass Castle", :description => "biography, growing up with weird parents", :category_id => 5)


Comment.create(:text => "I don't want to read this!!!!", :recommendation_id => 5)
Comment.create(:text => "soooo yummmy", :recommendation_id => 2)
Comment.create(:text => "agreed", :recommendation_id => 4)
