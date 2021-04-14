Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  
  get "movies/:id", to: "pages#home"
  get "directors/:id", to: "pages#home"
  get "reviews/new", to: "pages#home"
  get "users/:id/watchlists", to: "pages#home"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :actors, only: [ :index, :show ]
      resources :directors, only: [ :index, :show ]
      resources :favorites, only: [ :index, :new, :create, :destroy ]
      resources :genres, only: [ :index, :show ]
      resources :movies, only: [ :index, :show ]
      resources :reviews, only: [ :update, :destroy ]
      resources :watchlists, only: :show

      resources :users, only: [ :show, :create, :destroy ] do 
        resources :watchlists, only: [ :index ]
      end
      resources :movies, only: [ :index, :show ] do 
        resources :reviews, only: [ :index, :new, :create ]
        resources :actors, only: [:index]
      end
    end
  end
end
