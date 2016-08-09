# Using tail call optimization
# simply to ensure that the last call
# in the function is the Functional
# however you may need to accumulate the result

defmodule Recursion do
  def ten_times(0, acc), do: acc
  def ten_times(n, acc) do
    #tail optimized
    ten_times(n - 1, acc + 10)
  end
end
IO.puts Recursion.ten_times(3, 0)
