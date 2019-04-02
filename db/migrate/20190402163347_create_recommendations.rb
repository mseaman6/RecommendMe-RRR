class CreateRecommendations < ActiveRecord::Migration[5.2]
  def change
    create_table :recommendations do |t|
      t.string :title
      t.text :description
      t.integer :user_id
      t.integer :category_id
    end
  end
end
