class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :shelter, null: false, foreign_key: true
      t.string :name
      t.string :animal
      t.integer :age
      t.string :sex

      t.timestamps
    end
  end
end
