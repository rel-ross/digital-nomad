class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
   if
    @user = User.create(name: params[:name],
    password: params[:password])
   #  render json: @user
   
      redirect_to "http://localhost:3001/membersPage.html"
   # else
   #    redirect_to "http://localhost:3001/"
   end



   #  if @user.save
   #    render json: @user, status: :created, location: @user
   #  else
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    def user_params
      
      # @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :password)
    end
end
