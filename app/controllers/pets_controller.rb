class PetsController < ApplicationController

skip_before_action :authorize, only: :create

    def index
        pets = Pet.all
        render json: pets
    end

    def show
        pet = Pet.find_by(id: params[:id])
        # render json: pet.to_json(except: [:created_at, :updated_at])
        render json: pet
    end

    def create
        pet = Pet.create(pet_params)
        render json: pet, status: :created
    end

    def update
        pet = Pet.find_by(id: params[:id])
        pet.update(pet_params)
        render json: pet
    end

    def destroy
        pet = Pet.find_by(id: params[:id])
        pet.destroy
        head :no_content
    end


    private

    def pet_params
        params.permit(:name, :animal, :age, :sex)
    end

    # def find_pet
        
    # end
end
