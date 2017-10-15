/**
* Insertion sort works like a card game, where you have to
* sort the cards on crescent order. When you take a new card
* you probably will looks on your hand to see the order. 
* If the left card is bigger than card on your hand, so you 
* have to put you card on the same position that left card is
* and the left card will increment (+1) your position. 
*/

function crescent_insertion_sort(vector) {

	var i; 
	var j;
	var aux; 

	/* We start on index 1, 
	   because for induction our first index (0) 
	   is already sorted... because we don't have
	   nothing on left side. 
	*/ 

	for (i = 1; i < vector.length; i++) {
		aux = vector[i];
		j = i - 1; 

		while ( j >= 0 && aux < vector[j]) {
			vector[j+1] = vector[j];
			j--;
		}
		vector[j+1] = aux;
	}

	return vector; 
}

function decrescent_insertion_sort(vector) {

	var i; 
	var j;
	var aux; 

	/* We start on index 1, 
	   because for induction our first index (0) 
	   is already sorted... because we don't have
	   nothing on left side. 
	*/ 

	for (i = 1; i < vector.length; i++) {
		aux = vector[i];
		j = i - 1; 

		while ( j >= 0 && aux > vector[j]) {
			vector[j+1] = vector[j];
			j--;
		}
		vector[j+1] = aux;
	}

	return vector; 

}

vector = [31, 41, 59, 26, 41, 58];

// crescent_insertion_sort(vector);
// decrescent_insertion_sort(vector);