defmodule NatphamWeb.PageController do
  use NatphamWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
