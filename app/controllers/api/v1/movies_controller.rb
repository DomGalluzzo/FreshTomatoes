module Api
  module V1
    class MoviesController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        # * Refactored to eliminate N+1 query
        @movies = Movie.includes(:actors)
        render :index
      end

      def show
        @movie = Movie.find(params[:id])
        @genre = @movie.genre
        @director = @movie.director
        @actors = @movie.actors
        render :show
      end
    end
  end
end
