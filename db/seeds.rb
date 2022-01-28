puts "🌱 Seeding..."

user1 = User.create(
    name: "Admin",
    username: "Admin",
    password_digest: "$2a$12$P08ofK.iMHuCs8FV3tdMxevXWInHOzetGwE/pUAZHNOB/QSWFPdv6"
    
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
    user_id: 1,
    age: 5,
    isAdopted: false,
    sex: "Male"
)
pet2 = Pet.create(
    name: "Apple",
    animal: "Dog",
    shelter_id: 2,
    user_id: 1,
    age: 8,
    isAdopted: false,
    sex: "Male"
)
pet3 = Pet.create(
    name: "Pineapple",
    animal: "Cat",
    shelter_id: 2,
    user_id: 1,
    age: 2,
    isAdopted: false,
    sex: "Female"
)
pet4 = Pet.create(
    name: "Pear",
    animal: "Cat",
    shelter_id: 3,
    user_id: 1,
    age: 4,
    isAdopted: false,
    sex: "Male"
)

puts "✅ Done seeding!"