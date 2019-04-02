class UsersController < ApplicationController
#  before_action :require_login
#
#  def login
#    user = User.find_by(:email => params[:user][:email]) if params[:user]
#    @user = user if user && user.authenticate(params[:user][:password])
#    if @user
#      session[:user_id] = @user.id
#    else
#      render json: { error: "Your login was unsuccessful, please re-enter your information and try again." }, status: 400
#    end
#  end
#
#  def create
#    if params[:user][:password] == params[:user][:password_confirmation]
#      @user = User.new(user_params)
#      if @user.save
#        session[:user_id] = @user.id
#      else
#        render json: { error: "Your sign up was unsuccessful, please re-enter your information and try again." }, status: 400
#      end
#    else
#      render json: { error: "Your sign up was unsuccessful, please re-enter your information and try again." }, status: 400
#    end
#  end
#
#  def destroy
#    session.delete :user_id
#  end
#
#  private
#
#  def user_params
#    params.require(:user).permit(:name, :email, :password, :password_confirmation)
#  end

end
