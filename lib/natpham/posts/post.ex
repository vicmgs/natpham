defmodule Natpham.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "posts" do
    field :title, :string
    field :caption, :string
    field :description, :string
    field :link, :string
    field :date, :naive_datetime

    timestamps()
  end

  def changeset(post, attrs) do
    changeset =
      post
      |> cast(attrs, [:title, :caption, :description, :link, :date])
      |> validate_required([:title, :caption, :link])
  end
end
