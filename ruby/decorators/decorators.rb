class BurgerDecorator < SimpleDelegator
  def initialize(burger)
    @burger = burger
    super
  end

  def cost
    @burger.cost + 15
  end
end

class Burger
  def cost
    50
  end

  def calories
    155
  end
end

class LargeBurger < Burger
  def cost
    super + 15
  end
end
