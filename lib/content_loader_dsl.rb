module ContentLoaderDSL
  def content_klasses
    @content_klasses ||= {}
  end

  private

  def content(content_attrs)
    type = content_attrs.keys.first
    attrs = content_attrs[type]

    define_content_klass(type, attrs)
    define_dsl(type)
    define_getter
  end

  def define_content_klass(type, attrs)
    klass = Class.new do
      attrs.each do |attr|
        define_method(attr) do |value = nil|
          if value
            instance_variable_set("@#{attr}", value.to_s.strip)
          else
            instance_variable_get("@#{attr}")
          end
        end
      end
    end

    content_klasses[type] = klass
  end

  def define_dsl(type)
    define_method(type) do |&blk|
      content = self.class.content_klasses[type].new
      content.instance_eval(&blk)
      (@contents ||= []) << content
    end
  end

  def define_getter
    define_method(:contents) { @contents }
  end
end
