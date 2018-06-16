defmodule Natpham.Posts do
  import Ecto.Query, warn: false
  alias Natpham.Repo

  alias Natpham.Posts.Post

  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  def get_all do
    Repo.all(from p in Post, order_by: [desc: p.inserted_at])
  end

  def get!(id) do
    Repo.get!(Post, id)
  end

  def delete(post = %Post{}) do
    Repo.delete(post)
  end
end
