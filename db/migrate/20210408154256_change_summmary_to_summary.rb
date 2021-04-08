class ChangeSummmaryToSummary < ActiveRecord::Migration[6.0]
  def change
    rename_column :movies, :summmary, :summary
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
