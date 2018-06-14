defmodule Natpham.Repo.Migrations.CreatePostTable do
  use Ecto.Migration

  def change do
    create table(:posts, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :title, :string, null: false
      add :caption, :string
      add :description, :string
      add :link, :string
      add :date, :naive_datetime

      timestamps()
    end

    create index(:posts, [:title])
    create index(:posts, [:caption])
  end
end
