Rails.application.routes.draw do
  resources :todos, except: [:new, :edit]
  namespace :api do
    namespace :v1 do
      resources :contacts
    end
  end
end
