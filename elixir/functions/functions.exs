## Named functions
# they must be created in a module

defmodule Cook do
  #multiline function
  def boil(food) do
    f = "Boil #{food}"
    String.upcase(f)
  end

  #single-line function
  def sausage, do: boil("sausage")

  #private function
  defp _cook(food) do
  end

  #pattern matching allows functions to have
  #multiple clauses
  def cook, do: cook("fry", "sausage") #invokes the double arg clause
  def cook(0), do: cook("bake", "banana") #pattern match 0
  def cook(meat), do: cook("grill", meat) #single arg
  def cook(type, food), do: "#{type} #{food}" #double arg
end

IO.inspect Cook.cook
IO.inspect Cook.cook(0)
IO.inspect Cook.cook("Ham")
IO.inspect Cook.cook("Roast", "Lamb")
