
User.destroy_all
Watchlist.destroy_all
Credit.destroy_all
Actor.destroy_all
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
space_odyssey = Movie.create!(title: "2001: A Space Odyssey", image: "/images/SpaceOdyssey.jpg", poster: "/images/SpaceOdysseyPoster.jpg", summary: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.", release_year: 1968, runtime: 141, genre: scifi, director: kubrick)

godfather1 = Movie.create!(title: "The Godfather", image: "/images/GodFather.jpg", poster: "/images/GodFatherPoster.jpg",summary: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando).", release_year: 1972, runtime: 175, genre: drama, director: coppola)

citizen_kane = Movie.create!(title: "Citizen Kane", image:"/images/CitizenKane.jpg", poster: "/images/CitizenKanePoster.jpg", summary: "When a reporter is assigned to decipher newspaper magnate Charles Foster Kane's (Orson Welles) dying words, his investigation gradually reveals the fascinating portrait of a complex man who rose from obscurity to staggering heights.", release_year: 1941, runtime: 119, genre: drama, director: welles)

raiders_lost_ark = Movie.create!(title: "Indiana Jones and the Raiders of the Lost Ark", image: "/images/LostArk.jpg", poster: "/images/LostArkPoster.jpg", summary: "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination.", release_year: 1981, runtime: 115, genre: action, director: spielberg)

will_be_blood = Movie.create!(title: "There Will Be Blood", image: "/images/WillBeBlood.jpg", poster: "/images/WillBeBloodPoster.jpg", summary: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.", release_year: 2007, runtime: 158, genre: drama, director: anderson)

dark_knight = Movie.create!(title: "The Dark Knight", image: "/images/DarkKnight.jpg", poster: "/images/DarkKnightPoster.jpg", summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", release_year: 2008, runtime: 152, genre: action, director: nolan)

airplane = Movie.create!(title: "Airplane!", image: "/images/Airplane.jpg", poster: "/images/Airplane.jpg", summary: "When the passengers and crew of a jet are incapacitated due to food poisoning, a rogue pilot with a drinking problem must cooperate with his ex-girlfriend turned stewardess to bring the plane to a safe landing.", release_year: 1980, runtime: 118, genre: comedy, director: abrahams)

alien = Movie.create!(title: "Alien", image: "/images/Alien.jpg", poster: "/images/AlienPoster.jpg", summary: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", release_year: 1979, runtime: 117, genre: horror, director: scott)

her = Movie.create!(title: "Her", image: "/images/Her.jpg", poster: "/images/HerPoster.jpg", summary: "Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right.", release_year: 2014, runtime: 126, genre: romance, director: jonze)


# ! Actors
# Space Odyssey
keir_dullea = Actor.create!(name: "Keir Dullea", image: "https://i.pravatar.cc/50")
gary_lockwood = Actor.create!(name: "Gary Lockwood", image: "https://i.pravatar.cc/50")
will_sylvester = Actor.create!(name: "William Sylvester", image: "https://i.pravatar.cc/50")

# Godfather
marlon_brando = Actor.create!(name: "Marlon Brando", image: "https://i.pravatar.cc/50")
al_pacino = Actor.create!(name: "Al Pacino", image:"https://i.pravatar.cc/50")

# Citizen Kane
joseph_cotten = Actor.create!(name: "Joseph Cotten", image: "https://i.pravatar.cc/50")
dorothy_comingore = Actor.create!(name: "Dorothy Comingore", image: "https://i.pravatar.cc/50")
agnes_moorehead = Actor.create!(name: "Agnes Moorehead", image: "https://i.pravatar.cc/50")

# Raiders of the Lost Ark
harrison_ford = Actor.create!(name: "Harrison Ford", image: "https://i.pravatar.cc/50")
karen_allen = Actor.create!(name: "Karen Allen", image: "https://i.pravatar.cc/50")

# There Will Be Blood
daniel_day_lewis = Actor.create!(name: "Daniel Day-Lewis", image: "https://i.pravatar.cc/50")
paul_dano = Actor.create!(name: "Paul Dano", image: "https://i.pravatar.cc/50")
dillon_freasier = Actor.create!(name: "Dillon Freasier", image: "https://i.pravatar.cc/50")

# Dark Knight
christian_bale = Actor.create!(name: "Christian Bale", image: "https://i.pravatar.cc/50")
heath_ledger = Actor.create!(name: "Heath Ledger", image: "https://i.pravatar.cc/50")
michael_cane = Actor.create!(name: "Michael Cane", image: "https://i.pravatar.cc/50")

# Airplane!
leslie_nielsen = Actor.create!(name: "Leslie Nielsen", image: "https://i.pravatar.cc/50")
robert_hays = Actor.create!(name: "Robert Hays", image: "https://i.pravatar.cc/50")
julie_hagerty = Actor.create!(name: "Julie Hagerty", image: "https://i.pravatar.cc/50")

# Alien
sigourney_weaver = Actor.create!(name: "Sigourney Weaver", image: "https://i.pravatar.cc/50")
yaphet_kotto = Actor.create!(name: "Yaphet Kotto", image: "https://i.pravatar.cc/50")
ian_holm = Actor.create!(name: "Ian Holm", image: "https://i.pravatar.cc/50")

# Her
joaquin_phoenix = Actor.create!(name: "Joaquin Phoenix", image: "https://i.pravatar.cc/50")
amy_adams = Actor.create!(name: "Amy Adams", image: "https://i.pravatar.cc/50")
scarlett_johansson = Actor.create!(name: "Scarlett Johansson", image: "https://i.pravatar.cc/50")


# ! Credits
# Space Odyssey
Credit.create!(actor: keir_dullea, movie: space_odyssey)
Credit.create!(actor: gary_lockwood, movie: space_odyssey)
Credit.create!(actor: will_sylvester, movie: space_odyssey)

# Godfather
Credit.create!(actor: marlon_brando, movie: godfather1)
Credit.create!(actor: al_pacino, movie: godfather1)

# Citizen Kane
Credit.create!(actor: joseph_cotten, movie: citizen_kane)
Credit.create!(actor: dorothy_comingore, movie: citizen_kane)
Credit.create!(actor: agnes_moorehead, movie: citizen_kane)

# Raiders of the Lost Ark
Credit.create!(actor: harrison_ford, movie: raiders_lost_ark)
Credit.create!(actor: karen_allen, movie: raiders_lost_ark)

# There Will Be Blood
Credit.create!(actor: daniel_day_lewis, movie: will_be_blood)
Credit.create!(actor: paul_dano, movie: will_be_blood)
Credit.create!(actor: dillon_freasier, movie: will_be_blood)

# The Dark Knight
Credit.create!(actor: christian_bale, movie: dark_knight)
Credit.create!(actor: heath_ledger, movie: dark_knight)
Credit.create!(actor: michael_cane, movie: dark_knight)

# Airplane!
Credit.create!(actor: leslie_nielsen, movie: airplane)
Credit.create!(actor: robert_hays, movie: airplane)
Credit.create!(actor: julie_hagerty, movie: airplane)

# Alien
Credit.create!(actor: sigourney_weaver, movie: alien)
Credit.create!(actor: yaphet_kotto, movie: alien)
Credit.create!(actor: ian_holm, movie: alien)

# Her
Credit.create!(actor: joaquin_phoenix, movie: her)
Credit.create!(actor: amy_adams, movie: her)
Credit.create!(actor: scarlett_johansson, movie: her)

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