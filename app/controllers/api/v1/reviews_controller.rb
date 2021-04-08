module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :authenticate_user!, only: :show

      # def index
      #   @reviews = Review.all
      #   @movie = @reviews.movie
      #   render json: @reviews
      # end

      def show
        @review = Review.find(params[:id])
        @movie = @review.movie
        render json: @review
      end
    end
  end
end
