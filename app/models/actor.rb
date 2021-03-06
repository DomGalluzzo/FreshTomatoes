class Actor < ApplicationRecord
  has_many :credits
  has_many :movies, through: :credits

  validates :name, presence: true
end
