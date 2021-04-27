module Api
  module V1
    class FavoritesController < ApplicationController
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
          flash[:success] = "Favorite successfully created"
          render json: @favorite
        else
          flash[:error] = "Something went wrong"
          render 'new'
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
        params.require(:favorite).permit(:movie_id, :user_id)
      end
    end
  end
end
