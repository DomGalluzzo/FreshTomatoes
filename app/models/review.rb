class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :comment, presence: true
  validates :rating, numericality: { in: 1..10 }
  
  # ! Doesn't allow user to write more than 1 review per movie
  validates :user_id, uniqueness: { scope: :movie_id }
end
