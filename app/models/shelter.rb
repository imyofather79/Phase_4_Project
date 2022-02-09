class Shelter < ApplicationRecord

    has_many :pets, dependent: :destroy

    validates :name, presence: true
    validates :city, presence: true
    validates :phone_number, uniqueness: true, length: { is: 10 }

end
