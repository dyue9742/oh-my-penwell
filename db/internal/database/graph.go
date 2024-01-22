package database

import (
	"context"

	"storaph/internal/utils"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

type Graph struct {
	GraphDriver *neo4j.DriverWithContext
}

func (g *Graph) Create(ctx context.Context) error {
	utils.LinePrint("neo4j is creating...")
	return nil
}

func (g *Graph) Delete(ctx context.Context) error {
	utils.LinePrint("neo4j is deleting...")
	return nil
}

func (g *Graph) Update(ctx context.Context) error {
	utils.LinePrint("neo4j is updating...")
	return nil
}
