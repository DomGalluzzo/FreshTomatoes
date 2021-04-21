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
seed1 = User.create!(email: "seed1@gmail.com", password: "password", username: Faker::Internet.username)
seed2 = User.create!(email: "seed2@gmail.com", password: "password", username: Faker::Internet.username)
seed3 = User.create!(email: "seed3@gmail.com", password: "password", username: Faker::Internet.username)
seed4 = User.create!(email: "seed4@gmail.com", password: "password", username: Faker::Internet.username)
seed5 = User.create!(email: "seed5@gmail.com", password: "password", username: Faker::Internet.username)
seed6 = User.create!(email: "seed6@gmail.com", password: "password", username: Faker::Internet.username)
seed7 = User.create!(email: "seed7@gmail.com", password: "password", username: Faker::Internet.username)
seed8 = User.create!(email: "seed8@gmail.com", password: "password", username: Faker::Internet.username)
seed9 = User.create!(email: "seed9@gmail.com", password: "password", username: Faker::Internet.username)
seed10 = User.create!(email: "seed10@gmail.com", password: "password", username: Faker::Internet.username)
seed11 = User.create!(email: "seed11@gmail.com", password: "password", username: Faker::Internet.username)
seed12 = User.create!(email: "seed12@gmail.com", password: "password", username: Faker::Internet.username)
seed13 = User.create!(email: "seed13@gmail.com", password: "password", username: Faker::Internet.username)


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
coogler = Director.create!(name: "Ryan Coogler")
cooley = Director.create!(name: "Josh Cooley")
unkrich = Director.create!(name: "Lee Unkrich")
docter = Director.create!(name: "Pete Docter")
krasinski = Director.create!(name: "John Krasinski")
peele = Director.create!(name: "Jordan Peele")

# ! Genres
scifi = Genre.create!(name: "Sci-Fi")
drama = Genre.create!(name: "Drama")
action = Genre.create!(name: "Action")
comedy = Genre.create!(name: "Comedy")
horror = Genre.create!(name: "Horror")
romance = Genre.create!(name: "Romance")
animation = Genre.create!(name: "Animation")

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

black_panther = Movie.create!(title: "Black Panther", summary: "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.", release_year: 2018, runtime: 124, genre: action, director: coogler)

dunkirk = Movie.create!(title: "Dunkirk", summary: "In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk. Under air and ground cover from British and French forces, troops were slowly and methodically evacuated from the beach using every serviceable naval and civilian vessel that could be found. At the end of this heroic mission, 330,000 French, British, Belgian and Dutch soldiers were safely evacuated.", release_year: 2017, runtime: 107, genre: action, director: nolan)

toy_story_4 = Movie.create!(title: "Toy Story 4", summary: "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days, they soon start to realize that they're worlds apart when it comes to what they want from life as a toy.", release_year: 2019, runtime: 100, genre: animation, director: cooley)

coco = Movie.create!(title: "Coco", summary: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history.", release_year: 2017, runtime: 109, genre: animation, director: unkrich)

inside_out = Movie.create!(title: "Inside Out", summary: "Riley (Kaitlyn Dias) is a happy, hockey-loving 11-year-old Midwestern girl, but her world turns upside-down when she and her parents move to San Francisco. Riley's emotions -- led by Joy (Amy Poehler) -- try to guide her through this difficult, life-changing event. However, the stress of the move brings Sadness (Phyllis Smith) to the forefront. When Joy and Sadness are inadvertently swept into the far reaches of Riley's mind, the only emotions left in Headquarters are Anger, Fear and Disgust.", release_year: 2015, runtime: 95, genre: animation, director: docter)

quiet_place = Movie.create!(title: "A Quiet Place", summary: "If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.", release_year: 2018, runtime: 90, genre: horror, director: krasinski)

get_out = Movie.create!(title: "Get Out", summary: "Now that Chris (Daniel Kaluuya) and his girlfriend, Rose (Allison Williams), have reached the meet-the-parents milestone of dating, she invites him for a weekend getaway upstate with Missy and Dean. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.", release_year: 2017, runtime: 104, genre: horror, director: peele)

inception = Movie.create!(title: "Inception", summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", release_year: 2010, runtime: 148, genre: action, director: nolan)


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

# Black Panther
chadwick_boseman = Actor.create!(name: "Chadwick Boseman", character: "T'Challa, Black Panther")
michael_b_jordan = Actor.create!(name: "Michael B. Jordan", character: "Erik Killmonger")
lupita_nyongo = Actor.create!(name: "Lupita Nyong'o", character: "Nakia")
danai_gurira = Actor.create!(name: "Danai Gurira", character: "Okoye")
martin_freeman = Actor.create!(name: "Martin Freeman", character: "Everett K. Ross")

# Dunkirk
fionn_whitehead = Actor.create!(name: "Fionn Whitehead", character: "Tommy")
tom_carney = Actor.create!(name: "Tomy Glynn-Carney", character: "Peter")
jack_lowden = Actor.create!(name: "Jack Lowden", character: "Collins")
harry_styles = Actor.create!(name: "Harry Styles", character: "Alex")

# Toy Story 4
tom_hanks = Actor.create!(name: "Tom Hanks", character: "Woody (voice)")
tim_allen = Actor.create!(name: "Tim Allen", character: "Buzz Lightyear (voice)")
annie_potts = Actor.create!(name: "Annie Potts", character: "Bo Peep (voice)")
tony_hale = Actor.create!(name: "Tony Hale", character: "Forky (voice)")
keegan_m_key = Actor.create!(name: "Keegan-Michael Key", character: "Ducky (voice)")

# Coco
anthony_gonzalez = Actor.create!(name: "Anthony Gonzalez", character: "Miguel (voice)")
gael_bernal = Actor.create(name: "Gael Garcia Bernal", character: "Hector (voice)")
benjamin_bratt = Actor.create!(name: "Benjamin Bratt", character: "Ernesto de la Cruz (voice)")
alanna_ubach = Actor.create!(name: "Alanna Ubach", character: "Mama Imelda (voice)")
jaime_camil = Actor.create!(name: "Jaime Camil", character: "Papa (voice)")

# Inside Out
amy_poehler = Actor.create!(name: "Amy Poehler", character: "Joy (voice)")
phyllis_smith = Actor.create!(name: "Phyllis Smith", character: "Sadness (voice)")
richard_kind = Actor.create!(name: "Richard Kind", character: "Bing Bong (voice)")
bill_hader = Actor.create!(name: "Bill Hader", character: "Fear (voice)")
lewis_black = Actor.create!(name: "Lewis Black", character: "Anger (voice)")
mindy_kaling = Actor.create!(name: "Mindy Kaling", character: "Disgust (voice)")

# A Quiet Place
emily_blunt = Actor.create!(name: "Emily Blunt", character: "Evelyn Abbott")
john_krasinski = Actor.create!(name: "John Krasinski", character: "Lee Abbott")
millicent = Actor.create!(name: "Millicent Simmonds", character: "Regan Abbott")
noah_jupe = Actor.create!(name: "Noah Jupe", character: "Marcus Abbott")
cade_woodward = Actor.create!(name: "Cade Woodward", character: "Beau Abbott")

# Get Out
daniel_kaluuya = Actor.create!(name: "Daniel Kaluuya", character: "Chris Washington")
allison_williams = Actor.create!(name: "Allison Williams", character: "Rose Armitage")
catherine_keener = Actor.create!(name: "Catherine Keener", character: "Missy Armitage")
bradley_whitford = Actor.create!(name: "Bradley Whitford", character: "Dean Armitage")
marcus_henderson = Actor.create!(name: "Marcus Henderson", character: "Walter")

# Inception
leo_dicaprio = Actor.create!(name: "Leonardo DiCaprio", character: "Cobb")
gordon_levitt = Actor.create!(name: "Joseph Gordon-Levitt", character: "Arthur")
elliot_page = Actor.create!(name: "Elliot Page", character: "Ariadne (as Ellen Page)")
tom_hardy = Actor.create!(name: "Tom Hardy", character: "Eames")



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

# Black Panther
Credit.create!(actor: chadwick_boseman, movie: black_panther)
Credit.create!(actor: michael_b_jordan, movie: black_panther)
Credit.create!(actor: lupita_nyongo, movie: black_panther)
Credit.create!(actor: danai_gurira, movie: black_panther)
Credit.create!(actor: martin_freeman, movie: black_panther)

# Dunkirk
Credit.create!(actor: fionn_whitehead, movie: dunkirk)
Credit.create!(actor: tom_carney, movie: dunkirk)
Credit.create!(actor: jack_lowden, movie: dunkirk)
Credit.create!(actor: harry_styles, movie: dunkirk)

# Toy Story 4
Credit.create!(actor: tom_hanks, movie: toy_story_4)
Credit.create!(actor: tim_allen, movie: toy_story_4)
Credit.create!(actor: annie_potts, movie: toy_story_4)
Credit.create!(actor: tony_hale, movie: toy_story_4)
Credit.create!(actor: keegan_m_key, movie: toy_story_4)

# Coco
Credit.create!(actor: anthony_gonzalez, movie: coco)
Credit.create!(actor: gael_bernal, movie: coco)
Credit.create!(actor: benjamin_bratt, movie: coco)
Credit.create!(actor: alanna_ubach, movie: coco)
Credit.create!(actor: jaime_camil, movie: coco)

# Inside Out
Credit.create!(actor: amy_poehler, movie: inside_out)
Credit.create!(actor: phyllis_smith, movie: inside_out)
Credit.create!(actor: richard_kind, movie: inside_out)
Credit.create!(actor: bill_hader, movie: inside_out)
Credit.create!(actor: lewis_black, movie: inside_out)
Credit.create!(actor: mindy_kaling, movie: inside_out)

# A Quiet Place
Credit.create!(actor: emily_blunt, movie: quiet_place)
Credit.create!(actor: john_krasinski, movie: quiet_place)
Credit.create!(actor: millicent, movie: quiet_place)
Credit.create!(actor: noah_jupe, movie: quiet_place)
Credit.create!(actor: cade_woodward, movie: quiet_place)

# Get Out
Credit.create!(actor: daniel_kaluuya, movie: get_out)
Credit.create!(actor: allison_williams, movie: get_out)
Credit.create!(actor: catherine_keener, movie: get_out)
Credit.create!(actor: bradley_whitford, movie: get_out)
Credit.create!(actor: marcus_henderson, movie: get_out)

# Inception
Credit.create!(actor: leo_dicaprio, movie: inception)
Credit.create!(actor: gordon_levitt, movie: inception)
Credit.create!(actor: elliot_page, movie: inception)
Credit.create!(actor: tom_hardy, movie: inception)

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
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed1, movie: inception)


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
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed2, movie: inception)

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
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed3, movie: inception)

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
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed4, movie: inception)

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
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed5, movie: inception)

# Seed 6
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed6, movie: inception)

# Seed 7
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed7, movie: inception)

# Seed 8
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed8, movie: inception)

# Seed 9
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed9, movie: inception)

# Seed 10
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed10, movie: inception)

# Seed 11
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed11, movie: inception)

# Seed 12
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed12, movie: inception)

# Seed 13
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: space_odyssey)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: godfather1)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: raiders_lost_ark)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: will_be_blood)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: dark_knight)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: airplane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: alien)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: her)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: citizen_kane)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: black_panther)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: dunkirk)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: toy_story_4)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: coco)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: inside_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: quiet_place)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: get_out)
Review.create!(comment: Faker::Lorem.paragraph(sentence_count: 5), rating: Faker::Number.within(range: 1..5), user: seed13, movie: inception)




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