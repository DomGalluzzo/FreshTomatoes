
User.destroy_all
Watchlist.destroy_all
Actor.destroy_all
# Credit.destroy_all
Movie.destroy_all
Genre.destroy_all
Director.destroy_all
Review.destroy_all
Favorite.destroy_all

# * Movie poster (lorem picsum 500x200)
# https://picsum.photos/500/200

# * Avatar (pravatar 50x50)
# https://i.pravatar.cc/50

# ! Users
guest = User.create!(email: "guest@gmail.com", password: "password", username: "guest")
seed1 = User.create!(email: "seed1@gmail.com", password: "123456", username: "seed1")

# ! Directors
kubrick = Director.create!(name: "Stanley Kubrick", image: "https://i.pravatar.cc/50")
coppola = Director.create!(name: "Francis Ford Coppola", image: "https://i.pravatar.cc/50")
welles = Director.create!(name: "Orson Welles", image: "https://i.pravatar.cc/50")
spielberg = Director.create!(name: "Stephen Spielberg", image: "https://i.pravatar.cc/50")
anderson = Director.create!(name: "Paul Thomas Anderson", image: "https://i.pravatar.cc/50")
nolan = Director.create!(name: "Christopher Nolan", image: "https://i.pravatar.cc/50")
abrahams = Director.create!(name: "Jim Abrahams", image: "https://i.pravatar.cc/50")
scott = Director.create!(name: "Ridley Scott", image: "https://i.pravatar.cc/50")
jonze = Director.create!(name: "Spike Jonze", image: "https://i.pravatar.cc/50")

# ! Genres
scifi = Genre.create!(name: "Sci-Fi")
drama = Genre.create!(name: "Drama")
action = Genre.create!(name: "Action")
comedy = Genre.create!(name: "Comedy")
horror = Genre.create!(name: "Horror")
romance = Genre.create!(name: "Romance")

# ! Movies
space_odyssey = Movie.create!(title: "2001: A Space Odyssey", image: "/images/SpaceOdyssey.jpg", summary: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.", release_year: 1968, runtime: 141, genre: scifi, director: kubrick)

godfather1 = Movie.create!(title: "The Godfather", image: "https://picsum.photos/1000/400", summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando).", release_year: 1972, runtime: 175, genre: drama, director: coppola)

citizen_kane = Movie.create!(title: "Citizen Kane", image:"https://picsum.photos/1000/400", summary: "When a reporter is assigned to decipher newspaper magnate Charles Foster Kane's (Orson Welles) dying words, his investigation gradually reveals the fascinating portrait of a complex man who rose from obscurity to staggering heights.", release_year: 1941, runtime: 119, genre: drama, director: welles)

raiders_lost_ark = Movie.create!(title: "Indiana Jones and the Raiders of the Lost Ark", image: "https://picsum.photos/1000/400", summary: "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination.", release_year: 1981, runtime: 115, genre: action, director: spielberg)

will_be_blood = Movie.create!(title: "There Will Be Blood", image: "https://picsum.photos/1000/400", summary: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.", release_year: 2007, runtime: 158, genre: drama, director: anderson)

dark_knight = Movie.create!(title: "The Dark Knight", image: "https://picsum.photos/1000/400", summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", release_year: 2008, runtime: 152, genre: action, director: nolan)

airplane = Movie.create!(title: "Airplane!", image: "https://picsum.photos/1000/400", summary: "When the passengers and crew of a jet are incapacitated due to food poisoning, a rogue pilot with a drinking problem must cooperate with his ex-girlfriend turned stewardess to bring the plane to a safe landing.", release_year: 1980, runtime: 118, genre: comedy, director: abrahams)

alien = Movie.create!(title: "Alien", image: "https://picsum.photos/1000/400", summary: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", release_year: 1979, runtime: 117, genre: horror, director: scott)

her = Movie.create!(title: "Her", image: "https://picsum.photos/1000/400", summary: "Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right.", release_year: 2014, runtime: 126, genre: romance, director: jonze)


# ! Actors
# Space Odyssey
keir_dullea = Actor.create!(name: "Keir Dullea", image: "https://i.pravatar.cc/50", movie: space_odyssey)
gary_lockwood = Actor.create!(name: "Gary Lockwood", image: "https://i.pravatar.cc/50", movie: space_odyssey)
will_sylvester = Actor.create!(name: "William Sylvester", image: "https://i.pravatar.cc/50", movie: space_odyssey)

# Godfather
marlon_brando = Actor.create!(name: "Marlon Brando", image: "https://i.pravatar.cc/50", movie: godfather1)
al_pacino = Actor.create!(name: "Al Pacino", image:"https://i.pravatar.cc/50", movie: godfather1)

# Citizen Kane
joseph_cotten = Actor.create!(name: "Joseph Cotten", image: "https://i.pravatar.cc/50", movie: citizen_kane)
dorothy_comingore = Actor.create!(name: "Dorothy Comingore", image: "https://i.pravatar.cc/50", movie: citizen_kane)
agnes_moorehead = Actor.create!(name: "Agnes Moorehead", image: "https://i.pravatar.cc/50", movie: citizen_kane)

# Raiders of the Lost Ark
harrison_ford = Actor.create!(name: "Harrison Ford", image: "https://i.pravatar.cc/50", movie: raiders_lost_ark)
karen_allen = Actor.create!(name: "Karen Allen", image: "https://i.pravatar.cc/50", movie: raiders_lost_ark)

# There Will Be Blood
daniel_day_lewis = Actor.create!(name: "Daniel Day-Lewis", image: "https://i.pravatar.cc/50", movie: will_be_blood)
paul_dano = Actor.create!(name: "Paul Dano", image: "https://i.pravatar.cc/50", movie: will_be_blood)
dillon_freasier = Actor.create!(name: "Dillon Freasier", image: "https://i.pravatar.cc/50", movie: will_be_blood)

# Dark Knight
christian_bale = Actor.create!(name: "Christian Bale", image: "https://i.pravatar.cc/50", movie: dark_knight)
heath_ledger = Actor.create!(name: "Heath Ledger", image: "https://i.pravatar.cc/50", movie: dark_knight)
michael_cane = Actor.create!(name: "Michael Cane", image: "https://i.pravatar.cc/50", movie: dark_knight)

# Airplane!
leslie_nielsen = Actor.create!(name: "Leslie Nielsen", image: "https://i.pravatar.cc/50", movie: airplane)
robert_hays = Actor.create!(name: "Robert Hays", image: "https://i.pravatar.cc/50", movie: airplane)
julie_hagerty = Actor.create!(name: "Julie Hagerty", image: "https://i.pravatar.cc/50", movie: airplane)

# Alien
sigourney_weaver = Actor.create!(name: "Sigourney Weaver", image: "https://i.pravatar.cc/50", movie: alien)
yaphet_kotto = Actor.create!(name: "Yaphet Kotto", image: "https://i.pravatar.cc/50", movie: alien)
ian_holm = Actor.create!(name: "Ian Holm", image: "https://i.pravatar.cc/50", movie: alien)

# Her
joaquin_phoenix = Actor.create!(name: "Joaquin Phoenix", image: "https://i.pravatar.cc/50", movie: her)
amy_adams = Actor.create!(name: "Amy Adams", image: "https://i.pravatar.cc/50", movie: her)
scarlett_johansson = Actor.create!(name: "Scarlett Johansson", image: "https://i.pravatar.cc/50", movie: her)

# ! Credits
# space_odyssey_credits = Credit.create!(cast: [keir_dullea, gary_lockwood, will_sylvester], movie: space_odyssey)
# godfather1_credits = Credit.create!(cast: [marlon_brando, al_pacino], movie: godfather1)
# citizen_kane_credits = Credit.create!(cast: [joseph_cotten, dorothy_comingore, agnes_moorehead], movie: citizen_kane)
# lost_ark_credits = Credit.create!(cast: [harrison_ford, karen_allen], movie: raiders_lost_ark)
# will_be_blood_credits = Credit.create!(cast: [daniel_day_lewis, paul_dano, dillon_freasier], movie: will_be_blood)
# dark_knight_credits = Credit.create!(cast: [christian_bale, heath_ledger, michael_cane], movie: dark_knight)
# airplane_credits = Credit.create!(cast: [leslie_nielsen, robert_hays, julie_hagerty], movie: airplane)
# alien_credits = Credit.create!(cast: [sigourney_weaver, yaphet_kotto, ian_holm], movie: alien)
# her_credits = Credit.create!(cast: [joaquin_phoenix, amy_adams, scarlett_johansson], movie: her)

# ! Reviews
Review.create!(comment: "I loved this movie!", rating: 5, user: seed1, movie: space_odyssey)
Review.create!(comment: "Best one out of all of them", rating: 5, user: seed1, movie: godfather1)
Review.create!(comment: "Love it every time I watch it.", rating: 5, user: seed1, movie: raiders_lost_ark)
Review.create!(comment: "Liked it a lot, but didn't love it.", rating: 4, user: seed1, movie: will_be_blood)
Review.create!(comment: "I'm more of a Marvel fan, but this was still pretty good", rating: 4, user: seed1, movie: dark_knight)
Review.create!(comment: "Absolutely hilarious.", rating: 5, user: seed1, movie: airplane)
Review.create!(comment: "Probably my favorite movie ever. It has really stood the test of time.", rating: 5, user: seed1, movie: alien)
Review.create!(comment: "Really kinda weird, but still kinda good? I don't know how I feel about this one...", rating: 3, user: seed1, movie: her)


# ! Watchlists
seed1_watchlist = Watchlist.create!(name: "My Watchlist", user: seed1)


# ! Favorites
Favorite.create!(movie: space_odyssey, watchlist: seed1_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed1_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed1_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed1_watchlist)
Favorite.create!(movie: airplane, watchlist: seed1_watchlist)
Favorite.create!(movie: alien, watchlist: seed1_watchlist)