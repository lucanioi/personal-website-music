require 'sinatra'

require './lib/content_loader'

get '/' do
  video_contents = ContentLoader.load_contents('./public/contents/video.contents')
  erb :index, locals: {videos: video_contents}
end

# google site verification

get '/google47864032136ca1ca.html' do
  send_file './google47864032136ca1ca.html'
end
