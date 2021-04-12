
User.destroy_all
Watchlist.destroy_all
Actor.destroy_all
Credit.destroy_all
Movie.destroy_all
Genre.destroy_all
Director.destroy_all
Review.destroy_all
Favorite.destroy_all

# * Movie poster (lorem picsum 500x200)
# https://picsum.photos/500/200

# * Avatar (pravatar 50x50)
# https://i.pravatar.cc/50

# Users
guest = User.create!(email: "guest@gmail.com", password: "password", username: "guest")
seed1 = User.create!(email: "seed1@gmail.com", password: "123456", username: "seed1")

# Directors
kubrick = Director.create!(name: "Stanley Kubrick", image: "https://i.pravatar.cc/50")
coppola = Director.create!(name: "Francis Ford Coppola", image: "https://i.pravatar.cc/50")

# Genres
scifi = Genre.create!(name: "Sci-Fi")
drama = Genre.create!(name: "Drama")

# Movies
space_odyssey = Movie.create!(title: "2001: A Space Odyssey", image: "https://picsum.photos/500/200", summary: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.", genre: scifi, director: kubrick)
godfather1 = Movie.create!(title: "The Godfather", image:"https://picsum.photos/500/200", summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando).", genre: drama, director: coppola)

# Actors
keir_dullea = Actor.create!(name: "Keir Dullea", image: "https://i.pravatar.cc/50", movie: space_odyssey)
gary_lockwood = Actor.create!(name: "Gary Lockwood", image: "https://i.pravatar.cc/50", movie: space_odyssey)
will_sylvester = Actor.create!(name: "William Sylvester", image: "https://i.pravatar.cc/50", movie: space_odyssey)

marlon_brando = Actor.create!(name: "Marlon Brando", image: "https://i.pravatar.cc/50", movie: godfather1)
al_pacino = Actor.create!(name: "Al Pacino", image:"https://i.pravatar.cc/50", movie: godfather1)

# Credits
space_odyssey_credits = Credit.create!(cast: [keir_dullea, gary_lockwood, will_sylvester], movie: space_odyssey)
godfather1_credits = Credit.create(cast: [marlon_brando, al_pacino], movie: godfather1)

# Reviews
Review.create!(comment: "I loved this movie!", rating: 5, user: seed1, movie: space_odyssey)


# Watchlists
seed1_watchlist = Watchlist.create!(name: "My Watchlist", user: seed1)


# Favorites
Favorite.create!(movie: space_odyssey, watchlist: seed1_watchlist)