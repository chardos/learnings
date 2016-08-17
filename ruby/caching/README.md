#Caching

- Use `redis-rails` gem
- Search the app for `perform_caching` and remove all the `= false`'s
- Caching checks the `updated_at` attribute of models.
- Make sure when a child is updated, the parents get touched as well http://stackoverflow.com/questions/16826140/how-to-touch-a-habtm-relation

Example usage:
```ruby
<% cache ['category_list', @product] do %>
  <% @categories.each do |category| %>
    <% cache ['list_item', category] do %>
      <%  category == @category %>
      <%= link_to category.title, category_path(category.id), class: "Link #{' is-active' if category == @category}" %>
    <% end %>
  <% end %>
<% end %>
```
