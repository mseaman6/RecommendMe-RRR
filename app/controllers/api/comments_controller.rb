class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: { error: "The new comment failed to be created." }, status: 400
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: Comment.where("recommendation_id = ?", (params[:category_id]))
    else
      render json: { error: "There was a problem deleting this comment." }, status: 400
    end
  end

  def index
    @recommendation = Recommendation.find(params[:recommendation_id])
    @comments = @recommendation.comments
    render json: @comments
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :user_id, :recommendation_id)
  end

end
