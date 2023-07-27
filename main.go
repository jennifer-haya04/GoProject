package main

import (
	"context"
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/jennifer-haya04/GoProject/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {

	app := fiber.New()
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb://localhost:27017/waterService"))
	if err != nil {
		panic(err)
	}

	app.Use(cors.New())
	app.Static("/", "./client/dist")
	app.Get("/users", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{
			"data": "usuarios desde el backend",
		})
	})

	app.Post("/register", func(c *fiber.Ctx) error {
		var user models.User
		c.BodyParser(&user)
		coll := client.Database("waterService").Collection("users")
		coll.InsertOne(context.TODO(), bson.D{{
			Key:   "name",
			Value: user.name,
		}, {
			Key:   "dpto",
			Value: user.dpto,
		}, {
			Key:   "celular",
			Value: user.celular,
		}, {
			Key:   "email",
			Value: user.email,
		}, {
			Key:   "password",
			Value: user.password,
		}})

		return c.JSON(&fiber.Map{
			"data": "guardando usuario",
		})
	})

	app.Listen(":3000")
	fmt.Println("Hello world desde el puerto 3000")
}
