class RemoveWatchlistId < ActiveRecord::Migration[6.0]
  def change
    remove_column :favorites, :watchlist_id
  end
end
