class Actor < ApplicationRecord
  has_many :movies

  validates :name, presence: true
  validates :image, presence: true
end
