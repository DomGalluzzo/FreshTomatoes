class Favorite < ApplicationRecord
  belongs_to :movie
  belongs_to :watchlist

  has_one :user, through: :watchlist

  validates :movie_id, uniqueness: { scope: :watchlist_id }
end
