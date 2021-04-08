class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment, presence: true
  validated :rating, numericality: { in: 0..100 }
  validates :user_id, :uniqueness: { scope: :movie_id }
end
