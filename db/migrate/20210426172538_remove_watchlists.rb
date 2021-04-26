class RemoveWatchlists < ActiveRecord::Migration[6.0]
  def change
    drop_table :watchlists, force: :cascade
  end
end
