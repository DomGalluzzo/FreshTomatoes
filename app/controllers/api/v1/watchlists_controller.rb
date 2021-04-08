module Api
  module V1
    class WatchlistsController < ApplicationController
      def index
        @watchlists = Watchlist.where(user_id: params[:user_id]).includes(:user)
        render :index
      end

      def show
        @watchlist = Watchlist.includes(:movies).find(params[:id])
      end
    end
  end
end
