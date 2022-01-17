class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :animal, :age, :sex, :shelter_id, :user_id, :isAdopted
  belongs_to :user
  belongs_to :shelter

end
