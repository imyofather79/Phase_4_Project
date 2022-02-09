class SheltersController < ApplicationController
    def index
        shelters = Shelter.all
        render json: shelters
    end

    def show
        shelter = Shelter.find_by(id: params[:id])
        render json: shelter.to_json(except: [:created_at, :updated_at])
    end
end
