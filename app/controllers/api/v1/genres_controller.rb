module Api
  module V1
    class GenresController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @genres = Genre.all
        render json: @genres
      end

      def show
        @genre = Genre.find(params[:id])
        render json: @genre
      end
    end
  end
end
