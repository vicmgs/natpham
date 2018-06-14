defmodule Natpham.Posts do
  import Ecto.Query, warn: false
  alias Natpham.Repo

  alias Natpham.Posts.Post

  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end
end
