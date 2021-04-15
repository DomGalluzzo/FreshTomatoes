module Api
  module V1
    class WatchlistsController < ApplicationController
      def index
        @watchlists = Watchlist.where(user_id: params[:user_id]).includes(:user)
        render json: @watchlists, include: %i[movies]
      end

      def show
        @watchlist = Watchlist.includes(:movies).find(params[:id])
        render json: @show
      end
    end
  end
end
