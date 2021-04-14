class DropCreditsJoinTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :credits
  end
end
