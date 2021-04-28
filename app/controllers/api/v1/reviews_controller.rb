module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]
      before_action :set_movie, only: %i[create update destroy]

      def index
        @reviews = Review.where(movie_id: params[:movie_id]).includes(:user)
        render json: @reviews, include: :user
      end

      def new
        @review = Review.new
      end

      def show
        @review = Review.find(params[:id])
        @movie = @review.movie
        @user = @review.user
        render json: @review, include: :user
      end

      def create
        @review = Review.new(review_params)
        @user = current_user
        @review.user = @user
        if review.save!
          flash[:success] = "Review successfully created"
          render json: review
        else
          flash[:error] = "Something went wrong"
          render 'new'
        end
      end

      def update
        @review = Review.find(review_params)
        if @review.update_attributes(params[:review])
          flash[:success] = "Review was successfully updated"
          redirect_to @review
        else
          flash[:error] = "Something went wrong"
          render 'edit'
        end
      end

      def destroy
        @review = Review.find(params[:id])
        if @review.destroy
          flash[:success] = 'Review was successfully deleted.'
        else
          flash[:error] = 'Something went wrong'
        end
        redirect_to reviews_url
      end

      private

      def review_params
        params.require(:review).permit(:comment, :rating, :movie_id)
      end

      def set_movie
        @movie = Movie.find(params[:id])
      end
    end
  end
end
