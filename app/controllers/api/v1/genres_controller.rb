module Api
  module V1
    class GenresController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @genres = Genre.includes(:movies, :directors)
        render json: @genres, include: %i[movies directors]
      end

      def show
        @genre = Genre.find(params[:id])
        @movies = @genre.movies
        @directors = @genre.directors
        render json: @genre, include: %i[movies directors]
      end
    end
  end
end
