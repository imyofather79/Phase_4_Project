class OwnersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        owner = Owner.create!(owner_params)
        session[:owner_id] = owner.id
        render json: owner, status: :created
    end

    def show
        render json: @current_owner
    end

    private

    def owner_params
        params.permit(:name, :username, :password, :password_confirmation, :city)
    end

end
