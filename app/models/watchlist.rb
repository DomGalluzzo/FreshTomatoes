class Watchlist < ApplicationRecord
  belongs_to :user

  has_many :favorites, dependent: :destroy
  has_many :movies, through: :watchlists

  validates :name, presence: true
end
