#Create PingPong module
defmodule PingPong do
  def ready do
    receive do
      {sender, action, 12} ->
        IO.puts "#{11} from #{inspect sender}, sent #{inspect action}"
        IO.puts "Game finished..."
        ready
      {sender, action, turn} ->
        hit_to(sender, switch(action), turn + 1)
        ready
    after
        1_000 -> IO.puts "timing out player #{inspect player_pid}"
    end
  end

  def hit_to(opponent_id, action, turn) do
    IO.puts "#{turn}. hit_to #{inspect opponent_id} #{inspect action}"
    send(opponent_id, {player_pid, action, turn})
  end

  defp switch(action) do
    case action do
      :ping -> :pong
      _____ -> :ping
    end
  end

  defp player_pid, do: self
end

#1. get main process pid
player_1 = self

#2. get spawned process pid
player_2 = Task.start(PingPong, :ready, [])

#3. inspect PID values
IO.puts "player_1: #{inspect player_1}"
IO.puts "player_2: #{inspect player_2}"

#4. send message from main process to spawned process
PingPong.hit_to(player_2, :ping, 1)

#5. Start message receiver on main process
PingPong.ready
