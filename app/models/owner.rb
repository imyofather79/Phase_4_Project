class Owner < ApplicationRecord

    has_secure_password

    has_many :pets, dependent: :destroy
    # has_many :shelters, through: :pets

    validates :username, presence: true, uniqueness: true

end
