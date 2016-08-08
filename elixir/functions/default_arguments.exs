defmodule Cook do
  def cook(type \\"grill", food), do: "#{type} #{food}"
end

IO.inspect Cook.cook("boil", "cake")
IO.inspect Cook.cook("cake")
