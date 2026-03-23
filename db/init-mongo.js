db.createUser(
  {
    user: "aritriCha",
    pwd: "goduckyourself",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)
