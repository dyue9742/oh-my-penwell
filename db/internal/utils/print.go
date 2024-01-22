package utils

import "fmt"

const padding = "================================"

func LinePrint(v any) {
	fmt.Printf("%+v\n%+v\n%+v\n", padding, v, padding)
}

func GridPrint(prefix string, v any) {
	fmt.Printf("%+v\n <<EOF\n%+v\nEOF\n", prefix, v)
}
