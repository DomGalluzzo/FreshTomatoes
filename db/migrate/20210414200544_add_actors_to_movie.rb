class AddActorsToMovie < ActiveRecord::Migration[6.0]
  def change
    add_reference :movies, :actor, index: true
    add_foreign_key :movies, :actors
  end
end
