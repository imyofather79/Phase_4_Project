puts "🌱 Seeding..."

owner1 = Owner.create(
    name: "Peter",
    username: "user1",
    password_digest: "1",
    city: "Denver"
    
)
owner2 = Owner.create(
    name: "Karen",
    username: "user2",
    password_digest: "1",
    city: "Denver"
    
)
owner3 = Owner.create(
    name: "Sam",
    username: "user3",
    password_digest: "1",
    city: "Denver"
)

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
    owner_id: 1,
    age: 5,
    sex: "Male"
)
pet2 = Pet.create(
    name: "Apple",
    animal: "Dog",
    shelter_id: 2,
    owner_id: 1,
    age: 8,
    sex: "Male"
)
pet3 = Pet.create(
    name: "Pineapple",
    animal: "Cat",
    shelter_id: 2,
    owner_id: 3,
    age: 2,
    sex: "Female"
)
pet4 = Pet.create(
    name: "Pear",
    animal: "Cat",
    shelter_id: 3,
    owner_id: 2,
    age: 4,
    sex: "Male"
)
pet5 = Pet.create(
    name: "Mango",
    animal: "Goldfish",
    shelter_id: 3,
    owner_id: 3,
    age: 9,
    sex: "Female"
)




puts "✅ Done seeding!"