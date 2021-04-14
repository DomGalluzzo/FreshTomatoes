module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: :index

      def index
        @credits = Credit.all
        # @actors = @credits.actors
        # @movies = @credits.movies
      end
    end
  end
end
