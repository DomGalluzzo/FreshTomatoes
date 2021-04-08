class Credit < ApplicationRecord
  belongs_to :movie
  belongs_to :actor

  validates :cast, length: { minimum: 1 }
end
