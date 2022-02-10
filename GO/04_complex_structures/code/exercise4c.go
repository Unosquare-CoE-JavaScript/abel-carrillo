package main

import "fmt"

/*
 func average(numbers ...float64) float64 {
 	total := 0.0
 	for _, number := range numbers {
 		total += number
 	}
 	return total / float64(len(numbers))
 } */

func average(scores [5]float64) float64 {
	total := 0.0
	for _, num := range scores {
		total += num
	}

	return total / float64(len(scores))
}

var initialPets map[string]string = map[string]string{
	"fido":     "dog",
	"penelope": "horse",
	"nancy":    "cat",
}

var initialGroceries = []string{"beans", "lemons", "chicken", "fruit"}

func addGroceryToList(newGroceries ...string) []string {
	foods := initialGroceries
	for _, g := range newGroceries {
		foods = append(foods, g)
	}

	return foods
}
func doesPetExists(petName string) bool {
	_, ok := initialPets[petName]
	return ok
}

func main() {
	//fmt.Println(average(10, 5, 7))

	/*  scores := [5]float64{2,7,8,1,9}
	fmt.Println(average(scores)) */

	/* pet := "fido"
	petExists := doesPetExists((pet))
	fmt.Println(petExists) */

	groeceryList := addGroceryToList("beets", "chocolate")
	fmt.Println(groeceryList)
}
