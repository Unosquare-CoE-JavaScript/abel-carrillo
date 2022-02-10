package utils

import "fmt"

func printNum(num int) {
	fmt.Println("Current Number", num)
}

// Add adds together multiple numbers
func Add(nums ...int) int {
	total := 0
	for _, value := range nums {
		printNum(value)
		total += value
	}
	return total
}
