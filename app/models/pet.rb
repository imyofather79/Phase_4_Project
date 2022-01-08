class Pet < ApplicationRecord

    belongs_to :owner
    belongs_to :shelter

    validates :name, presence: true
    validates :animal, presence: true
    validates :sex, inclusion: { in: ['Male', 'Female', 'Neutered Male', 'Spayed Female'] }
    
end
