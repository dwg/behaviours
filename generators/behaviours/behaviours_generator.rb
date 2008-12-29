class BehavioursGenerator < Rails::Generator::Base

  def manifest
    record do |m|
      javascripts_dir = ActionView::Helpers::AssetTagHelper::JAVASCRIPTS_DIR.sub("#{Rails.root}#{File::SEPARATOR}", '')
      FileUtils.mkdir_p(File.join(javascripts_dir, 'behaviours'))
      # Copy files
      Dir[File.dirname(__FILE__) + "/templates/*.js"].each do |template_filename_with_path|
        template_filename = File.join('behaviours', File.basename(template_filename_with_path))
        m.file template_filename, File.join(javascripts_dir, template_filename)
      end
    end
  end
end
