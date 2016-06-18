//This is just to have an easy way to test your webpage as if it were on a server
package main

import "net/http"

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))
	http.ListenAndServe(":8080", nil)
}
