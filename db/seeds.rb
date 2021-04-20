require "faker"

Watchlist.destroy_all
User.destroy_all
Credit.destroy_all
Actor.destroy_all
Movie.destroy_all
Genre.destroy_all
Director.destroy_all
Review.destroy_all

# * Movie poster (lorem picsum 500x200)
# https://picsum.photos/500/200

# * Avatar (pravatar 50x50)
# https://i.pravatar.cc/50

# ! Users
guest = User.create!(email: "guest@gmail.com", password: "password", username: "guest")
seed1 = User.create!(email: "seed1@gmail.com", password: "123456", username: "seed1")
seed2 = User.create!(email: "seed2@gmail.com", password: "123456", username: "seed2")
seed3 = User.create!(email: "seed3@gmail.com", password: "123456", username: "seed3")
seed4 = User.create!(email: "seed4@gmail.com", password: "123456", username: "seed4")
seed5 = User.create!(email: "seed5@gmail.com", password: "123456", username: "seed5")

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

airplane = Movie.create!(title: "Airplane!", image: "/images/Airplane.jpg", poster: "/images/AirplanePoster.jpg", summary: "When the passengers and crew of a jet are incapacitated due to food poisoning, a rogue pilot with a drinking problem must cooperate with his ex-girlfriend turned stewardess to bring the plane to a safe landing.", release_year: 1980, runtime: 118, genre: comedy, director: abrahams)

alien = Movie.create!(title: "Alien", image: "/images/Alien.jpg", poster: "/images/AlienPoster.jpg", summary: "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.", release_year: 1979, runtime: 117, genre: horror, director: scott)

her = Movie.create!(title: "Her", image: "/images/Her.jpg", poster: "/images/HerPoster.jpg", summary: "Left heartbroken after his marriage ends, Theodore (Joaquin Phoenix) becomes fascinated with a new operating system which reportedly develops into an intuitive and unique entity in its own right.", release_year: 2014, runtime: 126, genre: romance, director: jonze)


# ! Actors
# Space Odyssey
keir_dullea = Actor.create!(name: "Keir Dullea", image: "https://i.pravatar.cc/50", character: "Dr. Dave Bowman")
gary_lockwood = Actor.create!(name: "Gary Lockwood", image: "https://i.pravatar.cc/50", character: "Dr. Frank Poole")
will_sylvester = Actor.create!(name: "William Sylvester", image: "https://i.pravatar.cc/50", character: "Dr. Heywood R. Floyd")
daniel_richter = Actor.create!(name: "Daniel Richter", character: "Moon-Watcher")
leonard_rossiter = Actor.create!(name: "Leonard Rossiter", character: "Dr. Andrei Smyslov")

# Godfather
marlon_brando = Actor.create!(name: "Marlon Brando", image: "https://i.pravatar.cc/50", character: "Don Vito Corleone")
al_pacino = Actor.create!(name: "Al Pacino", image:"https://i.pravatar.cc/50", character: "Michael Corleone")
james_caan = Actor.create!(name: "James Caan", character: "Sonny Corleone" )
richard_castellano = Actor.create!(name: "Richard S. Castellano", character: "Clemenza")
robert_duvall = Actor.create!(name: "Robert Duvall", image:"https://i.pravatar.cc/50", character: "Tom Hagen")
sterling_hayden = Actor.create!(name: "Sterling Hayden", character: "Capt. McCluskey")


# Citizen Kane
joseph_cotten = Actor.create!(name: "Joseph Cotten", image: "https://i.pravatar.cc/50", character: "Jedediah Leland")
dorothy_comingore = Actor.create!(name: "Dorothy Comingore", image: "https://i.pravatar.cc/50", character: "Susan Alexander Kane")
agnes_moorehead = Actor.create!(name: "Agnes Moorehead", image: "https://i.pravatar.cc/50", character: "Mary Kane")
ruth_warrick = Actor.create!(name: "Ruth Warrick", character: "Emily Monroe Norton Kane")
ray_collins = Actor.create!(name: "Ray Collins", character: "James W. Gettys")

# Raiders of the Lost Ark
harrison_ford = Actor.create!(name: "Harrison Ford", image: "https://i.pravatar.cc/50", character: "Indiana Jones")
karen_allen = Actor.create!(name: "Karen Allen", image: "https://i.pravatar.cc/50", character: "Marion")
paul_freeman = Actor.create!(name: "Paul Freeman", character: "Belloq")
ronald_lacey = Actor.create!(name: "Ronald Lacey", character: "Toht")

# There Will Be Blood
daniel_day_lewis = Actor.create!(name: "Daniel Day-Lewis", image: "https://i.pravatar.cc/50", character: "Daniel Plainview")
barry_del_sherman = Actor.create!(name: "Barry Del Sherman", image: "https://i.pravatar.cc/50", character: "H.B. Ailman")
dillon_freasier = Actor.create!(name: "Dillon Freasier", image: "https://i.pravatar.cc/50", character: "HW")
paul_f_tompkins = Actor.create!(name: "Paul F. Tompkins", character: "Prescott")

# Dark Knight
christian_bale = Actor.create!(name: "Christian Bale", image: "https://i.pravatar.cc/50", character: "Bruce Wayne/Batman")
heath_ledger = Actor.create!(name: "Heath Ledger", image: "https://i.pravatar.cc/50", character: "Joker")
michael_cane = Actor.create!(name: "Michael Cane", image: "https://i.pravatar.cc/50", character: "Alfred")
aaron_eckhart = Actor.create!(name: "Aaron Eckhart", character: "Harvey Dent")
maggie_g = Actor.create!(name: "Maggie Gyllenhaal", character: "Rachel")

# Airplane!
leslie_nielsen = Actor.create!(name: "Leslie Nielsen", image: "https://i.pravatar.cc/50", character: "Dr. Rumack")
robert_hays = Actor.create!(name: "Robert Hays", image: "https://i.pravatar.cc/50", character: "Ted Striker")
julie_hagerty = Actor.create!(name: "Julie Hagerty", image: "https://i.pravatar.cc/50", character: "Elaine Dickinson")
kareem = Actor.create!(name: "Kareem Abdul-Jabbar", character: "Roger Murdock")
lloyd_bridges = Actor.create!(name: "Lloyd Bridges", character: "Steve McCroskey")

# Alien
sigourney_weaver = Actor.create!(name: "Sigourney Weaver", image: "https://i.pravatar.cc/50", character: "Ripley")
yaphet_kotto = Actor.create!(name: "Yaphet Kotto", image: "https://i.pravatar.cc/50", character: "Parker")
ian_holm = Actor.create!(name: "Ian Holm", image: "https://i.pravatar.cc/50", character: "Ash")
tom_skerritt = Actor.create!(name: "Tom Skerritt", character: "Dallas")
v_cartwright = Actor.create!(name: "Veronica Cartwright", character: "Lambert")

# Her
joaquin_phoenix = Actor.create!(name: "Joaquin Phoenix", image: "https://i.pravatar.cc/50", character: "Theodore")
amy_adams = Actor.create!(name: "Amy Adams", image: "https://i.pravatar.cc/50", character: "Amy")
scarlett_johansson = Actor.create!(name: "Scarlett Johansson", image: "https://i.pravatar.cc/50", character: "Samantha (voice)")
chris_pratt = Actor.create!(name: "Chris Pratt", character: "Paul")


# ! Credits
# Space Odyssey
Credit.create!(actor: keir_dullea, movie: space_odyssey)
Credit.create!(actor: gary_lockwood, movie: space_odyssey)
Credit.create!(actor: will_sylvester, movie: space_odyssey)
Credit.create!(actor: daniel_richter, movie: space_odyssey)
Credit.create!(actor: leonard_rossiter, movie: space_odyssey)

# Godfather
Credit.create!(actor: marlon_brando, movie: godfather1)
Credit.create!(actor: al_pacino, movie: godfather1)
Credit.create!(actor: james_caan, movie: godfather1)
Credit.create!(actor: richard_castellano, movie: godfather1)
Credit.create!(actor: robert_duvall, movie: godfather1)
Credit.create!(actor: sterling_hayden, movie: godfather1)

# Citizen Kane
Credit.create!(actor: joseph_cotten, movie: citizen_kane)
Credit.create!(actor: dorothy_comingore, movie: citizen_kane)
Credit.create!(actor: agnes_moorehead, movie: citizen_kane)
Credit.create!(actor: ruth_warrick, movie: citizen_kane)
Credit.create!(actor: ray_collins, movie: citizen_kane)

# Raiders of the Lost Ark
Credit.create!(actor: harrison_ford, movie: raiders_lost_ark)
Credit.create!(actor: karen_allen, movie: raiders_lost_ark)
Credit.create!(actor: paul_freeman, movie: raiders_lost_ark)
Credit.create!(actor: ronald_lacey, movie: raiders_lost_ark)

# There Will Be Blood
Credit.create!(actor: daniel_day_lewis, movie: will_be_blood)
Credit.create!(actor: paul_freeman, movie: will_be_blood)
Credit.create!(actor: dillon_freasier, movie: will_be_blood)
Credit.create!(actor: paul_f_tompkins, movie: will_be_blood)

# The Dark Knight
Credit.create!(actor: christian_bale, movie: dark_knight)
Credit.create!(actor: heath_ledger, movie: dark_knight)
Credit.create!(actor: michael_cane, movie: dark_knight)
Credit.create!(actor: aaron_eckhart, movie: dark_knight)
Credit.create!(actor: maggie_g, movie: dark_knight)

# Airplane!
Credit.create!(actor: leslie_nielsen, movie: airplane)
Credit.create!(actor: robert_hays, movie: airplane)
Credit.create!(actor: julie_hagerty, movie: airplane)
Credit.create!(actor: kareem, movie: airplane)
Credit.create!(actor: lloyd_bridges, movie: airplane)

# Alien
Credit.create!(actor: sigourney_weaver, movie: alien)
Credit.create!(actor: yaphet_kotto, movie: alien)
Credit.create!(actor: ian_holm, movie: alien)
Credit.create!(actor: tom_skerritt, movie: alien)
Credit.create!(actor: v_cartwright, movie: alien)

# Her
Credit.create!(actor: joaquin_phoenix, movie: her)
Credit.create!(actor: amy_adams, movie: her)
Credit.create!(actor: scarlett_johansson, movie: her)
Credit.create!(actor: chris_pratt, movie: her)

# ! Reviews
# Seed 1
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: citizen_kane)


# Seed 2
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: citizen_kane)

# Seed 3
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: citizen_kane)

# Seed 4
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: citizen_kane)

# Seed 5
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: citizen_kane)

# ! Watchlists
# Seed 1
seed1_watchlist = Watchlist.create!(name: "My Watchlist", user: seed1)

# Seed 2
seed2_watchlist = Watchlist.create!(name: "My Favorites", user: seed2)

# Seed 3
seed3_watchlist = Watchlist.create!(name: "Watchlist", user: seed3)

# Seed 4
seed4_watchlist = Watchlist.create!(name: "Stuff to watch", user: seed4)

# Seed 5
seed5_watchlist = Watchlist.create!(name: "Favorites", user: seed5)

# ! Favorites
# Seed 1
Favorite.create!(movie: space_odyssey, watchlist: seed1_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed1_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed1_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed1_watchlist)
Favorite.create!(movie: airplane, watchlist: seed1_watchlist)
Favorite.create!(movie: alien, watchlist: seed1_watchlist)

# Seed 2
Favorite.create!(movie: space_odyssey, watchlist: seed2_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed2_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed2_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed2_watchlist)
Favorite.create!(movie: airplane, watchlist: seed2_watchlist)
Favorite.create!(movie: alien, watchlist: seed2_watchlist)

# Seed 3
Favorite.create!(movie: space_odyssey, watchlist: seed3_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed3_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed3_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed3_watchlist)
Favorite.create!(movie: airplane, watchlist: seed3_watchlist)
Favorite.create!(movie: alien, watchlist: seed3_watchlist)

# Seed 4
Favorite.create!(movie: space_odyssey, watchlist: seed4_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed4_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed4_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed4_watchlist)
Favorite.create!(movie: airplane, watchlist: seed4_watchlist)
Favorite.create!(movie: alien, watchlist: seed4_watchlist)

# Seed 5
Favorite.create!(movie: space_odyssey, watchlist: seed5_watchlist)
Favorite.create!(movie: godfather1, watchlist: seed5_watchlist)
Favorite.create!(movie: citizen_kane, watchlist: seed5_watchlist)
Favorite.create!(movie: raiders_lost_ark, watchlist: seed5_watchlist)
Favorite.create!(movie: airplane, watchlist: seed5_watchlist)
Favorite.create!(movie: alien, watchlist: seed5_watchlist)