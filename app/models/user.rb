class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reviews, dependent: :destroy
  has_many :watchlists, dependent: :destroy
  # has_many :favorites, dependent: :destroy
  has_many :favorites, through: :watchlists

  has_one_attached :photo

  validates :username, uniqueness: true
end
