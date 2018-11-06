require 'sinatra'

require './lib/content_loader'

get '/' do
  video_contents = ContentLoader.load_contents('./public/contents/video.contents')
  erb :index, locals: {videos: video_contents}
end
