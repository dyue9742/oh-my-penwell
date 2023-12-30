package utils

import (
	"os"
	"path/filepath"
	"regexp"
)

func FindFile() string {
	var files []string
	re := regexp.MustCompile(`Neo4j-[a-z0-9]+`)

	_ = filepath.Walk(".", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return nil
		}

		if !info.IsDir() && filepath.Ext(path) == ".txt" {
			if re.MatchString(path) {
				files = append(files, path)
			}
		}

		return nil
	})

	return files[0]
}
