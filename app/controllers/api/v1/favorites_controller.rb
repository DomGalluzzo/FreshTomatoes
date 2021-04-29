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

      def show
        @favorite = Favorite.find(params[:id])
        render json: @favorite
      end
      

      def create
        @favorite = Favorite.new(favorite_params)
        @user = current_user
        @favorite.user = @user

        if @favorite.save!
          render json: @favorite
        else
          flash[:error] = "Something went wrong"
        end
      end

      def destroy
        @favorite = Favorite.find(favorite_params)
        # @user = current_user
        # @favorite.user = @user
        if @favorite.destroy
          flash[:success] = 'Favorite was successfully deleted.'
        else
          flash[:error] = 'Something went wrong'
        end

      end

      private

      def favorite_params
        params.permit(:id, :movie_id, :user_id, :format)
      end
    end
  end
end
