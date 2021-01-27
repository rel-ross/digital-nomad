class AddImageToCampsites < ActiveRecord::Migration[6.1]
  def change
    add_column :campsites, :image, :string
  end
end
