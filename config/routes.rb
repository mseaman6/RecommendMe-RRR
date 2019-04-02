Rails.application.routes.draw do
  namespace :api do
    resources :users

    post 'signup', to: 'users#create', as: 'user_signup'
    post 'login', to: 'users#login', as: 'user_login'
    delete 'logout', to: 'users#destroy', as: 'user_logout'

    resources :recommendations do
      resources :comments
    end
    resources :categories

  end
end
