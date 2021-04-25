Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do 
    get "/users/sign_out", to: "devise/sessions#destroy"
  end

  root to: 'pages#home'
  
  get "/genres", to: "pages#home"
  get "/movies", to: "pages#home"
  get "movies/:id", to: "pages#home"
  get "directors/:id", to: "pages#home"
  get "reviews/new", to: "pages#home"
  get "users/:id/watchlists", to: "pages#home", as: "watchlists"


  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :actors, only: [ :index, :show ]
      resources :directors, only: :show 
      resources :genres, only: [ :index, :show ]
      resources :movies, only: [ :index, :show ]
      resources :reviews, only: [ :update, :destroy ]
      resources :watchlists, only: :show
      
      resources :users, only: [ :show, :create, :destroy ] do 
        resources :favorites, only: [ :new, :create, :destroy ]
        resources :watchlists, only: :show 
        # resources :favorites, only: :index
      end
      resources :movies, only: [ :index, :show ] do 
        resources :reviews, only: [ :index, :show, :new, :create ]
        # resources :actors, only: :index
      end
      # resources :actors, only: :show do
      #   resources :movies, only: :index
      # end
    end
  end
end
