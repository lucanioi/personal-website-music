require_relative 'content_loader_dsl.rb'

class ContentLoader
  extend ContentLoaderDSL

  CONTENTS_PATH = "./public/contents/%s.contents".freeze

  def self.load_contents(*content_types)
    content_types.each_with_object({}) do |content_type, contents|
      contents_file = File.read(CONTENTS_PATH % content_type)

      contents[content_type] = new.tap do |loader|
        loader.instance_eval(contents_file)
      end.contents
    end
  end
end
