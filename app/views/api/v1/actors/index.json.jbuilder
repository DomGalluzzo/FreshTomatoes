json.ignore_nil!
json.array! @actors do |actor|
  json.extract! actor, :id, :name, :image
  json.movies actor.movies do |movie|
    json.id movie.id
    json.title movie.title
    json.image movie.image
  end
end
