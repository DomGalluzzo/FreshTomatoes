module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @credits = Credit.all
        render json: @credits
      end

      def show
        @credit = Credit.find(params[:id])
        @movie = @credit.movie
        render json: @credit
      end
    end
  end
end
