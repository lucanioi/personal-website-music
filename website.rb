require 'sinatra'

require './lib/content_loader'

get '/' do
  contents = ContentLoader.load_contents(:film_score, :electronic_music)
  erb :index, locals: {contents: contents}
end

# google site verification

get '/google47864032136ca1ca.html' do
  send_file './google47864032136ca1ca.html'
end
