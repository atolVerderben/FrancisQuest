//This is just to have an easy way to test your webpage as if it were on a server
package main

import (
	"log"
	"net/http"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))
	http.ListenAndServe(":8080", nil)

	log.Println("Starting Server at localhost:8080")
}
