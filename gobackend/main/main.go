package main

import (
	"context"
	"fmt"
	"gobackend/service"
	"os"
)

//goland:noinspection GoUnhandledErrorResult
func main() {
	if err := service.RunServer(context.Background(), service.NewChatServiceServer(), "50051"); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
