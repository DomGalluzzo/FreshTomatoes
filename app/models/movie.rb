class Movie < ApplicationRecord
  belongs_to :genre
  belongs_to :director

  has_many :reviews, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :watchlists
  has_many :actors, through: :credits
  has_one :credit

  validates :title, presence: true
  validates :image, presence: true
  validates :summary, presence: true
end
