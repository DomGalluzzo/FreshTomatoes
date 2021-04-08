class Genre < ApplicationRecord
  has_many :movies
  has_many :directors, through: :movies

  validates :name, presence: true
end
