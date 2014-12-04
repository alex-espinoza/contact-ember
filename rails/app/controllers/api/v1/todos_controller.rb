class Api::V1::TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.valid? && @todo.save
      @todo.save
      render json: @todo, status: 201
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
