class UsersController < ApplicationController

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find(params[:id])

    redirect_to "http://localhost:3001/membersPage.html"
  end

  # POST /usersp
  def create
    @user = User.create(name: params[:name],
    password: params[:password])
    @user_id = @user[:id]
   #  render json: @user
   
      redirect_to "http://localhost:3001/membersPage.html?user_id=#{@user_id}"
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
