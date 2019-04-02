class RecommendationsController < ApplicationController

  def index
    if params[:category_id]
      @recommendations = Recommendation.where("category_id = ?", (params[:category_id]))
    else
      @recommendations = Recommendation.all
    end
    render json: @recommendations
  end

  def create
    @recommendation = Recommendation.create(recommendation_params)
    @category = Category.find_or_create_by(:name => params[:recommendation][:category][:name].upcase)
    if @category.save
      @recommendation.category_id = @category.id
    end
    if @recommendation.save
      render json: @recommendation
    else
      render json: { error: "The new recommendation failed to be created." }, status: 400
    end
  end

  def show
    render json: @recommendation
  end


  private

  def recommendation_params
    params.require(:recommendation).permit(:title, :description, :user_id, :category_id)
  end

end
