json.ignore_nil!
json.extract! @actor, :id, :name, :image

json.movies @actor.movies do |movie|
  json.extract! movie, :id, :title, :image
end
