module Api
  module V1
    class DirectorsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]

      def index
        @directors = Director.all
        render json: @directors
      end

      def show
        @director = Director.find(params[:id])
        render json: @director
      end
    end
  end
end
