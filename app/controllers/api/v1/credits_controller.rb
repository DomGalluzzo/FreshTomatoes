module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: :index

      def index
        @credits = Credit.all
        render json: @credits
      end
    end
  end
end
