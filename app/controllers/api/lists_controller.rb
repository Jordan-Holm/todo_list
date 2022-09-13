class Api::ListsController < ApplicationController

  before_action :set_list, only: [:show, :update, :destroy]

  def index
    render json: List.all
  end

  def show
    render json: @list
  end

  def create

    @list = LIst.new(list_params)
    if @list.save
      render json: @list
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
    
  end

  def update

    if @list.update(list_params)
      render json: @list
    else
      ender json: { errors: @list.errors }, status: :unprocessable_entity
    end

  end

  def destroy

    @list.destroy
    render json: { message: 'list deleted'}

  end

  private

    def list_params
      params.require(:list).permit(:title, :description)
    end

    def set_list
      @list = List.find(params[:id])

end
