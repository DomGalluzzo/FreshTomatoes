class RemoveActorIdFromCredits < ActiveRecord::Migration[6.0]
  def change
    remove_column :credits, :actor_id
  end
end
