package main

import (
	"05_toolkit/code/utils" // aliast "math"
	"fmt"
)

func calculateImportantData() int {
	totalValue := utils.Add(1, 2, 3)
	return totalValue
}

func main() {
	fmt.Println("Packages!")
	total := calculateImportantData()
	fmt.Println(total)
}
