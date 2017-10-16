/**
* Insertion sort works like a card game, where you have to
* sort the cards in ascending order. When you pick up a new card
* you'll probably looks at your hand to see the current order. 
* If the left card is bigger than the card in your hand, so you 
* have to put you card at the same position that left card is.
* And the left card will increase (+1) your position. 
*/

function crescent_insertion_sort(vector) {

	var i; 
	var j;
	var aux; 

	/* We start at index 1, 
	   by induction our first index (0) 
	   is already sorted... because we don't have
	   anything on the left side. 
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
