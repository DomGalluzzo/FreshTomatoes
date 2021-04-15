json.ignore_nil!
json.extract! @movie, :id, :title, :image, :summary, :release_year, :runtime, :genre_id, :director_id

json.actors @movie.actors do |actor|
  json.extract! actor, :name
end
