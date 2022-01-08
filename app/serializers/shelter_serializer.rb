class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :phone_number
end
