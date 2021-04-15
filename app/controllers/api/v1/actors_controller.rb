module Api
  module V1
    class ActorsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        # * Refactored to eliminate N+1 query
        @actors = Actor.includes(:movies)
        render :index
      end

      def show
        @actor = Actor.find(params[:id])
        @movies = @actor.movies
        render :show
      end
    end
  end
end
