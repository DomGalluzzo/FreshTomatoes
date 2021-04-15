module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        # If movie_id present in call, render credits for movie
        if params[:movie_id].present?
          @credits = Credit.where(movie_id: params[:movie_id])
          @movies = @credits.movies
          # @movie = Movie.where(movie_id: params[:id])
          # @movie = @movie.credits
        # else, render credits for actor
        else
          @credits = Credit.where(actor_id: params[:actor_id])
          @actors = @credits.actors
        end
        render json: @credits
      end

      def show
        @credit = Credit.find(params[:credit_id])
      end
    end
  end
end
