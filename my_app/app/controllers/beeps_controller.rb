class BeepsController < ApplicationController
  respond_to :json, :html

  def index
    @beeps = Beep.all.order(created_at: :desc)
    respond_with @beeps
  end

  def create
    @beep = Beep.create(beep_params)
    respond_with @beep
  end

  def beep_params
    params.permit(:from, :body)
  end
end