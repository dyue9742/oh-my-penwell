package database

import (
	"context"
	"errors"
	"fmt"
	"os"
	"regexp"

	"storaph/internal/types"
	"storaph/internal/utils"

	"github.com/jackc/pgx/v5"
)

const StoreUri = "postgres://penwell:writewell@localhost:5432/store?sslmode=disable"

type Store struct {
	conn *pgx.Conn
}

func NewStore(ctx context.Context) (*Store, error) {
	c, e := pgx.Connect(ctx, StoreUri)
	if e != nil {
		_, _ = fmt.Fprintf(os.Stderr, "unable to connect to database: %v\n", e)
		os.Exit(1)
	}

	p := &Store{conn: c}

	return p, nil
}

func (p *Store) firstLaunchCheck(ctx context.Context) bool {
	exist, e := p.conn.Query(ctx, utils.TableExistQuery)
	utils.GridPrint("Exist?", exist.RawValues())

	if e != nil {
		nothing, _ := regexp.Match(`does\nnot\nexist.*`, []byte(e.Error()))
		if nothing && len(exist.RawValues()) == 0 {
			return true
		}
	}

	defer func(conn *pgx.Conn, ctx context.Context) {
		_ = conn.Close(ctx)
	}(p.conn, ctx)

	return false
}

func (p *Store) createUserTable(ctx context.Context) error {
	query := utils.TableCreateUserQuery

	_, e := p.conn.Query(ctx, query)

	defer func(conn *pgx.Conn, ctx context.Context) {
		_ = conn.Close(ctx)
	}(p.conn, ctx)

	return e
}

func (p *Store) NewUserRequest(ctx context.Context, user *types.PushUser) error {
	query := utils.NewUserQuery

	r, e := p.conn.Query(ctx, query, user.CreatedAt, user.Firstname, user.Lastname, user.Username, user.Email)
	if e != nil {
		return e
	}

	fmt.Printf("created %+v.\n", r)
	defer func(conn *pgx.Conn, ctx context.Context) {
		_ = conn.Close(ctx)
	}(p.conn, ctx)

	return nil
}

func (p *Store) DeleteUserRequest(ctx context.Context, id uint64) error {
	return nil
}

func (p *Store) UpdateUserRequest(ctx context.Context, id uint64) error {
	return nil
}

func (p *Store) GetUserByIdRequest(ctx context.Context, id uint64) (*types.PullUser, error) {
	rows, e := p.conn.Query(ctx, `SELECT * FROM 'user' WHERE id = $1`, id)
	if e != nil {
		return nil, e
	}

	for rows.Next() {
		return scan2(rows)
	}

	defer func(conn *pgx.Conn, ctx context.Context) {
		_ = conn.Close(ctx)
	}(p.conn, ctx)

	return nil, errors.New("so bad")
}

func (p *Store) GetAllUsersByAdminRequest(ctx context.Context) ([]*types.PullUser, error) {
	rows, e := p.conn.Query(ctx, `SELECT * FROM 'user'`)
	if e != nil {
		return nil, e
	}

	var allUsers []*types.PullUser

	for rows.Next() {
		user, e := scan2(rows)
		if e != nil {
			return nil, e
		}
		allUsers = append(allUsers, user)
	}

	defer func(conn *pgx.Conn, ctx context.Context) {
		_ = conn.Close(ctx)
	}(p.conn, ctx)

	return allUsers, nil
}

func scan2(rows pgx.Rows) (*types.PullUser, error) {
	user := new(types.PullUser)
	e := rows.Scan(&user.CreatedAt, &user.Firstname, &user.Lastname, &user.Username, &user.Email, &user.Id)
	return user, e
}
