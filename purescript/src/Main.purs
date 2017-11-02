module Main where

import Prelude

import Euler1 (answer, iAmANumber)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Console (CONSOLE, log)

iterate f 0 x = x
iterate f n x = iterate f (n - 1) (f x)

main :: forall e. Eff (console :: CONSOLE | e) Unit
main = do
  log ("The answer is " <> show answer)
  log ("The answer square is " <> show iAmANumber)
  -- iterate (\n -> n + 1) 10 3
