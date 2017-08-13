require'ApiRequests'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

def home
	render 'layouts/application'
end

def actualQuotes
	@actualQuotes = ApiRequests.actualQuotes;
	render json: @actualQuotes 
end

def historyQuotes
	@sate = ApiRequests.state(params[:name], params[:beginDate], params[:endDate]);
	render json: @sate	
end

end
