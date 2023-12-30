# Demo: A simple local storage based on PostgreSQL

### 1 Let's start with a new PostgreSQL database to save user infomation and documents
```docker:
    docker run --name penwell-store -e POSTGRES_PASSWORD=store -d postgres
```

### 2 Create a new Neo4j database to save potential relationships
This binds two ports (`7474` and `7687`) for HTTP and Bolt access to the Neo4j API.
```docker:
    docker run --name penwell-graph -e NEO4J_AUTH=none -d neo4j
```

