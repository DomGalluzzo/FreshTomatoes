class Actor < ApplicationRecord
  belongs_to :movie

  validates :name, presence: true
  validates :image, presence: true
end
