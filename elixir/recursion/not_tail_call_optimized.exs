## The recursive call MUST be the last function executed, and have
# no calculations performed on it e.g. 10 + ten_times(n - 1)

defmodule Recursion do
  def ten_times(0), do: 0
  def ten_times(n) do
    #not tail optimized
    10 + ten_times(n - 1)
  end
end
IO.puts Recursion.ten_times(3)

# Stack would look like this
# ten_times(3)
# 10 + ten_times(3-1)
# 10 + ten_times( 10 + ten_times(2 - 1) )
# 10 + ten_times ( 10 + ten_times ( 10 + ten_times( ten_times(0) )))
