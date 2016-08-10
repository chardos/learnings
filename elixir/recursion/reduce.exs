## Recursion: Reduce

## Reduce takes multiple values
#  and tries to reduce them down to one values
#  sum a list of numbers

defmodule Recursion do
  def sum([], acc), do: acc
  def sum([head | tail], acc), do: sum(tail, acc + head)
  # [head | tail] is a destructuring pattern match
end

IO.puts Recursion.sum([1,2,3], 0)

# Will run like this:
# sum([1,2,3],0) => 0
# sum([2,3], 1) => 1
# sum([3], 3) => 3
# sum([], 6) => 6
