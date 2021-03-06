class ApiRequests

	def self.state(code, beginDate, endDate)
		uri = URI.parse("https://sandbox.tradier.com/v1/markets/history?symbol=#{code}&start=#{beginDate}&end=#{endDate}")		
		http = Net::HTTP.new(uri.host, uri.port)
		http.read_timeout = 30
		http.use_ssl = true
		http.verify_mode = OpenSSL::SSL::VERIFY_PEER
		request = Net::HTTP::Get.new(uri.request_uri)
			
		# Headers
		request["Accept"] = "application/json"
		request["Authorization"] = "Bearer 1xlYh47hRZUW7IbB5FvKK9QRT7AL"

		# Send synchronously
		response = http.request(request)
		@response =response.body			
	end 
	
	def self.actualQuotes()
		uri = URI.parse("https://sandbox.tradier.com/v1/markets/quotes?symbols=AAPL,FB,TSLA,AMZN,MSFT,NFLX")
		http = Net::HTTP.new(uri.host, uri.port)
		http.read_timeout = 30
		http.use_ssl = true
		http.verify_mode = OpenSSL::SSL::VERIFY_PEER
		request = Net::HTTP::Get.new(uri.request_uri)
		# Headers

		request["Accept"] = "application/json"
		request["Authorization"] = "Bearer 1xlYh47hRZUW7IbB5FvKK9QRT7AL"

		# Send synchronously
		response = http.request(request)
		@response = response.body

	end 
end