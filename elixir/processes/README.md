In elixir, all code runs inside isolated processes.

#### Spawn a new process

`pid = spawn fn -> :ping end`

Current iex process
`self`

Send message to current process
`send self, {self, :ping}`

Receive above message. This command will display the last message. If no messages have been received it will monitor until one is received.
```
receive do
  {sender, action} -> "Sender #{inspect sender} action #{inspect action}"
end
```

Monitor for 1 second and then time out
```
receive do
  {sender, action} -> "Sender #{inspect sender} action #{inspect action}"
  after
  1_000 -> "...timed out after 1 second"
end
```
