class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :category_id
  belongs_to :category
  has_many :comments
end
