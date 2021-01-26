class CreateCampsites < ActiveRecord::Migration[6.1]
  def change
    create_table :campsites do |t|
      t.string :name
      t.string :url
      t.string :cellPhoneReception
      t.string :showers
      t.integer :electricalHookups
      t.string :location

      t.timestamps
    end
  end
end
