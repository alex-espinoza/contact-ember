class Api::V1::ContactsController < ApplicationController
  def index
    render json: Contact.includes(:phone_numbers).all
  end

  def show
    render json: Contact.includes(:phone_numbers).find(params[:id])
  end
end
