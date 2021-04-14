class AddCreditsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_table :credits do |t|
      t.references :movie, null: false, foreign_key: true
      t.references :actor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
