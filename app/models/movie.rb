class Movie < ApplicationRecord
  belongs_to :genre
  belongs_to :director

  has_many :reviews, dependent: :destroy

  has_many :credits
  has_many :actors, through: :credits

  validates :title, presence: true
  validates :summary, presence: true
end
