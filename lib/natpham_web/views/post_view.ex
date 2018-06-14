defmodule NatphamWeb.PostView do
  use NatphamWeb, :view
  alias NatphamWeb.PostView

  def render("post.json", _) do
    %{test: "WIN"}
  end
end
