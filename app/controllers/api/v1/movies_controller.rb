module Api
  module V1
    class MoviesController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @movies = Movie.includes(:actors, :director, :genre)
        render json: @movies, include: %i[actors director genre reviews]
      end

      def show
        @movie = Movie.find(params[:id])
        @genre = @movie.genre
        @director = @movie.director
        @actors = @movie.actors
        @reviews = @movie.reviews
        render json: @movie, include: %i[actors director genre reviews]
      end
    end
  end
end
