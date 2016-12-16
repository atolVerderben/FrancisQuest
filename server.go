//This is just to have an easy way to test your webpage as if it were on a server
package main

import (
	"bufio"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))
	go http.ListenAndServe(":8080", nil)

	log.Println("Starting Server at localhost:8080")
	println("Type exit to stop the server:")
	for {
		reader := bufio.NewReader(os.Stdin)
		rawtext, _ := reader.ReadString('\n')
		text := strings.TrimSpace(rawtext)
		switch text {
		case "exit":
			os.Exit(0)
		default:
			text = unRecognized()
		}
		fmt.Println(text)
	}
}

func unRecognized() string {
	return "Command not recognized.\nType 'exit' to stop server"
}
