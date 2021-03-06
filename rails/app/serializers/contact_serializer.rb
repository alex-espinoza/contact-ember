class ContactSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name
  has_many :phone_numbers
end
