module Api
  module V1
    class DirectorsController < ApplicationController
      skip_before_action :authenticate_user!, only: :show

      def show
        @director = Director.find(params[:id])
        render json: @director, include: %i[movies genres]
      end
    end
  end
end
