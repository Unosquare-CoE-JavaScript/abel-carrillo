package main

import "fmt"

func printAge(age1, age2 int) (ageOfSally, ageOfBob int) {
	ageOfSally = age1
	ageOfBob = age2
	return
}

func printWithSpread(ages ...int) {
	for _, value := range ages {
		fmt.Println(value)
	}
}

func main() {
	x, y := printAge(10, 21)
	fmt.Println(x)
	fmt.Println(y)

	printWithSpread(12, 13, 14, 15)
}
