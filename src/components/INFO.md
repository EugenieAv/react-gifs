Qd utiliser props et qd utiliser state

pr le giflist, on lui passe de la data => un array. donc c'et une props. props
qui doit é^tre défini dans son parent. dc App

Alors que pour app c'est à chaque input que l'aary des gif s va changer. On a là donc un state.

Qd on a un state on a besoin de finir un construcutor.


** on veut maintenant que qd on rentre un input, ca fasse un appel à l'api de giphy
  - pour remplir la liste, chaque fois que on tape une lettre on call l'api et on fetch les info
  - donc on doit ecouter l'event du clavier
  - on fait ca dans le composant search bar
