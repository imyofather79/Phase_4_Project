class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :animal, :age, :sex
end
