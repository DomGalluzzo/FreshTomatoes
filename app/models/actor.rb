class Actor < ApplicationRecord
  belongs_to :movie

  has_many :movies, through: :credits

  validates :name, presence: true
  validates :image, presence: true
end
