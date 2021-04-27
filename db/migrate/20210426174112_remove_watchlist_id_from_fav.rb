class RemoveWatchlistIdFromFav < ActiveRecord::Migration[6.0]
  def change
    remove_index :favorites, name: "index_favorites_on_watchlist_id"
    
  end
end
