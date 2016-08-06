class User
  attr_accessor :first_name, :last_name, :title
  def initialize(**opts)
    self.first_name = opts.fetch(:first_name, 'John')
    self.last_name = opts.fetch(:last_name, 'Smith')
    self.title = opts.fetch(:title, 'Mr')
  end

  def name
    NameDecorator.new(self)
  end
end

class Customer
  def name
    MiddleNameDecorator.new(self)
  end
end

class NameDecorator
  attr_accessor :user

  def initialize(user)
    self.user = user
  end

  def name
    "#{user.first_name} #{user.last_name}"
  end

  def formal_name
    "#{user.title} #{user.first_name} #{user.last_name}"
  end

  def first_name?
    first_name.present?
  end

  def to_s
    name
  end
end

class MiddleNameDecorator < NameDecorator
  def initialize(**opts)
    self.something = opts(:grab)
    super
  end

  def with_middle_name
    "#{user.first_name} + #{user.middle_name} + #{user.last_name}"
  end
end
