module Api
  module V1
    class ActorsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @actors = Actor.where(movie_id: params[:movie_id]).includes(:movie)
        render :index
      end

      def show
        @actor = Actor.find(params[:id])
        @movies = @actor.movies
        render json: @actor
      end
    end
  end
end
