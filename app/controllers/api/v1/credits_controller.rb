module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        # If movie_id present in call, render credits for movie
        if params[:movie_id].present?
          @credits = Credit.where(movie_id: params[:movie_id])
        # else, render credits for actor
        else
          @credits = Credit.where(actor_id: params[:actor_id])
        end
        render json: @credits
      end

      # def show
      #   @credit = Credit.includes(:movies).find(params[:id])
      # end
    end
  end
end
