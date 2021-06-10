module Api
  module V1
    class ReviewsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]
      skip_before_action :verify_authenticity_token, only: %i[update create destroy]
      before_action :set_review, only: :update

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
        if @review.save!
          flash[:success] = "Review successfully created"
          render json: @movie
        else
          flash[:error] = "Something went wrong"
          render "new"
        end
      end

      def update
        if @review.update(review_params)
          flash[:success] = "Review was successfully updated"
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
      end

      private

      def review_params
        params.require(:review).permit(:movie_id, :user_id, :comment, :rating)
      end

      def set_movie
        @movie = Movie.find(params[:movie_id])
      end

      def set_review
        @review = Review.find(params[:review_id] || params[:id])
      end
    end
  end
end
