module Api
  module V1
    class FavoritesController < ApplicationController
      skip_before_action :verify_authenticity_token
      def index
        @favorites = Favorite.where(user_id: params[:user_id])

        render json: @favorites, include: :movie
      end

      def new
        @favorite = Favorite.new
      end

      def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
          
          render json: @favorite
        else
          flash[:error] = "Something went wrong"
          redirect_to root_path
        end
      end

      def destroy
        @favorite = Favorite.find(favorite_params)
        if @favorite.destroy
          flash[:success] = 'Favorite was successfully deleted.'
        else
          flash[:error] = 'Something went wrong'
        end
        redirect_to favorites_url
      end

      private

      def favorite_params
        params.permit(:id, :user_id, :movie, :favorite)
      end
    end
  end
end
