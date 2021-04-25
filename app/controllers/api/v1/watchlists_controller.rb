module Api
  module V1
    class WatchlistsController < ApplicationController
      def index
        @watchlists = Watchlist.where(user_id: params[:user_id]).includes(:user)
        @user = current_user
        render json: @watchlists, include: :movies
      end

      def show
        @watchlist = Watchlist.includes(:movies).find(params[:id])
        @user = current_user
        @favorites = @watchlist.favorites
        render json: @watchlist, include: :movies
      end
    end
  end
end
