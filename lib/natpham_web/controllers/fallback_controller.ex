defmodule NatphamWeb.FallbackController do
  @moduledoc """
  Translates controller action results into valid `Plug.Conn` responses.

  See `Phoenix.Controller.action_fallback/1` for more details.
  """
  use NatphamWeb, :controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    conn
    |> put_status(:unprocessable_entity)
    |> render(NatphamWeb.ChangesetView, "error.json", changeset: changeset)
  end

  def call(conn, {:error, :not_found}) do
    conn
    |> put_status(:not_found)
    |> render(NatphamWeb.ErrorView, :"404")
  end

  def call(conn, {:error, :forbidden, error}) do
    conn
    |> put_status(:forbidden)
    |> render(NatphamWeb.ErrorView, "error.json", error: error)
  end

  def call(conn, {:error, :unauthorized, error}) do
    conn
    |> put_status(:unauthorized)
    |> render(NatphamWeb.ErrorView, "error.json", error: error)
  end

  def call(conn, {:error, :not_found, error}) do
    conn
    |> put_status(:not_found)
    |> render(NatphamWeb.ErrorView, "error.json", error: error)
  end
end
