puts "🌱 Seeding..."

# user1 = User.create(
#     name: "Peter",
#     username: "user1",
#     password_digest: "1"
    
# )
# user2 = User.create(
#     name: "Karen",
#     username: "user2",
#     password_digest: "1"
# )
# user3 = User.create(
#     name: "Sam",
#     username: "user3",
#     password_digest: "1"
# )

shelter1 = Shelter.create(
    name: "Denver Animal Shelter",
    city: "Denver",
    phone_number: "7209131311"

)
shelter2 = Shelter.create(
    name: "Aurora Animal Shelter",
    city: "Aurora",
    phone_number: "3033268280"
)
shelter3 = Shelter.create(
    name: "Dumb Friends League",
    city: "Denver",
    phone_number: "3037515772"
)

pet1 = Pet.create(
    name: "Pete",
    animal: "Dog",
    shelter_id: 1,
    user_id: 1,
    age: 5,
    sex: "Male"
)
pet2 = Pet.create(
    name: "Apple",
    animal: "Dog",
    shelter_id: 2,
    user_id: 1,
    age: 8,
    sex: "Male"
)
pet3 = Pet.create(
    name: "Pineapple",
    animal: "Cat",
    shelter_id: 2,
    user_id: 1,
    age: 2,
    sex: "Female"
)
pet4 = Pet.create(
    name: "Pear",
    animal: "Cat",
    shelter_id: 3,
    user_id: 1,
    age: 4,
    sex: "Male"
)

puts "✅ Done seeding!"