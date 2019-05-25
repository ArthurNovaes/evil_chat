Rails.application.routes.draw do
  root to: "chat#show"

  get "/login", to: "auth#new"
  post "/login", to: "auth#create"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
