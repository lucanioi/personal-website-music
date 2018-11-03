require 'sinatra'

get '/' do
  erb :index
end

get '/contact' do
  erb :contact
end

get '/electronic_music' do
  erb :electronic_music
end

get '/theater' do
  erb :theater
end

get '/film_score' do
  erb :film_score
end
