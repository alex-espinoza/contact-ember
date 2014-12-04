class RenameIsCompletedInTodos < ActiveRecord::Migration
  def change
    rename_column :todos, :iscompleted, :is_completed
  end
end
