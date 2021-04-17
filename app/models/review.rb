class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment, presence: true
  validates :rating, numericality: { in: 1..10 }
  validates :user_id, uniqueness: { scope: :movie_id }
end
