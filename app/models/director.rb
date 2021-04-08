class Director < ApplicationRecord
  has_many :movies, dependent: :destroy
  has_many :genres, through: :movies

  validates :name, presence: true
  validates :image, presence: true
end
