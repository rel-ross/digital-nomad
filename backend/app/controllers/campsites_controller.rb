class CampsitesController < ApplicationController
  # GET /campsites
  def index
    if params[:search_term]
      @campsites = Campsite.where(
        "location LIKE :search_term",
        search_term: "%#{params[:search_term]}%"
      )
    else
      @campsites = Campsite.all
    end
    render json: @campsites
  end

  # GET /campsites/1
  def show
    @campsite = Campsite.find(params[:id])
    
    render json: @campsite
  end
end
