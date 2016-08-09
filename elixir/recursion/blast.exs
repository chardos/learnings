# Functional languages use recursion until a condition is met

defmodule Recursion do

  def countdown(0), do: IO.puts "Blast off!"
  def countdown(n) when n == 2 do
    IO.puts "#{n}...ignite engines..."
    countdown(n - 1)
  end
  def countdown(n) when is_integer(n) do
    IO.puts n
    countdown(n - 1)
  end
  def countdown(str) when is_binary(str) do
    IO.puts "Come on! countdown is a number!"
  end
end

Recursion.countdown(5)
Recursion.countdown("ten")
