Rails.application.routes.draw do
  
  resources :pets, only: [:index, :create, :destroy]
  resources :users, only: [:show, :create] do
    resources :pets, only: [:show, :update, :destroy]
  end
  resources :shelters, only: [:index, :show] do
    resources :pets, only: [:show, :update, :destroy, :create]
  end

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
