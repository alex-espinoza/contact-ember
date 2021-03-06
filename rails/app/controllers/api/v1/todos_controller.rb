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
      render json: @todo, status: 201
    else
      render json: @todo.errors, status: 400
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todo_params)
      render json: @todo, status: 200
    else
      render json: @todo.errors, status: 400
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    head :no_content
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
