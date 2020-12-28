package chat

import (
	"context"
	chat "gobackend/protos"
	"google.golang.org/grpc"
	"log"
	"net"
)

// RunServer registers gRPC service and run server
func RunServer(ctx context.Context, srv chat.ChatServiceServer, port string) error {
	listen, err := net.Listen("tcp", ":"+port)
	if err != nil {
		return err
	}

	// register service
	server := grpc.NewServer()
	chat.RegisterChatServiceServer(server, srv)

	// start gRPC server
	log.Println("starting gRPC server...")
	return server.Serve(listen)
}
