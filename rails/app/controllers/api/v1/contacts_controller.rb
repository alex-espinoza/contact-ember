class Api::V1::SpeakersController < ApplicationController
  def index
    render json: Contact.all
  end

  def show
    render json: Contact.find(params[:id])
  end
end