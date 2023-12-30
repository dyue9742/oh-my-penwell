package database

import (
	"context"
	"fmt"
	"os"

	M "4jFade/internal/models"

	"github.com/jackc/pgx/v5"
)

const DSN = "dbname=penwell-store password=store host=172.17.0.1 port=5432 sslmode=disable"

type PostgreSql struct {
	conn *pgx.Conn
}

func (p *PostgreSql) Init(ctx context.Context) error {
	return p.createUserTable(ctx)
}

func NewPostgreSql(ctx context.Context) (*PostgreSql, error) {
	conn, err := pgx.Connect(ctx, DSN)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	if err := conn.Ping(ctx); err != nil {
		return nil, err
	}
	defer conn.Close(ctx)
	return &PostgreSql{conn: conn}, nil
}

func (p *PostgreSql) createUserTable(ctx context.Context) error {
	query := `CREATE TABLE IF NOT EXISTS user (
		id SERIAL PRIMARY KEY,
		created_at TIMESTAMP,
		f_name VARCHAR(60) NOT NULL,
		l_name VARCHAR(60) NOT NULL,
		email VARCHAR(60) NOT NULL,
		oauth VARCHAR(60)
		)`

	_, err := p.conn.Query(ctx, query)
	return err
}

func (p *PostgreSql) CreateUser(ctx context.Context, user *M.User) error {
	query := `
		insert into user (created_at, f_name, l_name, email, )
		values ($1, $2, $3, $4)
	`

	res, err := p.conn.Query(ctx, query, user.CreatedAt, user.Firstname, user.Lastname, user.Email)
	if err != nil {
		return err
	}

	fmt.Printf("Created %+v.\n", res)
	return nil
}

func (p *PostgreSql) DeleteUser(ctx context.Context, id int) error {
	return nil
}

func (p *PostgreSql) UpdateUser(ctx context.Context, id int) error {
	return nil
}

func (p *PostgreSql) GetUsers(ctx context.Context) ([]*M.User, error) {
	rows, err := p.conn.Query(ctx, "SELECT * FROM user")
	if err != nil {
		return nil, err
	}

	users := []*M.User{}

	for rows.Next() {
		user, err := scan2User(rows)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (p *PostgreSql) GetUserByID(ctx context.Context, id int) (*M.User, error) {
	rows, err := p.conn.Query(ctx, "SELECT * FROM user WHERE id = $1", id)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		return scan2User(rows)
	}

	return nil, fmt.Errorf("user %d not found", id)
}

func scan2User(rows pgx.Rows) (*M.User, error) {
	user := new(M.User)
	err := rows.Scan(
		&user.CreatedAt,
		&user.Firstname,
		&user.Lastname,
		&user.Email)
	return user, err
}
