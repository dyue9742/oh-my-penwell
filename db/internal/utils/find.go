package utils

import (
	"io/fs"
	"path/filepath"
	"regexp"
)

func FileFind() string {
	var files []string
	re := regexp.MustCompile(`pub\.pem`)

	_ = filepath.Walk(".", func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return nil
		}

		if !info.IsDir() && filepath.Ext(path) == ".pem" {
			if re.MatchString(path) {

				files = append(files, path)
			}
		}

		return nil
	})

	return files[0]
}
