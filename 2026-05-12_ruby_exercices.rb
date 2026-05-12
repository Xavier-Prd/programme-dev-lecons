# =============================================================
# SESSION RUBY — 2026-05-12
# Thème      : Ruby fondamentaux
# Sous-thème : méthodes
# Difficulté : débutant
# Durée estimée : ~35-45 min
# =============================================================
#
# Les méthodes en Ruby permettent de regrouper du code réutilisable.
# Elles se définissent avec le mot-clé `def` et se terminent par `end`.
# En Ruby, la dernière expression évaluée est automatiquement retournée
# (pas besoin d'écrire `return` sauf cas spécial).
#
# Syntaxe de base :
#   def nom_de_la_methode(param1, param2)
#     # corps
#   end
#
#   def saluer(prenom)
#     "Bonjour, #{prenom} !"   # retourné automatiquement
#   end
#   puts saluer("Alice")   # => "Bonjour, Alice !"


# -------------------------------------------------------------
# EXERCICE 1 — Méthode de salutation
# -------------------------------------------------------------
# Écris une méthode `saluer` qui prend un prénom en paramètre
# et retourne la chaîne "Bonjour, [prénom] !"
#
# Contraintes :
# - Utilise l'interpolation de chaîne #{...}
# - La méthode doit retourner la chaîne (pas l'afficher)
#
# Exemple attendu :
#   saluer("Alice")   # => "Bonjour, Alice !"
#   saluer("Bob")     # => "Bonjour, Bob !"

# Ton code ici :


# -------------------------------------------------------------
# EXERCICE 2 — Calcul de surface
# -------------------------------------------------------------
# Écris une méthode `surface_rectangle` qui prend deux paramètres
# (largeur et hauteur) et retourne la surface du rectangle.
#
# Contraintes :
# - Les paramètres doivent avoir des valeurs par défaut (largeur = 1, hauteur = 1)
# - La méthode doit gérer le cas où les valeurs sont négatives
#   (retourner 0 dans ce cas)
#
# Exemple attendu :
#   surface_rectangle(4, 5)   # => 20
#   surface_rectangle(3)      # => 3   (hauteur par défaut = 1)
#   surface_rectangle         # => 1   (largeur et hauteur par défaut)
#   surface_rectangle(-2, 5)  # => 0

# Ton code ici :


# -------------------------------------------------------------
# EXERCICE 3 — Vérification de palindrome
# -------------------------------------------------------------
# Écris une méthode `palindrome?` qui prend une chaîne de caractères
# et retourne true si c'est un palindrome, false sinon.
# (Un palindrome se lit pareil dans les deux sens, ex: "kayak", "level")
#
# Contraintes :
# - La vérification doit être insensible à la casse ("Kayak" => true)
# - Ignore les espaces ("un nu" => true)
# - Le nom de la méthode se termine par ? (convention Ruby pour les booléens)
#
# Exemple attendu :
#   palindrome?("kayak")     # => true
#   palindrome?("Kayak")     # => true
#   palindrome?("un nu")     # => true
#   palindrome?("bonjour")   # => false

# Ton code ici :


# -------------------------------------------------------------
# EXERCICE 4 — Convertisseur de température
# -------------------------------------------------------------
# Écris deux méthodes :
#   - `celsius_to_fahrenheit(celsius)` : convertit Celsius en Fahrenheit
#   - `fahrenheit_to_celsius(fahrenheit)` : convertit Fahrenheit en Celsius
#
# Formules :
#   F = C * 9/5 + 32
#   C = (F - 32) * 5/9
#
# Contraintes :
# - Retourner le résultat arrondi à 1 décimale (utilise .round(1))
#
# Exemple attendu :
#   celsius_to_fahrenheit(0)    # => 32.0
#   celsius_to_fahrenheit(100)  # => 212.0
#   fahrenheit_to_celsius(32)   # => 0.0
#   fahrenheit_to_celsius(98.6) # => 37.0

# Ton code ici :


# -------------------------------------------------------------
# EXERCICE 5 — FizzBuzz en méthode (plus difficile)
# -------------------------------------------------------------
# Écris une méthode `fizzbuzz` qui prend un nombre entier `n` et retourne :
#   - "FizzBuzz" si n est divisible par 3 ET par 5
#   - "Fizz"     si n est divisible par 3 seulement
#   - "Buzz"     si n est divisible par 5 seulement
#   - n.to_s    (le nombre en chaîne) dans tous les autres cas
#
# Ensuite, écris une méthode `sequence_fizzbuzz(limite)` qui appelle
# `fizzbuzz` pour chaque entier de 1 à `limite` et retourne un tableau.
#
# Contraintes :
# - Utilise ta méthode `fizzbuzz` dans `sequence_fizzbuzz`
# - Pas de répétition de logique
#
# Exemple attendu :
#   fizzbuzz(3)   # => "Fizz"
#   fizzbuzz(5)   # => "Buzz"
#   fizzbuzz(15)  # => "FizzBuzz"
#   fizzbuzz(7)   # => "7"
#   sequence_fizzbuzz(15)
#   # => ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

# Ton code ici :
