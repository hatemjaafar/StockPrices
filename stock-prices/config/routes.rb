Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root "application#home"

#route to get last quotes values.
get '/quotes', to: 'application#actualQuotes'

#route to get quotes values according to the selected period.
get '/detailQuotes/:name/:beginDate/:endDate', to: 'application#historyQuotes'
end
