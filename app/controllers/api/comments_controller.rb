class CommentsController < ApplicationController

  def create
    @comment = Comment.create(comment_params)
    @comment.recommendation_id = params[:recommendation_id]
    if @comment.save
      @recommendation = Recommmendation.find(params[:recommendation_id])
      @comments = @recommendation.comments
      render json: @comments
    else
      render json: { error: "The new comment failed to be created." }, status: 400
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      @recommendation = Recommmendation.find(params[:recommendation_id])
      @comments = @recommendation.comments
      render json: @comments
    else
      render json: { error: "The was a problem deleting this comment." }, status: 400
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
