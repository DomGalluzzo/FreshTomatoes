json.ignore_nil!
json.array! @movies do |movie|
  json.partial! 'movie', movie: movie
  json.actors movie.actors do |actor|
    json.id actor.id
    json.name actor.name
    json.image actor.image
  end
end
