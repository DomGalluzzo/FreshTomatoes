module Api
  module V1
    class MoviesController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        movies = Movie.all
        render json: movies
      end

      def show
        @movie = Movie.find(params[:id])
        @genre = @movie.genre
        @director = @movie.director
        @credit = @movie.credit
        # @review = @movie.reviews
        render json: @movie
      end
    end
  end
end
