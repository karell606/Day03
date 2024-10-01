// le but etait de créer une fonction qui prend une chaîne de caractères représentant une opération mathématique simpleet qui la divise en trois parties distinctes:Le premier nombre (sous forme d'entier),L'opérateur ,Le deuxième nombre (sous forme d'entier). Le résultat doit être retourné sous forme d'un tableau contenant ces trois éléments.
// par exemple: on appelle la fonction avec 3 + 4, elle doit retourner [3, "+", 4].

function splitOperation(operation) {
   
    const parts = operation.split(" ");
    //La méthode split(" ") divise la chaîne operation en morceaux, en utilisant l'espace comme séparateur.
    const firstNumber = parseInt(parts[0], 10);
    const operator = parts[1];
    const secondNumber = parseInt(parts[2], 10);
    
    return [firstNumber, operator, secondNumber];
}
//la fonction prend donc une chaîne de caractères de l'opération au format "N o N" comme demande , puique la fonction retourne un tableau avec le premier nombre (en entier), l'opérateur (en chaîne), et le second nombre (en entier), respectant la structure attendue [premierNombre, opérateur, deuxièmeNombre].
