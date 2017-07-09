module Euler1 where

import Prelude
import Data.List (range, filter)
import Data.Foldable (sum)

ns = range 0 999
multiples = filter (\n -> mod n 3 == 0 || mod n 5 == 0) ns

answer = sum multiples

iAmANumber =
  let square x = x * x
  in square 42.0
