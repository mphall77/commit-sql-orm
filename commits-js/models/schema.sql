CREATE TABLE user (
    "id" serial NOT NULL PRIMARY KEY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);

CREATE TABLE commit (
    "id" serial NOT NULL PRIMARY KEY,
    "message" text NOT NULL,
    "userId" int NOT NULL,
    FOREIGN KEY ("userId") REFERENCES user(id)
)