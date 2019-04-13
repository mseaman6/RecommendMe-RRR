class Api::RecommendationsController < ApplicationController

  def index
    @recommendations = Recommendation.all
    render json: @recommendations
  end

  def create
    @recommendation = Recommendation.create(recommendation_params)
    if @recommendation.save
      render json: @recommendation
    else
      render json: { error: "The new recommendation failed to be created." }, status: 400
    end
  end

  def show
    @recommendation = Recommendation.find(params[:id])
    render json: @recommendation
  end

  def update
    @recommendation = Recommendation.find(params[:id])
    @recommendation.update(recommendation_params)
    if @recommendation.save
      render json: @recommendation
    else
      render json: { error: "The recommendation failed to be edited." }, status: 400
    end
  end

  def destroy
    @recommendation = Recommendation.find(params[:id])
    if @recommendation.destroy
      render json: Recommendation.all
    else
      render json: { error: "The was a problem deleting this recommendation." }, status: 400
    end
  end


  private

  def recommendation_params
    params.require(:recommendation).permit(:title, :description, :user_id, :category_id)
  end

end
