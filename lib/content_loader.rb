require_relative 'content_loader_dsl.rb'

class ContentLoader
  extend ContentLoaderDSL

  content video: %i[iframe year title description credit category creator]

  def self.load_contents(path)
    contents = File.read(path)
    new.tap { |loader| loader.instance_eval(contents) }.contents
  end
end
