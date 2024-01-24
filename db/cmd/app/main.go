package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"storaph/internal/controller"
	"storaph/internal/database"
)

func pgxSetup(ctx context.Context, cancelFunc context.CancelFunc) (*database.Store, error) {
	store, e := database.NewStore(ctx)
	if e != nil {
		cancelFunc()
		return nil, e
	}

	fmt.Printf("store connected:\n%+v\n", *store)
	return store, nil
}

func quitGracefully() {
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt)
	signal.Notify(sig, syscall.SIGTERM)
	go func() {
		<-sig
		fmt.Println("Quit Gracefully...")
		os.Exit(0)
	}()
}

func main() {

	go quitGracefully()

	ctx, cancelFunc := context.WithCancel(context.Background())
	store, e := pgxSetup(ctx, cancelFunc)
	if e != nil {
		log.Fatal(e)
	}

	s := controller.NewServer(":9980", *store, ctx)
	s.Run()
}
