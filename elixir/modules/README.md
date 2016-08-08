## Modules

Best practice is one module per file.

```
defmodule Welcome do
	defmodule Greet do
	end
end

IO.puts Welcome.Greet | => Elixir.Welcome.Greet
```

Above can also be defined as:

```
defmodule Welcome.Greet do
end
```