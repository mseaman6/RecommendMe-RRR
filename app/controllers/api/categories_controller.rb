class Api::CategoriesController < ApplicationController

  def index
    @categories = Category.all
    render json: @categories
  end

  def show
    @category = Category.find(params[:id])
    render json: @category
  end

  def create
    @category = Category.find_or_create_by(:name => params[:name].upcase)
    if @cateogry && @category.save
      render json: @category
    elsif @category
      render json: {error: "That category already exists."}
    else
      render json: {error: "There was a problem saving your category " + category.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end
  end

end
