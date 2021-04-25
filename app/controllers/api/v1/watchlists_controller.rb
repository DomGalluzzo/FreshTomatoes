module Api
  module V1
    class WatchlistsController < ApplicationController
      def index
        @watchlists = Watchlist.all
        render json: @watchlists, include: %i[user movies]
      end

      def show
        @watchlist = Watchlist.includes(:movies).find(params[:id])
        @user = current_user
        @favorites = @watchlist.favorites
        render json: @watchlist, include: %i[user movies]
      end
    end
  end
end
