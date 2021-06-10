module Api
  module V1
    class CreditsController < ApplicationController
      skip_before_action :authenticate_user!, only: %i[index show]
    end
  end
end
