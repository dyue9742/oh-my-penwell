package database

import (
	"context"

	"github.com/neo4j/neo4j-go-driver/v5/neo4j"
)

type Neo4jGraph struct {
	neoDriver *neo4j.DriverWithContext
}

func (g *Neo4jGraph) HelloWorld(ctx context.Context) error {
	return nil
}

func (g *Neo4jGraph) Create() {}
func (g *Neo4jGraph) Delete() {}
func (g *Neo4jGraph) Update() {}
