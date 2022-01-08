class Shelter < ApplicationRecord

    has_many :pets, dependent: :destroy
    # has_many :owners, through: :pets

    validates :name, presence: true
    validates :city, presence: true
    validates :phone_number, length: { is: 10 }

end
