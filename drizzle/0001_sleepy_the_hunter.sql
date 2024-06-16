CREATE TABLE `session` (
	`id` int AUTO_INCREMENT NOT NULL,
	`token` varchar(64),
	`userId` int,
	`timestamp` timestamp(6),
	CONSTRAINT `session_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(64),
	`password` varchar(64),
	`email` varchar(320),
	`verified` boolean,
	`activationToken` varchar(64),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;