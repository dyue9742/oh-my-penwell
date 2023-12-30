package main

import (
	Database "4jFade/internal/database"
	Utils "4jFade/internal/helpers"
	"context"
	"log"
	"time"
)

var initVal = 1

func main() {
	ctx, cancelFunc := context.WithCancel(context.Background())

	graph := &Database.Neo4jGraph{}
	go func() {
		time.Sleep(time.Minute)
		cancelFunc()
	}()
	if err := graph.HelloWorld(ctx); err != nil {
		log.Fatal(err)
	}

	store, err := Database.NewPostgreSql(ctx)
	if err != nil {
		log.Fatal(err)
	}

	server := Utils.NewApiServer(":9980", *store, ctx)
	server.Run()
}
