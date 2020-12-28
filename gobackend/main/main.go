package main

import (
	"context"
	"fmt"
	chat "gobackend/service"
	"os"
)

//goland:noinspection GoUnhandledErrorResult
func main() {
	if err := chat.RunServer(context.Background(), chat.NewChatServiceServer(), "50051"); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}
}
