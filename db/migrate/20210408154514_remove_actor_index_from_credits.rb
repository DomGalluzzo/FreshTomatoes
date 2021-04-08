class RemoveActorIndexFromCredits < ActiveRecord::Migration[6.0]
  def change
    remove_index :credits, name: "index_credits_on_actor_id"
  end
end
